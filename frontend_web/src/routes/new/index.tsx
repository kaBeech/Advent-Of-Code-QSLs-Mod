import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";

const title = "Test Game";
const year = 2022;
const playerName = "Me!";

export default component$(() => {
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);

  const state = useStore({
    title,
    year,
    playerName,
    buttonPresses: 0,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const title = track(() => state.title);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const year = track(() => state.year);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const playerName = track(() => state.playerName);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);

      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`userdata`, "GET", userId);
      const numberOfGames = JSON.stringify(userData.Game.length);
      return {
        numberOfGames: numberOfGames ? numberOfGames : "None",
      };
    }
  );

  return (
    <div>
      <div>
        <h1 class="title">Create New Game</h1>
        <h2>Enter Title, Year, and Player Name:</h2>
        <input
          class="pointer"
          type="text"
          onInput$={(ev: any) => (state.title = ev.target.value)}
          value={title}
          minLength={1}
          maxLength={256}
          aria-labelledby="Title"
        />
        <input
          class="pointer"
          type="number"
          onInput$={(ev: any) => (state.year = ev.target.value)}
          value={year}
          min="2014"
          max="2023"
          aria-labelledby="Year"
        />
        <input
          class="pointer"
          type="text"
          onInput$={(ev: any) => (state.playerName = ev.target.value)}
          value={playerName}
          minLength={1}
          maxLength={256}
          aria-labelledby="Player Name"
        />
        <Resource
          value={xtremeXmasUserDataResource}
          onPending={() => {
            return (
              <div>
                <h2>
                  Number Of Games: <strong>Loading...</strong>
                </h2>
              </div>
            );
          }}
          onResolved={(xtremeXmasData) => {
            return (
              <div class="flex column">
                <div>
                  Number Of Games:{" "}
                  <strong>{xtremeXmasData.numberOfGames}</strong>
                </div>
                <button
                  onClick$={async () => {
                    await serverFetcher(
                      `game/${+xtremeXmasData.numberOfGames + 1}`,
                      "PUT",
                      userId,
                      {
                        name: state.title,
                        year: state.year,
                        playerName: state.playerName,
                      }
                    );
                    state.buttonPresses++;
                  }}
                >
                  Create New Game
                </button>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - New Game",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
