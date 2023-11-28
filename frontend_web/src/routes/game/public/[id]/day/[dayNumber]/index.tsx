import {
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
import styles from "./day.css?inline";
import type { DayInfo } from "~/types";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import DayViewer from "~/components/game/day/dayViewer";

let dayInfo: DayInfo | null;

export const onRequest: RequestHandler = (event) => {
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
  const gameId = useLocation().params.id;
  const dayNumber = useLocation().params.dayNumber;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [getYear, setYear] = useLocalStorage("year", 2014);

  const state = useStore({
    gameId,
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
      const gameData = await serverFetcher(`game/public/${gameId}`, "GET");
      const dayData = gameData.Day.find(
        (day: DayInfo) => day.number === +dayNumber
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
        year: gameData.year,
        gameName: gameData.name,
        username: gameData.User.username,
        oauthAvatarUrl: gameData.User.oauthAvatarUrl,
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
        gameIsPublic: gameData.isPublic,
        gameId: gameData.id,
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
                publicViewerData={{
                  username: state.dayInfo.username,
                  oauthAvatarUrl: state.dayInfo.oauthAvatarUrl,
                }}
                xtremeXmasData={{
                  gameName: state.dayInfo.gameName,
                  challengeModifier: state.dayInfo.challengeModifier,
                  modifierOption: state.dayInfo.modifierOption,
                  rerollTokensSpentDuringPart1:
                    state.dayInfo.rerollTokensSpentDuringPart1,
                  rerollTokensSpentDuringPart2:
                    state.dayInfo.rerollTokensSpentDuringPart2,
                  currentRerollTokens: state.dayInfo.currentRerollTokens,
                  score: state.dayInfo.score,
                  currentDay: state.dayInfo.currentDay,
                  currentDayCompleted: state.dayInfo.currentDayCompleted,
                  part1Completed:
                    state.dayInfo.part1Completed?.toDateString() || null,
                  modifierWhenPart1Completed:
                    state.dayInfo.modifierWhenPart1Completed,
                  optionWhenPart1Completed:
                    state.dayInfo.optionWhenPart1Completed,
                  part2Completed:
                    state.dayInfo.part2Completed?.toDateString() || null,
                  rerollTokensEarned: 0,
                }}
              />
            );
          } else {
            return (
              <DayViewer
                publicViewerData={{
                  username: "Loading...",
                  oauthAvatarUrl: "",
                }}
                xtremeXmasData={{
                  gameName: "Loading...",
                  challengeModifier: "Loading...",
                  modifierOption: "Loading...",
                  rerollTokensSpentDuringPart1: 0,
                  rerollTokensSpentDuringPart2: 0,
                  currentRerollTokens: 0,
                  score: 0,
                  currentDay: 0,
                  currentDayCompleted: false,
                  part1Completed: null,
                  modifierWhenPart1Completed: "Loading...",
                  optionWhenPart1Completed: "Loading...",
                  part2Completed: null,
                  rerollTokensEarned: 0,
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
                <a href="/new">°start a new game!°</a>
              </p>
            );
          }

          return (
            <DayViewer
              xtremeXmasData={xtremeXmasData}
              publicViewerData={{
                oauthAvatarUrl: xtremeXmasData.oauthAvatarUrl,
                username: xtremeXmasData.username,
              }}
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
