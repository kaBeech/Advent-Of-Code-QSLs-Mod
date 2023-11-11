/* eslint-disable no-irregular-whitespace */
import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import {
  useLocation,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../../plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import type { Session } from "@auth/core/types";
import DayLink from "~/components/game/dayLink/dayLink";
import type { GameInfo } from "~/types";

let gameInfo: GameInfo | null;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
  event.cookie.set("gameNumber", event.params.gameNumber, {
    path: "/",
    secure: true,
  });
  const gameInfoString = event.cookie.get("gameInfo")?.value || null;
  if (gameInfoString) {
    gameInfo = JSON.parse(gameInfoString);
  }
};

export default component$(() => {
  const state = useStore({
    gameInfo,
  });
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);
  const gameNumber = useLocation().params.gameNumber;

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

  return (
    <article class="dashedHeaders">
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
                <li>
                  Game Name:{" "}
                  {!state.gameInfo ? `Loading...` : state.gameInfo.name}
                </li>
                <li>
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
                      ) + session.value!.user!.name!}
                </li>
                <li>
                  Year: {!state.gameInfo ? `Loading...` : state.gameInfo.year}
                </li>
                <li>
                  Score: {!state.gameInfo ? `Loading...` : state.gameInfo.score}
                </li>
                <li>
                  Current Reroll Tokens:{" "}
                  <strong class="token">
                    {!state.gameInfo
                      ? `Loading...`
                      : state.gameInfo.currentRerollTokens > 9
                      ? state.gameInfo.currentRerollTokens + ""
                      : "".repeat(state.gameInfo.currentRerollTokens)}
                  </strong>
                </li>
                {state.gameInfo?.dateCompleted && (
                  <>
                    <li>Title: {state.gameInfo.title}</li>
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
                <a href="/new">°Start a New Game!°</a>
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
              <ul class="textCenter">
                <li>{gameData.name}</li>
                <li>
                  <img
                    src={session.value!.user!.image!}
                    alt="user avatar"
                    style={{ height: "1.5rem", width: "1.5rem" }}
                    width="24"
                    height="24"
                  />
                  {session.value!.user!.name!}
                </li>
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
                    <li>Title: {gameData.title}</li>
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
              <br />
              <div class="desktopShow">
                <div class="desktopShow">
                  --------------------------------------------------------------------
                </div>
                <div>
                  Challenge Modifier {`   `}¦ Modifier Option ¦ Net Score {` `}{" "}
                  ¦ Day ¦ Tokens
                </div>
                <div>
                  --------------------------------------------------------------------
                </div>
              </div>
              <div class="tabletShow">
                <h2>
                  Challenge Modifier ¦ Modifier Option ¦ Net Score ¦ Day ¦
                  Tokens
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
                        modifierOptionRerollsUsed:
                          day.modifierOptionRerollsUsed,
                        ChallengeModifier: day.ChallengeModifier,
                        ModifierOption: day.ModifierOption,
                        netScore: day.netScore,
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
  title: "Xtreme Xmas - Game Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
