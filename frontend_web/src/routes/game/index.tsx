import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, server$ } from "@builder.io/qwik-city";

const gameID = 1;
const dayID = 1;

const serverFetcher = server$(async function (route: string, method: string) {
  //   const xtremeXmasAPI = this.env.get("XTREME_XMAS_API");
  // if (xtremeXmasAPI == undefined) {
  //   console.error("XTREME_XMAS_API string not found upon request");
  // }
  const xtremeXmasAPI = "http://localhost:8000";
  const abortController = new AbortController();
  const res = await fetch(`${xtremeXmasAPI}/${route}`, {
    signal: abortController.signal,
    method,
  });
  const data = await res.json();
  return data;
});

export default component$(() => {
  const state = useStore({
    gameID,
    dayID,
    buttonPresses: 0,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const gameID = track(() => state.gameID);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dayID = track(() => state.dayID);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`user/1`, "GET");
      const gameData = userData.Game.find(
        (game: { number: number }) => game.number === +gameID
      );
      const dayData = gameData.Day.find(
        (day: { number: number }) => day.number === +dayID
      );
      return {
        challengeModifier: dayData.challengeModifierId
          ? dayData.ChallengeModifier.text
          : "None",
        modifierOption: dayData.modifierOptionId
          ? dayData.ModifierOption.text
          : "None",
        currentRerollTokens: gameData.currentRerollTokens,
        currentDay: gameData.currentDay,
        currentDayCompleted: dayData.currentDayCompleted ? "Yes" : "No",
        part1Completed: dayData.part1Completed ? "Yes" : "No",
        part2Completed: dayData.part2Completed ? "Yes" : "No",
      };
    }
  );

  return (
    <div>
      <div>
        <h1 class="title">Xtreme Xmas Day Viewer</h1>

        <h2>Enter Game and Day IDs:</h2>
        <input
          class="pointer"
          type="number"
          onInput$={(ev: any) => (state.gameID = ev.target.value)}
          value={gameID}
          aria-labelledby="Game ID"
        />
        <input
          class="pointer"
          type="number"
          onInput$={(ev: any) => (state.dayID = ev.target.value)}
          value={dayID}
          aria-labelledby="Day ID"
        />
        <Resource
          value={xtremeXmasUserDataResource}
          onPending={() => {
            return (
              <div>
                <h2>
                  Challenge Modifier: <strong>Loading...</strong>
                </h2>
                <h3>Modifier Option: Loading...</h3>
              </div>
            );
          }}
          onResolved={(xtremeXmasData) => {
            return (
              <div class="flex column">
                <h2>
                  Challenge Modifier:{" "}
                  <strong>{xtremeXmasData.challengeModifier}</strong>
                </h2>
                <h3>
                  Modifier Option:{" "}
                  <strong>{xtremeXmasData.modifierOption}</strong>
                </h3>
                <div>
                  Current Reroll Tokens:{" "}
                  <strong>{xtremeXmasData.currentRerollTokens}</strong>
                </div>
                <div>
                  Current Day: <strong>{xtremeXmasData.currentDay}</strong>
                </div>
                <div>
                  Current Day Completed?{" "}
                  <strong>{xtremeXmasData.currentDayCompleted}</strong>
                </div>
                <div>
                  Selected Day Part 1 Completed?{" "}
                  <strong>{xtremeXmasData.part1Completed}</strong>
                </div>
                <div>
                  Selected Day Part 2 Completed?{" "}
                  <strong>{xtremeXmasData.part2Completed}</strong>
                </div>
              </div>
            );
          }}
        />
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/complete/part1`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Complete Part 1
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/complete/part2`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Complete Part 2
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/complete`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Complete Day
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${+state.dayID + 1}`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Start Next Day
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/roll`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Roll Initial Challenge Modifier
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/reroll/modifier`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Reroll Challenge Modifier
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/reroll/option`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Reroll Modifier Option
        </button>
        <p>
          <Link href="../">{"<-- Back"}</Link>
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Day Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
