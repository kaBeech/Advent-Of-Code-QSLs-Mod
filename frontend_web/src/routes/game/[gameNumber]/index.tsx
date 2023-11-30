/* eslint-disable no-irregular-whitespace */
import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./game.css?inline";
import {
  useLocation,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../../plugin@auth";
import type { Session } from "@auth/core/types";
import DayLink from "~/components/game/dayLink/dayLink";
import type { GameInfo } from "~/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
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
  useStylesScoped$(styles);
  const state = useStore({
    gameInfo,
  });
  const session = useAuthSession();
  // This is not actually using email - it's a hack to get Qwik's DefaultSession to make the User's ID accessible
  const userId = constructUserId(
    session.value!.user!.email!,
    session.value!.user!.image!
  );
  const gameNumber = useLocation().params.gameNumber;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [getYear, setYear] = useLocalStorage("year", 2014);

  const gameDataResource = useResource$<any>(async ({ cleanup }) => {
    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const gameData = await serverFetcher(
      `gamedata/${gameNumber}`,
      "GET",
      userId
    );
    state.gameInfo = gameData;
    return gameData;
  });

  useVisibleTask$(async () => {
    const gameData = await gameDataResource.value;
    setYear(gameData.year);
  });

  return (
    <article class="mobileDashedHeaders">
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
              <p>
                Player:{" "}
                {!state.gameInfo
                  ? `Loading...`
                  : (
                      <img
                        src={session.value!.user!.image!}
                        alt="user avatar"
                        style={{ height: "1.5rem", width: "1.5rem" }}
                        width="24"
                        height="24"
                      />
                    ) +
                    " " +
                    session.value!.user!.name!}
              </p>
              <p>
                Year: {!state.gameInfo ? `Loading...` : state.gameInfo.year}
              </p>
              <p>
                Score: {!state.gameInfo ? `Loading...` : state.gameInfo.score}
              </p>
              <p>
                Current Reroll Tokens:{" "}
                <strong class="token">
                  {!state.gameInfo
                    ? `Loading...`
                    : state.gameInfo.currentRerollTokens > 9
                    ? state.gameInfo.currentRerollTokens + ""
                    : "".repeat(state.gameInfo.currentRerollTokens)}
                </strong>
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
              <h1 class={``}>{gameData.name}</h1>
              <h2 class={``}>
                <img
                  src={session.value!.user!.image!}
                  alt="user avatar"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                  width="24"
                  height="24"
                />{" "}
                {gameData.User.username}
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
              <br />
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
              <p>
                <a href={`day/${gameData.currentDay}/`} class="textGreen">
                  °Continue Current Day°
                </a>
              </p>
              <br />
              <p>
                <a
                  href="edit"
                  class={
                    gameData.repositoryLink && !gameData.isPublic
                      ? "textGreen"
                      : ""
                  }
                >
                  °Edit Game°
                </a>
              </p>
              <p>
                {" "}
                <a
                  href={`https://adventofcode.com/${gameData.year}/`}
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
              {gameData.repositoryLink && gameData.isPublic && (
                <p>
                  <a href={`/game/public/${gameData.id}/`} class="textGreen">
                    °Public Link°
                  </a>
                </p>
              )}
              <br />
              <div class="desktopShow">
                <div class="desktopShow">
                  --------------------------------------------------------------------
                </div>
                <div>
                  Challenge Modifier {`   `}¦ Modifier Option ¦ Day Score {` `}{" "}
                  ¦ Day ¦ Tokens
                </div>
                <div>
                  --------------------------------------------------------------------
                </div>
              </div>
              <div class="desktopHide">
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
      <br />
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
