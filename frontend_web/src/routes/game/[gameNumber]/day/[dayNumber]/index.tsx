import {
  $,
  Resource,
  component$,
  useResource$,
  useStore,
  useStylesScoped$,
  useVisibleTask$,
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
import { useLocalStorage } from "~/hooks/useLocalStorage";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import DayData from "~/components/game/day/dayData";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [getYear, setYear] = useLocalStorage("year", 2014);

  const state = useStore({
    gameNumber,
    dayNumber,
    buttonPresses: 0,
    loading: false,
    dayInfo,
  });

  const incrementButtonPresses = $(() => {
    state.buttonPresses += 1;
  });

  const setLoadingStatus = $((status: boolean) => {
    if (status) {
      state.loading = true;
    } else {
      state.loading = false;
    }
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
        year: gameData.year,
        gameName: gameData.name,
        gameId: gameData.id,
        gameIsPublic: gameData.isPublic,
        username: userData.username,
        oauthAvatarUrl: userData.oauthAvatarUrl,
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
      return dayInfoData;
    }
  );

  useVisibleTask$(async () => {
    const dayInfoData = await xtremeXmasUserDataResource.value;
    setYear(dayInfoData.year);
  });

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
                    : constructChallengeModifierFullText(
                        state.dayInfo.challengeModifier +
                          (state.dayInfo.modifierOption !== "None" &&
                            state.dayInfo.modifierOption)
                      )}
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
                <a href="/new" class="textGreen">
                  °start a new game!°
                </a>
              </p>
            );
          }

          return (
            <DayData
              gameNumber={gameNumber}
              dayNumber={dayNumber}
              incrementButtonPresses={incrementButtonPresses}
              loading={state.loading}
              setLoadingStatus={setLoadingStatus}
              userId={userId}
              xtremeXmasData={xtremeXmasData}
            />
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Day Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
