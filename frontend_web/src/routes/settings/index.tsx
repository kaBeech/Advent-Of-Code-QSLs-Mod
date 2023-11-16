import {
  $,
  Resource,
  component$,
  useResource$,
  useStore,
} from "@builder.io/qwik";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../plugin@auth";

export default component$(() => {
  const [areLightsOn, setLightsBoolean] = useLocalStorage("areLightsOn", false);

  const toggleLights = $(() => {
    areLightsOn.value ? setLightsBoolean(false) : setLightsBoolean(true);
  });
  const state = useStore({
    displayName: "username" as "username" | "name" | undefined,
  });

  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);

  const xtremeXmasUserDataResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const userData = await serverFetcher(`userdata`, "GET", userId);
    const userSettingsData: { displayName: "name" | "username" | undefined } = {
      displayName: undefined,
    };
    if (userData.username === userData.oauthUsername) {
      userSettingsData.displayName = "username";
      state.displayName = "username";
      return userSettingsData;
    } else if (userData.username === userData.oauthName) {
      userSettingsData.displayName = "name";
      state.displayName = "name";
    } else {
      throw new Error("Usernames don't match");
    }
    return userSettingsData;
  });

  return (
    <article>
      <h1>Settings</h1>
      {areLightsOn.value ? (
        <p>
          <em class="pointer stitchLettering textGreen" onClick$={toggleLights}>
            󱨥
          </em>{" "}
          Christmas Lights are ON by default
        </p>
      ) : (
        <p>
          <em class="pointer stitchLettering textRed" onClick$={toggleLights}>
            󱨦
          </em>{" "}
          Christmas Lights are OFF by default
        </p>
      )}
      <Resource
        value={xtremeXmasUserDataResource}
        onPending={() => {
          return <></>;
        }}
        onResolved={() => {
          if (state.displayName === "username") {
            return (
              <p>
                <em
                  class="pointer stitchLettering textGreen"
                  onClick$={async () => {
                    await serverFetcher(`user/username`, "PUT", userId, {
                      username: "username",
                    });
                    state.displayName = "name";
                  }}
                >
                  󱨥
                </em>{" "}
                Display Name is set to OAuth Username
              </p>
            );
          } else
            return (
              <p>
                <em
                  class="pointer stitchLettering textRed"
                  onClick$={async () => {
                    await serverFetcher(`user/username`, "PUT", userId, {
                      username: "name",
                    });
                    state.displayName = "username";
                  }}
                >
                  󱨦
                </em>{" "}
                Display Name is set to OAuth Name
              </p>
            );
        }}
      />
    </article>
  );
});
