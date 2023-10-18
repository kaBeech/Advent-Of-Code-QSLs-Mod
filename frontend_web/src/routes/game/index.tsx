import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import type { Session } from "@auth/core/types";

const gameNumber = 1;
const dayNumber = 1;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
};

export default component$(() => {
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);

  const state = useStore({
    gameNumber,
    dayNumber,
    buttonPresses: 0,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const gameNumber = track(() => state.gameNumber);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dayNumber = track(() => state.dayNumber);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);

      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`userdata`, "GET", userId);
      if (userData.Game.length < 1) {
        return { numberOfGames: JSON.stringify(userData.Game.length) };
      }
      const gameData = userData.Game.find(
        (game: { number: number }) => game.number === +gameNumber
      );
      const dayData = gameData.Day.find(
        (day: { number: number }) => day.number === +dayNumber
      );
      console.log("gameData", gameData);
      return {
        numberOfGames: JSON.stringify(userData.Game.length),
        challengeModifier: dayData.challengeModifierId
          ? dayData.ChallengeModifier.text
          : "None",
        modifierOption: dayData.modifierOptionId
          ? dayData.ModifierOption.text
          : "None",
        currentRerollTokens: gameData.currentRerollTokens,
        currentDay: gameData.currentDay,
        currentDayCompleted: gameData.currentDayCompleted ? "Yes" : "No",
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

        <Resource
          value={xtremeXmasUserDataResource}
          onPending={() => {
            return (
              <div>
                <input
                  class="pointer"
                  type="number"
                  onInput$={(ev: any) => (state.gameNumber = ev.target.value)}
                  value={state.gameNumber}
                  min={1}
                  max={1}
                  aria-labelledby="Game ID"
                />
                <input
                  class="pointer"
                  type="number"
                  onInput$={(ev: any) => (state.dayNumber = ev.target.value)}
                  value={state.dayNumber}
                  min={1}
                  max={1}
                  aria-labelledby="Day ID"
                />
                <h2>
                  Challenge Modifier: <strong>Loading...</strong>
                </h2>
                <h3>Modifier Option: Loading...</h3>
                <div>
                  Current Reroll Tokens: <strong>Loading...</strong>
                </div>
                <div>
                  Current Day: <strong>Loading...</strong>
                </div>
                <div>
                  Current Day Completed?: <strong>Loading...</strong>
                </div>
                <div>
                  Selected Day Part 1 Completed?: <strong>Loading...</strong>
                </div>
                <div>
                  Selected Day Part 2 Completed?: <strong>Loading...</strong>
                </div>
              </div>
            );
          }}
          onResolved={(xtremeXmasData) => {
            if (+xtremeXmasData.numberOfGames < 1) {
              return (
                <div>
                  <h2>
                    Please <a href="/new">[Start a New Game!]</a>
                  </h2>
                </div>
              );
            }

            return (
              <>
                <input
                  class="pointer"
                  type="number"
                  onInput$={(ev: any) => (state.gameNumber = ev.target.value)}
                  value={state.gameNumber}
                  min={1}
                  max={xtremeXmasData.numberOfGames}
                  aria-labelledby="Game ID"
                />
                <input
                  class="pointer"
                  type="number"
                  onInput$={(ev: any) => (state.dayNumber = ev.target.value)}
                  value={state.dayNumber}
                  min={1}
                  max={xtremeXmasData.currentDay}
                  aria-labelledby="Day ID"
                />
                <div class="flex column">
                  <h2>
                    Challenge Modifier:{" "}
                    <strong>{xtremeXmasData.challengeModifier}</strong>{" "}
                    {xtremeXmasData.part2Completed === "Yes" ? (
                      <></>
                    ) : xtremeXmasData.challengeModifier === "None" ? (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${state.dayNumber}/roll`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [Roll Initial Challenge Modifier]
                      </a>
                    ) : (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${state.dayNumber}/reroll/modifier`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [Reroll Challenge Modifier]
                      </a>
                    )}
                  </h2>
                  <h3>
                    Modifier Option:{" "}
                    <strong>{xtremeXmasData.modifierOption}</strong>
                    {xtremeXmasData.modifierOption === "None" ||
                    xtremeXmasData.part2Completed === "Yes" ? (
                      <></>
                    ) : (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${state.dayNumber}/reroll/option`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [Reroll Modifier Option]
                      </a>
                    )}
                  </h3>
                  <div>
                    Current Reroll Tokens:{" "}
                    <strong>{xtremeXmasData.currentRerollTokens}</strong>
                  </div>
                  <div>
                    Current Day: <strong>{xtremeXmasData.currentDay}</strong>{" "}
                    {xtremeXmasData.currentDayCompleted !== "Yes" ||
                    xtremeXmasData.currentDay != +state.dayNumber ? (
                      <></>
                    ) : (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${
                              +state.dayNumber + 1
                            }`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [ Start Next Day]
                      </a>
                    )}
                  </div>
                  <div>
                    Current Day Completed?{" "}
                    <strong>{xtremeXmasData.currentDayCompleted}</strong>{" "}
                    {xtremeXmasData.part2Completed !== "Yes" ||
                    xtremeXmasData.currentDayCompleted === "Yes" ||
                    xtremeXmasData.currentDay != +state.dayNumber ? (
                      <></>
                    ) : (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/complete`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [Complete Day]
                      </a>
                    )}
                  </div>
                  <div>
                    Selected Day Part 1 Completed?{" "}
                    <strong>{xtremeXmasData.part1Completed}</strong>{" "}
                    {xtremeXmasData.challengeModifier === "None" ||
                    xtremeXmasData.part1Completed === "Yes" ? (
                      <></>
                    ) : (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${state.dayNumber}/complete/part1`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [Complete Part 1]
                      </a>
                    )}
                  </div>
                  <div>
                    Selected Day Part 2 Completed?{" "}
                    <strong>{xtremeXmasData.part2Completed}</strong>{" "}
                    {xtremeXmasData.part1Completed !== "Yes" ||
                    xtremeXmasData.part2Completed === "Yes" ? (
                      <></>
                    ) : (
                      <a
                        onClick$={async () => {
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${state.dayNumber}/complete/part2`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        [Complete Part 2]
                      </a>
                    )}
                  </div>{" "}
                </div>
              </>
            );
          }}
        />
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
