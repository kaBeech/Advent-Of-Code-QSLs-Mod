import { component$ } from "@builder.io/qwik";
import { Resource, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const state = useStore({
    buttonPresses: 0,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);

      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`modifier`, "GET");
      const numberOfGames = JSON.stringify(userData);
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
