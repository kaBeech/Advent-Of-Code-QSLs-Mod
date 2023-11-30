import {
  Resource,
  component$,
  useResource$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../../../plugin@auth";
import type { Session } from "@auth/core/types";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation, type RequestHandler } from "@builder.io/qwik-city";
import type { GameInfo } from "~/types";
import constructUserId from "~/util/constructUserId";
import { isNumeric } from "~/util/isNumeric";

let gameInfo: GameInfo | null;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
  let gameNumber = event.params.gameNumber;
  if (!isNumeric(gameNumber)) {
    gameNumber = "1";
  }
  event.cookie.set("gameNumber", gameNumber, {
    path: "/",
    secure: true,
  });
  const gameInfoString = event.cookie.get("gameInfo")?.value || null;
  if (gameInfoString) {
    gameInfo = JSON.parse(gameInfoString);
  }
};

export default component$(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [getYear, setYear] = useLocalStorage("year", 2014);

  const session = useAuthSession();
  // This is not actually using email - it's a hack to get Qwik's DefaultSession to make the User's ID accessible
  const userId = constructUserId(
    session.value!.user!.email!,
    session.value!.user!.image!
  );
  const gameNumber = useLocation().params.gameNumber;

  const state = useStore({
    gameInfo,
    loading: false,
  });

  const gameDataResource = useResource$<any>(async ({ track, cleanup }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const gameInfo = track(() => state.gameInfo);
    state.loading = true;

    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const gameData = await serverFetcher(
      `gamedata/${gameNumber}`,
      "GET",
      userId
    );
    state.loading = false;
    state.gameInfo = gameData;
    return gameData;
  });

  useVisibleTask$(async () => {
    const gameData = await gameDataResource.value;
    setYear(gameData.year);
  });

  return (
    <article>
      <h1>Edit Game</h1>
      <Resource
        value={gameDataResource}
        onPending={() => {
          state.loading = true;
          return <></>;
        }}
        onResolved={(gameData) => {
          state.loading = false;
          return (
            <>
              <p class={`marginBottom0`}>{gameData.name}</p>
              <p class={`marginTop0`}>
                <img
                  src={session.value!.user!.image!}
                  alt="user avatar"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                  width="24"
                  height="24"
                />{" "}
                {gameData.User.username}
              </p>
              {state.gameInfo!.isPublic ? (
                <p>
                  <em
                    class="pointer textGreen"
                    onClick$={async () => {
                      await serverFetcher(
                        `game/${gameNumber}/public`,
                        "PUT",
                        userId,
                        {
                          isPublic: false,
                        }
                      );
                      state.gameInfo!.isPublic = false;
                    }}
                  >
                    󱨥
                  </em>{" "}
                  Game is Public
                </p>
              ) : (
                <p>
                  <em
                    class="pointer textRed"
                    onClick$={async () => {
                      await serverFetcher(
                        `game/${gameNumber}/public`,
                        "PUT",
                        userId,
                        {
                          isPublic: true,
                        }
                      );
                      state.gameInfo!.isPublic = true;
                    }}
                  >
                    󱨦
                  </em>{" "}
                  Game is Private
                </p>
              )}
              <p>
                <label for="name">Name: </label>
                <input
                  id="name"
                  class="pointer"
                  type="text"
                  onInput$={(ev: any) =>
                    (state.gameInfo!.name = ev.target.value)
                  }
                  value={gameData.name}
                  maxLength={70}
                  aria-labelledby="Name"
                />
                <span
                  class="pointer textRed"
                  onClick$={async () => {
                    await serverFetcher(
                      `game/${gameNumber}/name`,
                      "PUT",
                      userId,
                      {
                        name: gameData.name,
                      }
                    );
                    state.gameInfo!.name = gameData.name;
                  }}
                >
                  {" "}
                  °Update Name°
                </span>
              </p>
              <p>
                <label for="name">Repository Link: </label>
                <input
                  id="repoLink"
                  class="pointer"
                  type="url"
                  onInput$={(ev: any) =>
                    (state.gameInfo!.repositoryLink = ev.target.value)
                  }
                  value={gameData.repositoryLink}
                  maxLength={255}
                  aria-labelledby="Repository Link"
                />
                <span
                  class="pointer textRed"
                  onClick$={async () => {
                    await serverFetcher(
                      `game/${gameNumber}/repolink`,
                      "PUT",
                      userId,
                      {
                        repositoryLink: gameData.repositoryLink,
                      }
                    );
                    state.gameInfo!.repositoryLink = gameData.repositoryLink;
                  }}
                >
                  {" "}
                  °Update Repo Link°
                </span>
              </p>
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Edit Game",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
