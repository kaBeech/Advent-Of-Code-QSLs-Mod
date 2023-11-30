/* eslint-disable no-irregular-whitespace */
import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "../../[gameNumber]/game.css?inline";
import { useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import DayLink from "~/components/game/dayLink/dayLink";
import type { GameInfo } from "~/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";

let gameInfo: GameInfo | null;

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    gameInfo,
  });
  const gameId = useLocation().params.id;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [getYear, setYear] = useLocalStorage("year", 2014);

  const gameDataResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const gameData = await serverFetcher(`game/public/${gameId}`, "GET");
    state.gameInfo = gameData;
    return gameData;
  });

  useVisibleTask$(async () => {
    const gameData = await gameDataResource.value;
    setYear(gameData.year);
  });

  return (
    <article class="mobileDashedHeaders">
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
              <p>
                Game Name:{" "}
                {!state.gameInfo ? `Loading...` : state.gameInfo.name}
              </p>
              <p>Player: Loading...</p>
              <p>
                Year: {!state.gameInfo ? `Loading...` : state.gameInfo.year}
              </p>
              <p>
                Score: {!state.gameInfo ? `Loading...` : state.gameInfo.score}
              </p>
              <p>
                Current Reroll Tokens:{" "}
                {!state.gameInfo
                  ? `Loading...`
                  : state.gameInfo.currentRerollTokens > 9
                  ? state.gameInfo.currentRerollTokens + ""
                  : "".repeat(state.gameInfo.currentRerollTokens)}
              </p>
              {state.gameInfo?.dateCompleted && (
                <>
                  <p>Title: {state.gameInfo.title}</p>
                  <p>
                    Completed During Calendar Year:{" "}
                    {state.gameInfo.dateCompleted.toString().slice(0, 4) ===
                    state.gameInfo.year.toString()
                      ? "Yes"
                      : "No"}
                  </p>
                </>
              )}
              <p>
                Completed During Calendar Year?{" "}
                {!state.gameInfo
                  ? `Loading...`
                  : state.gameInfo.dateCompleted?.toString().slice(0, 4) ===
                    state.gameInfo.year.toString()
                  ? "Yes"
                  : "No"}
              </p>
              <ul>
                {pendingDays.map((day: { number: number }) => (
                  <DayLink
                    key={`pendingDay-${day.number}`}
                    dayNumber={day.number}
                  />
                ))}
              </ul>
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
                <ul>
                  {" "}
                  {dummyDays.map((day: { number: number }) => (
                    <DayLink
                      key={`lockedDay-${day.number}`}
                      dayNumber={day.number}
                    />
                  ))}
                </ul>
                <br />
                <a href="/new" class="textGreen">
                  °Start a New Game!°
                </a>
              </>
            );
          }
          const lockedDays = [];
          for (let i = gameData.currentDay + 1; i <= 25; i++) {
            lockedDays.push({ number: i });
          }
          const sortedDays = gameData.Day.sort(
            (a: { number: number }, b: { number: number }) => {
              return a.number - b.number;
            }
          );
          return (
            <>
              <h1>{gameData.name}</h1>
              <h2>
                <img
                  src={gameData.User.oauthAvatarUrl}
                  alt="user avatar"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                  width="24"
                  height="24"
                />{" "}
                <span style={`vertical-align: text-top`}>
                  {gameData.User.username}
                </span>
              </h2>
              <br />
              <p>Year: {gameData.year}</p>
              <p>Score: {gameData.score}</p>
              <p>
                Current Reroll Tokens:{" "}
                <strong class="token">
                  {gameData.currentRerollTokens > 9
                    ? gameData.currentRerollTokens + ""
                    : "".repeat(gameData.currentRerollTokens)}
                </strong>
              </p>
              {gameData.dateCompleted && (
                <>
                  <p>Title: {gameData.title}</p>
                  <p>
                    Completed During Calendar Year?{" "}
                    {gameData.dateCompleted.toString().slice(0, 4) ===
                    gameData.year.toString()
                      ? "Yes"
                      : "No"}
                  </p>
                </>
              )}
              <br />
              <p>
                {" "}
                <a
                  href={`https://adventofcode.com/${gameData.year}/day/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="textGreen"
                >
                  {" "}
                  °Puzzle Link°
                </a>
              </p>
              {gameData.repositoryLink && (
                <p>
                  {" "}
                  <a
                    href={gameData.repositoryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    °Repo Link°
                  </a>
                </p>
              )}
              <br />
              <div class="desktopShow">
                <div>
                  --------------------------------------------------------------------
                </div>
                <h2>
                  Challenge Modifier {`   `}¦ Modifier Option ¦ Day Score {` `}{" "}
                  ¦ Day ¦ Tokens
                </h2>
                <div>
                  --------------------------------------------------------------------
                </div>
              </div>
              <div class="tabletShow">
                <h2 class={`textCenter marginBottom2`}>
                  <p>Day</p>
                  <p>Tokens</p>
                  <p>Challenge Modifier</p>
                  <p>Modifier Option</p>
                  <p>Day Score</p>
                </h2>
              </div>
              <ul>
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
                    score: number;
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
                        modifierOptionRerollsUsed:
                          day.modifierOptionRerollsUsed,
                        ChallengeModifier: day.ChallengeModifier,
                        ModifierOption: day.ModifierOption,
                        score: day.score,
                      }}
                    />
                  )
                )}
              </ul>
              <ul>
                {lockedDays.map((day: { number: number }) => (
                  <DayLink
                    key={`lockedDay-${day.number}`}
                    dayNumber={day.number}
                  />
                ))}
              </ul>
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Game Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
