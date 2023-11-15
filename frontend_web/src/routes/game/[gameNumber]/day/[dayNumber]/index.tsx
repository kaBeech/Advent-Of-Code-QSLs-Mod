import {
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import {
  useLocation,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import type { Session } from "@auth/core/types";
import { useAuthSession } from "~/routes/plugin@auth";
import styles from "./day.css?inline";
import type { DayInfo } from "~/types";

let dayInfo: DayInfo | null;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
  event.cookie.set("gameNumber", event.params.gameNumber, {
    path: "/",
    secure: true,
  });
  const dayInfoString = event.cookie.get("dayInfo")?.value || null;
  if (dayInfoString) {
    dayInfo = JSON.parse(dayInfoString);
  }
};

export default component$(() => {
  useStylesScoped$(styles);
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);
  const gameNumber = useLocation().params.gameNumber;
  const dayNumber = useLocation().params.dayNumber;

  const state = useStore({
    gameNumber,
    dayNumber,
    buttonPresses: 0,
    loading: false,
    dayInfo,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);
      state.loading = true;

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
      state.loading = false;
      let rerollTokensEarned = 0;
      if (dayData.modifierWhenPart1CompletedId) {
        rerollTokensEarned += 1;
      }
      if (dayData.part2Completed && dayData.challengeModifierId) {
        rerollTokensEarned += 1;
      }
      const dayInfoData = {
        numberOfGames: JSON.stringify(userData.Game.length),
        challengeModifier: dayData.challengeModifierId
          ? dayData.ChallengeModifier.text
          : "None",
        modifierOption: dayData.modifierOptionId
          ? dayData.ModifierOption.text
          : "None",
        rerollTokensSpentDuringPart1:
          dayData.challengeModifierRerollsUsed * 2 +
          dayData.modifierOptionRerollsUsed -
          dayData.rerollTokensSpentDuringPart2,
        rerollTokensSpentDuringPart2: dayData.rerollTokensSpentDuringPart2,
        currentRerollTokens: gameData.currentRerollTokens,
        score: dayData.score,
        currentDay: gameData.currentDay,
        currentDayCompleted: gameData.currentDayCompleted,
        part1Completed: dayData.part1Completed || null,
        modifierWhenPart1Completed: dayData.modifierWhenPart1CompletedId
          ? dayData.ModifierWhenPart1Completed.text
          : "None",
        optionWhenPart1Completed: dayData.optionWhenPart1CompletedId
          ? dayData.OptionWhenPart1Completed.text
          : "None",
        part2Completed: dayData.part2Completed || null,
        number: dayData.number,
        dateFirstRolled: dayData.dateFirstRolled || null,
        rerollTokensEarned,
      };
      state.dayInfo = dayInfoData;
      console.log(dayData);
      return dayInfoData;
    }
  );

  return (
    <article>
      <h1 class="title">Day {dayNumber}</h1>
      <Resource
        value={xtremeXmasUserDataResource}
        onPending={() => {
          state.loading = true;
          return (
            <ul>
              <li>
                Reroll Tokens Earned:{" "}
                <strong>
                  {state.dayInfo?.part2Completed
                    ? ""
                    : state.dayInfo?.part1Completed
                    ? ""
                    : ""}
                </strong>
              </li>
              <li>
                Reroll Tokens Spent During Part 1:{" "}
                <strong>
                  {(state.dayInfo?.rerollTokensSpentDuringPart1 || 0) > 9
                    ? state.dayInfo?.rerollTokensSpentDuringPart1 + ""
                    : "".repeat(
                        state.dayInfo?.rerollTokensSpentDuringPart1 || 0
                      )}
                </strong>
              </li>
              <li>
                Reroll Tokens Spent During Part 2:{" "}
                <strong>
                  {" "}
                  {(state.dayInfo?.rerollTokensSpentDuringPart2 || 0) > 9
                    ? state.dayInfo?.rerollTokensSpentDuringPart2 + ""
                    : "".repeat(
                        state.dayInfo?.rerollTokensSpentDuringPart2 || 0
                      )}
                </strong>
              </li>
              <li>
                Current Reroll Tokens:{" "}
                <strong class="token">
                  {" "}
                  {(state.dayInfo?.currentRerollTokens || 0) > 9
                    ? state.dayInfo?.currentRerollTokens + ""
                    : "".repeat(state.dayInfo?.currentRerollTokens || 0)}
                </strong>
              </li>
              <li>
                Day Score:{" "}
                <strong>
                  {!state.dayInfo ? (
                    `Loading...`
                  ) : state.dayInfo.score > 0 ? (
                    <strong class="token">+{state.dayInfo.score}</strong>
                  ) : (
                    <strong class="tokenSpent">{state.dayInfo.score}</strong>
                  )}
                </strong>
              </li>
              <li>
                Challenge Modifier:{" "}
                <strong>
                  {!state.dayInfo
                    ? `Loading...`
                    : state.dayInfo.challengeModifier === "None"
                    ? "None"
                    : "You must write a program to complete this challenge " +
                      state.dayInfo.challengeModifier +
                      (state.dayInfo.modifierOption !== "None" &&
                        state.dayInfo.modifierOption)}
                </strong>
              </li>
              <li>
                Current Day:{" "}
                <strong>
                  {!state.dayInfo ? `Loading...` : state.dayInfo.currentDay}
                </strong>
              </li>
              <li>
                Current Day Completed?:{" "}
                <strong>
                  {!state.dayInfo
                    ? `Loading...`
                    : state.dayInfo.part1Completed
                    ? `Yes`
                    : `No`}
                </strong>
              </li>
              <li>
                Selected Day Part 1 Completed?:{" "}
                <strong>
                  {" "}
                  {!state.dayInfo
                    ? `Loading...`
                    : state.dayInfo.part1Completed
                    ? `Yes`
                    : `No`}
                </strong>
                {!state.dayInfo?.part1Completed ? null : (
                  <>
                    <br />
                    <strong>
                      {new Date(state.dayInfo.part1Completed).toString()}
                    </strong>
                  </>
                )}
              </li>
              <li>
                Selected Day Part 2 Completed?:{" "}
                <strong>
                  {!state.dayInfo
                    ? `Loading...`
                    : state.dayInfo.part2Completed
                    ? `Yes`
                    : `No`}
                </strong>
                {!state.dayInfo?.part2Completed ? null : (
                  <>
                    <br />
                    <strong>
                      {new Date(state.dayInfo.part2Completed).toString()}
                    </strong>
                  </>
                )}
              </li>
            </ul>
          );
        }}
        onResolved={(xtremeXmasData) => {
          state.loading = false;
          if (+xtremeXmasData.numberOfGames < 1) {
            return (
              <p>
                Day not found - please try again or{" "}
                <a href="/new">°start a new game!°</a>
              </p>
            );
          }

          return (
            <>
              <ul class="flex column">
                <li>
                  Reroll Tokens Earned:{" "}
                  <strong class="token">
                    {"".repeat(xtremeXmasData.rerollTokensEarned)}
                  </strong>
                </li>
                <li>
                  Reroll Tokens Spent During Part 1:{" "}
                  <strong class="tokenSpent">
                    {xtremeXmasData.rerollTokensSpentDuringPart1 > 9
                      ? xtremeXmasData.rerollTokensSpentDuringPart1 + ""
                      : "".repeat(xtremeXmasData.rerollTokensSpentDuringPart1)}
                  </strong>
                </li>
                <li>
                  Reroll Tokens Spent During Part 2:{" "}
                  <strong class="tokenSpent">
                    {xtremeXmasData.rerollTokensSpentDuringPart2 > 9
                      ? xtremeXmasData.rerollTokensSpentDuringPart2 + ""
                      : "".repeat(xtremeXmasData.rerollTokensSpentDuringPart2)}
                  </strong>
                </li>
                <li>
                  Current Reroll Tokens:{" "}
                  <strong class="token">
                    {xtremeXmasData.currentRerollTokens > 9
                      ? xtremeXmasData.currentRerollTokens + ""
                      : "".repeat(xtremeXmasData.currentRerollTokens)}
                  </strong>
                </li>
                <li>
                  Day Score:{" "}
                  {xtremeXmasData.score > 0 ? (
                    <strong class="token">+{xtremeXmasData.score}</strong>
                  ) : (
                    <strong class="tokenSpent">{xtremeXmasData.score}</strong>
                  )}
                </li>
                {xtremeXmasData.modifierWhenPart1Completed &&
                  (xtremeXmasData.modifierWhenPart1Completed !==
                    xtremeXmasData.challengeModifier ||
                    xtremeXmasData.optionWhenPart1Completed !==
                      xtremeXmasData.modifierOption) && (
                    <li>
                      Challenge Modifier During Part 1:{" "}
                      <strong>
                        {xtremeXmasData.modifierWhenPart1Completed === "None"
                          ? "None"
                          : "You must write a program to complete this challenge " +
                            xtremeXmasData.modifierWhenPart1Completed}
                        {xtremeXmasData.optionWhenPart1Completed !== "None" &&
                          xtremeXmasData.optionWhenPart1Completed}
                      </strong>
                    </li>
                  )}
                <li>
                  Challenge Modifier:{" "}
                  <strong>
                    {xtremeXmasData.challengeModifier === "None"
                      ? "None"
                      : "You must write a program to complete this challenge " +
                        xtremeXmasData.challengeModifier}
                    {xtremeXmasData.modifierOption !== "None" &&
                      xtremeXmasData.modifierOption}
                  </strong>{" "}
                  {xtremeXmasData.part2Completed ? (
                    <></>
                  ) : !xtremeXmasData.dateFirstRolled ? (
                    <a
                      onClick$={async () => {
                        if (state.loading) {
                          return;
                        }
                        state.loading = true;
                        await serverFetcher(
                          `game/${state.gameNumber}/day/${state.dayNumber}/roll`,
                          "PUT",
                          userId
                        );
                        state.buttonPresses++;
                      }}
                    >
                      °Roll Initial Challenge Modifier°
                    </a>
                  ) : (
                    <li>
                      <a
                        onClick$={async () => {
                          if (state.loading) {
                            return;
                          }
                          state.loading = true;
                          await serverFetcher(
                            `game/${state.gameNumber}/day/${state.dayNumber}/reroll/modifier`,
                            "PUT",
                            userId
                          );
                          state.buttonPresses++;
                        }}
                      >
                        °Reroll Challenge Modifier°
                      </a>{" "}
                      for <strong class="tokenSpent"></strong>
                    </li>
                  )}{" "}
                  {xtremeXmasData.modifierOption !== "None" &&
                    !xtremeXmasData.part2Completed && (
                      <li>
                        <a
                          onClick$={async () => {
                            if (state.loading) {
                              return;
                            }
                            state.loading = true;
                            await serverFetcher(
                              `game/${state.gameNumber}/day/${state.dayNumber}/reroll/option`,
                              "PUT",
                              userId
                            );
                            state.buttonPresses++;
                          }}
                        >
                          °Reroll Modifier Option°
                        </a>{" "}
                        ({xtremeXmasData.modifierOption}) for{" "}
                        <strong class="tokenSpent"></strong>
                      </li>
                    )}{" "}
                  {xtremeXmasData.challengeModifier !== "None" &&
                    !xtremeXmasData.part2Completed && (
                      <li>
                        <a
                          onClick$={async () => {
                            if (state.loading) {
                              return;
                            }
                            state.loading = true;
                            await serverFetcher(
                              `game/${state.gameNumber}/day/${state.dayNumber}/removeChallengeModifier`,
                              "PUT",
                              userId
                            );
                            state.buttonPresses++;
                          }}
                        >
                          °Remove Challenge Modifier°
                        </a>
                      </li>
                    )}
                </li>
                <li>
                  Current Day: <strong>{xtremeXmasData.currentDay}</strong>{" "}
                  {!xtremeXmasData.currentDayCompleted ||
                  xtremeXmasData.currentDay != +state.dayNumber ||
                  xtremeXmasData.currentDay === 25 ? (
                    <></>
                  ) : (
                    <a
                      onClick$={async () => {
                        if (state.loading) {
                          return;
                        }
                        state.loading = true;
                        const res = await serverFetcher(
                          `game/${state.gameNumber}/day/${
                            +state.dayNumber + 1
                          }`,
                          "PUT",
                          userId
                        );
                        state.buttonPresses++;
                        window.location.href = `/game/${
                          state.gameNumber
                        }/day/${+res.number}`;
                      }}
                    >
                      °Start Next Day°
                    </a>
                  )}
                </li>
                <li>
                  Current Day Completed?{" "}
                  <strong>
                    {xtremeXmasData.currentDayCompleted ? `Yes` : `No`}
                  </strong>{" "}
                </li>
                <li>
                  Selected Day Part 1 Completed?{" "}
                  <strong>
                    {xtremeXmasData.part1Completed ? `Yes` : `No`}
                  </strong>
                  {xtremeXmasData.part2Completed ? (
                    <>
                      <br />
                      <strong>
                        {new Date(xtremeXmasData.part1Completed).toString()}
                      </strong>
                    </>
                  ) : null}
                  {!xtremeXmasData.dateFirstRolled ||
                  xtremeXmasData.part1Completed ? (
                    <></>
                  ) : (
                    <a
                      onClick$={async () => {
                        if (state.loading) {
                          return;
                        }
                        state.loading = true;
                        await serverFetcher(
                          `game/${state.gameNumber}/day/${state.dayNumber}/complete/part1`,
                          "PUT",
                          userId
                        );
                        state.buttonPresses++;
                      }}
                    >
                      °Complete Part 1°{" "}
                      {xtremeXmasData.challengeModifier !== "None" && (
                        <>
                          <>for </>
                          <span class="token"></span>
                        </>
                      )}
                    </a>
                  )}
                </li>
                <li>
                  Selected Day Part 2 Completed?{" "}
                  <strong>
                    {xtremeXmasData.part2Completed ? `Yes` : `No`}
                  </strong>{" "}
                  {xtremeXmasData.part2Completed ? (
                    <>
                      <br />
                      <strong>
                        {new Date(xtremeXmasData.part2Completed).toString()}
                      </strong>
                    </>
                  ) : null}
                  {!xtremeXmasData.part1Completed ||
                  xtremeXmasData.part2Completed ? (
                    <></>
                  ) : (
                    <a
                      onClick$={async () => {
                        if (state.loading) {
                          return;
                        }
                        state.loading = true;
                        await serverFetcher(
                          `game/${state.gameNumber}/day/${state.dayNumber}/complete/part2`,
                          "PUT",
                          userId
                        );
                        state.buttonPresses++;
                      }}
                    >
                      °Complete Part 2°{" "}
                      {xtremeXmasData.challengeModifier !== "None" && (
                        <>
                          <>for </>
                          <span class="token"></span>
                        </>
                      )}
                    </a>
                  )}
                </li>{" "}
              </ul>
              {+dayNumber > 1 && (
                <a href={`/game/${gameNumber}/day/${+dayNumber - 1}/`}>
                  °Previous Day°
                </a>
              )}{" "}
              {dayNumber < xtremeXmasData.currentDay && (
                <a href={`/game/${gameNumber}/day/${+dayNumber + 1}/`}>
                  °Next Day°
                </a>
              )}
            </>
          );
        }}
      />
    </article>
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
