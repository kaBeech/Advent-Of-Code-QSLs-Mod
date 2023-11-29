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
import type { Session } from "@auth/core/types";
import { useAuthSession } from "~/routes/plugin@auth";
import styles from "./day.css?inline";
import type { DayInfo } from "~/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import DayViewer from "~/components/game/day/dayViewer";
import constructUserId from "~/util/constructUserId";

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
  // This is not actually using email - it's a hack to get Qwik's DefaultSession to make the User's ID accessible
  const userId = constructUserId(
    session.value!.user!.email!,
    session.value!.user!.image!
  );
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
          if (state.dayInfo) {
            return (
              <DayViewer
                privateViewerData={{
                  gameIsPublic: state.dayInfo.gameIsPublic,
                  gameId: state.dayInfo.gameId,
                  dateFirstRolled: String(state.dayInfo.dateFirstRolled),
                  gameNumber,
                  dayNumber,
                  incrementButtonPresses,
                  loading: state.loading,
                  setLoadingStatus,
                  userId,
                }}
                xtremeXmasData={{
                  gameName: state.dayInfo.gameName,
                  rerollTokensEarned: state.dayInfo.rerollTokensEarned,
                  rerollTokensSpentDuringPart1:
                    state.dayInfo.rerollTokensSpentDuringPart1,
                  rerollTokensSpentDuringPart2:
                    state.dayInfo.rerollTokensSpentDuringPart2,
                  currentRerollTokens: state.dayInfo.currentRerollTokens,
                  score: state.dayInfo.score,
                  challengeModifier: state.dayInfo.challengeModifier,
                  modifierOption: state.dayInfo.modifierOption,
                  currentDay: state.dayInfo.currentDay,
                  currentDayCompleted: state.dayInfo.currentDayCompleted,
                  part1Completed: String(state.dayInfo.part1Completed) || null,
                  part2Completed: String(state.dayInfo.part2Completed) || null,
                  modifierWhenPart1Completed:
                    state.dayInfo.modifierWhenPart1Completed,
                  optionWhenPart1Completed:
                    state.dayInfo.optionWhenPart1Completed,
                }}
              />
            );
          } else {
            return (
              <DayViewer
                privateViewerData={{
                  gameIsPublic: false,
                  gameId: "Loading...",
                  dateFirstRolled: "Loading...",
                  gameNumber,
                  dayNumber,
                  incrementButtonPresses,
                  loading: state.loading,
                  setLoadingStatus,
                  userId,
                }}
                xtremeXmasData={{
                  gameName: "Loading...",
                  rerollTokensEarned: 0,
                  rerollTokensSpentDuringPart1: 0,
                  rerollTokensSpentDuringPart2: 0,
                  currentRerollTokens: 0,
                  score: 0,
                  challengeModifier: "Loading...",
                  modifierOption: "Loading...",
                  currentDay: 0,
                  currentDayCompleted: false,
                  part1Completed: null,
                  part2Completed: null,
                  modifierWhenPart1Completed: "Loading...",
                  optionWhenPart1Completed: "Loading...",
                }}
              />
            );
          }
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
            <DayViewer
              privateViewerData={{
                gameNumber,
                dayNumber,
                incrementButtonPresses,
                loading: state.loading,
                setLoadingStatus,
                userId,
                gameIsPublic: xtremeXmasData.gameIsPublic,
                gameId: xtremeXmasData.gameId,
                dateFirstRolled: xtremeXmasData.dateFirstRolled,
              }}
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
