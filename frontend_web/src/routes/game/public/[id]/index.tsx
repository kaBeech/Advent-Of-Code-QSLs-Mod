import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import DayLink from "~/components/game/dayLink/dayLink";
import type { GameInfo } from "~/types";

let gameInfo: GameInfo | null;

export default component$(() => {
  const state = useStore({
    gameInfo,
  });
  const gameId = useLocation().params.id;

  const gameDataResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const gameData = await serverFetcher(`game/public/${gameId}`, "GET");
    state.gameInfo = gameData;
    return gameData;
  });

  return (
    <article>
      <br />
      <Resource
        value={gameDataResource}
        onPending={() => {
          const pendingDays = [];
          for (let i = 1; i <= 25; i++) {
            pendingDays.push({ number: i });
          }
          return (
            <>
              <ul>
                <li>Test</li>
                <li>
                  Game Name:{" "}
                  {!state.gameInfo ? `Loading...` : state.gameInfo.name}
                </li>
                <li>Player: Loading...</li>
                <li>
                  Year: {!state.gameInfo ? `Loading...` : state.gameInfo.year}
                </li>
                <li>
                  Score: {!state.gameInfo ? `Loading...` : state.gameInfo.score}
                </li>
                <li>
                  Current Reroll Tokens:{" "}
                  {!state.gameInfo
                    ? `Loading...`
                    : state.gameInfo.currentRerollTokens > 9
                    ? state.gameInfo.currentRerollTokens + ""
                    : "".repeat(state.gameInfo.currentRerollTokens)}
                </li>
                {state.gameInfo?.dateCompleted && (
                  <>
                    <li>Rank: {state.gameInfo.rank}</li>
                    <li>
                      Completed During Calendar Year:{" "}
                      {state.gameInfo.dateCompleted.toString().slice(0, 4) ===
                      state.gameInfo.year.toString()
                        ? "Yes"
                        : "No"}
                    </li>
                  </>
                )}
                <li>
                  Completed During Calendar Year?{" "}
                  {!state.gameInfo
                    ? `Loading...`
                    : state.gameInfo.dateCompleted?.toString().slice(0, 4) ===
                      state.gameInfo.year.toString()
                    ? "Yes"
                    : "No"}
                </li>
              </ul>
              {pendingDays.map((day: { number: number }) => (
                <DayLink
                  key={`pendingDay-${day.number}`}
                  dayNumber={day.number}
                />
              ))}
            </>
          );
        }}
        onResolved={(gameData) => {
          if (gameData.currentDay === undefined) {
            const dummyDays = [];
            for (let i = 25; i > 0; i--) {
              dummyDays.push({ number: i });
            }
            return (
              <>
                {dummyDays.map((day: { number: number }) => (
                  <DayLink
                    key={`lockedDay-${day.number}`}
                    dayNumber={day.number}
                  />
                ))}
                <br />
                <a href="/new">Start a New Game!</a>
              </>
            );
          }
          const lockedDays = [];
          for (let i = 25; i > gameData.currentDay; i--) {
            lockedDays.push({ number: i });
          }
          const sortedDays = gameData.Day.sort(
            (a: { number: number }, b: { number: number }) => {
              return b.number - a.number;
            }
          );
          return (
            <>
              <ul>
                <li>Test</li>
                <li>{gameData.name}</li>
                <li>Year: {gameData.year}</li>
                <li>Score: {gameData.score}</li>
                <li>
                  Current Reroll Tokens:{" "}
                  <strong class="token">
                    {gameData.currentRerollTokens > 9
                      ? gameData.currentRerollTokens + ""
                      : "".repeat(gameData.currentRerollTokens)}
                  </strong>
                </li>
                {gameData.dateCompleted && (
                  <>
                    <li>Rank: {gameData.rank}</li>
                    <li>
                      Completed During Calendar Year?{" "}
                      {gameData.dateCompleted.toString().slice(0, 4) ===
                      gameData.year.toString()
                        ? "Yes"
                        : "No"}
                    </li>
                  </>
                )}
              </ul>
              {lockedDays.map((day: { number: number }) => (
                <DayLink
                  key={`lockedDay-${day.number}`}
                  dayNumber={day.number}
                />
              ))}
              {sortedDays.map(
                (day: {
                  number: number;
                  challengeModifierId: string;
                  modifierOptionId: string;
                  part1Completed: string | null;
                  part2Completed: string | null;
                  challengeModifierRerollsUsed: number;
                  modifierOptionRerollsUsed: number;
                  ChallengeModifier?: {
                    name: string;
                  };
                  ModifierOption?: {
                    name: string;
                    text: string;
                  };
                  netScore: number;
                }) => (
                  <DayLink
                    key={`unlockedDay-${day.number}`}
                    dayNumber={day.number}
                    dayLinkData={{
                      challengeModifierId: day.challengeModifierId,
                      modifierOptionId: day.modifierOptionId,
                      part1Completed: day.part1Completed,
                      part2Completed: day.part2Completed,
                      challengeModifierRerollsUsed:
                        day.challengeModifierRerollsUsed,
                      modifierOptionRerollsUsed: day.modifierOptionRerollsUsed,
                      ChallengeModifier: day.ChallengeModifier,
                      ModifierOption: day.ModifierOption,
                      netScore: day.netScore,
                    }}
                  />
                )
              )}
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Game Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
