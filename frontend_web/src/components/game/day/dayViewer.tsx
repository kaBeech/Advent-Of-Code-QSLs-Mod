import { component$ } from "@builder.io/qwik";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import { serverFetcher } from "~/util/serverFetcher";

export interface DayDataProps {
  gameNumber: string;
  dayNumber: string;
  incrementButtonPresses: Function | any;
  loading: boolean;
  setLoadingStatus: Function | any;
  userId: string;
  xtremeXmasData: {
    gameName: string;
    gameId: string;
    rerollTokensEarned: number;
    rerollTokensSpentDuringPart1: number;
    rerollTokensSpentDuringPart2: number;
    currentRerollTokens: number;
    score: number;
    modifierWhenPart1Completed: string;
    optionWhenPart1Completed: string;
    challengeModifier: string;
    modifierOption: string;
    currentDay: number;
    currentDayCompleted: boolean;
    part1Completed: string | null;
    part2Completed: string | null;
    dateFirstRolled: string | null;
  };
  privateViewerData?: {
    gameIsPublic: boolean;
  };
  publicViewerData?: {
    oauthAvatarUrl: string;
    username: string;
  };
}

export default component$((props: DayDataProps) => {
  return (
    <>
      <ul class="flex column">
        <li>{props.xtremeXmasData.gameName}</li>
        {props.publicViewerData && (
          <li>
            <img
              src={props.publicViewerData!.oauthAvatarUrl}
              alt="user avatar"
              style={{ height: "1.5rem", width: "1.5rem" }}
              width="24"
              height="24"
            />{" "}
            {props.publicViewerData!.username}
          </li>
        )}
        {props.privateViewerData?.gameIsPublic && (
          <li>
            <a
              href={`/game/public/${props.xtremeXmasData.gameId}/day/${props.dayNumber}`}
            >
              °Public Link°
            </a>
          </li>
        )}
        <li>
          Reroll Tokens Earned:{" "}
          <strong class="token">
            {"".repeat(props.xtremeXmasData.rerollTokensEarned)}
          </strong>
        </li>
        <li>
          Reroll Tokens Spent During Part 1:{" "}
          <strong class="tokenSpent">
            {props.xtremeXmasData.rerollTokensSpentDuringPart1 > 9
              ? props.xtremeXmasData.rerollTokensSpentDuringPart1 + ""
              : "".repeat(props.xtremeXmasData.rerollTokensSpentDuringPart1)}
          </strong>
        </li>
        <li>
          Reroll Tokens Spent During Part 2:{" "}
          <strong class="tokenSpent">
            {props.xtremeXmasData.rerollTokensSpentDuringPart2 > 9
              ? props.xtremeXmasData.rerollTokensSpentDuringPart2 + ""
              : "".repeat(props.xtremeXmasData.rerollTokensSpentDuringPart2)}
          </strong>
        </li>
        <li>
          Current Reroll Tokens:{" "}
          <strong class="token">
            {props.xtremeXmasData.currentRerollTokens > 9
              ? props.xtremeXmasData.currentRerollTokens + ""
              : "".repeat(props.xtremeXmasData.currentRerollTokens)}
          </strong>
        </li>
        <li>
          Day Score:{" "}
          {props.xtremeXmasData.score > 0 ? (
            <strong class="token">+{props.xtremeXmasData.score}</strong>
          ) : (
            <strong class="tokenSpent">{props.xtremeXmasData.score}</strong>
          )}
        </li>
        {props.xtremeXmasData.modifierWhenPart1Completed &&
          (props.xtremeXmasData.modifierWhenPart1Completed !==
            props.xtremeXmasData.challengeModifier ||
            props.xtremeXmasData.optionWhenPart1Completed !==
              props.xtremeXmasData.modifierOption) && (
            <li>
              Challenge Modifier During Part 1:{" "}
              <strong>
                {props.xtremeXmasData.modifierWhenPart1Completed === "None"
                  ? "None"
                  : constructChallengeModifierFullText(
                      props.xtremeXmasData.modifierWhenPart1Completed +
                        (props.xtremeXmasData.optionWhenPart1Completed !==
                          "None" &&
                          props.xtremeXmasData.optionWhenPart1Completed)
                    )}
                {props.xtremeXmasData.optionWhenPart1Completed !== "None" &&
                  props.xtremeXmasData.optionWhenPart1Completed}
              </strong>
            </li>
          )}
        <li>
          Challenge Modifier:{" "}
          <strong>
            {props.xtremeXmasData.challengeModifier === "None"
              ? "None"
              : constructChallengeModifierFullText(
                  props.xtremeXmasData.challengeModifier +
                    (props.xtremeXmasData.modifierOption !== "None" &&
                      props.xtremeXmasData.modifierOption)
                )}
          </strong>{" "}
          {!props.privateViewerData || props.xtremeXmasData.part2Completed ? (
            <></>
          ) : !props.xtremeXmasData.dateFirstRolled ? (
            <a
              onClick$={async () => {
                if (props.loading) {
                  return;
                }
                props.setLoadingStatus(true);
                await serverFetcher(
                  `game/${props.gameNumber}/day/${props.dayNumber}/roll`,
                  "PUT",
                  props.userId
                );
                props.incrementButtonPresses();
              }}
            >
              °Roll Initial Challenge Modifier°
            </a>
          ) : (
            <li>
              <a
                onClick$={async () => {
                  if (props.loading) {
                    return;
                  }
                  props.setLoadingStatus(true);
                  await serverFetcher(
                    `game/${props.gameNumber}/day/${props.dayNumber}/reroll/modifier`,
                    "PUT",
                    props.userId
                  );
                  props.incrementButtonPresses();
                }}
              >
                °Reroll Challenge Modifier°
              </a>{" "}
              for <strong class="tokenSpent"></strong>
            </li>
          )}{" "}
          {props.privateViewerData &&
            props.xtremeXmasData.modifierOption !== "None" &&
            !props.xtremeXmasData.part2Completed && (
              <li>
                <a
                  onClick$={async () => {
                    if (props.loading) {
                      return;
                    }
                    props.setLoadingStatus(true);
                    await serverFetcher(
                      `game/${props.gameNumber}/day/${props.dayNumber}/reroll/option`,
                      "PUT",
                      props.userId
                    );
                    props.incrementButtonPresses();
                  }}
                >
                  °Reroll Modifier Option°
                </a>{" "}
                ({props.xtremeXmasData.modifierOption}) for{" "}
                <strong class="tokenSpent"></strong>
              </li>
            )}{" "}
          {props.privateViewerData &&
            props.xtremeXmasData.challengeModifier !== "None" &&
            !props.xtremeXmasData.part2Completed && (
              <li>
                <a
                  onClick$={async () => {
                    if (props.loading) {
                      return;
                    }
                    props.setLoadingStatus(true);
                    await serverFetcher(
                      `game/${props.gameNumber}/day/${props.dayNumber}/removeChallengeModifier`,
                      "PUT",
                      props.userId
                    );
                    props.incrementButtonPresses();
                  }}
                >
                  °Remove Challenge Modifier°
                </a>
              </li>
            )}
        </li>
        <li>
          Current Day: <strong>{props.xtremeXmasData.currentDay}</strong>{" "}
          {!props.privateViewerData ||
          !props.xtremeXmasData.currentDayCompleted ||
          props.xtremeXmasData.currentDay != +props.dayNumber ||
          props.xtremeXmasData.currentDay === 25 ? (
            <></>
          ) : (
            <a
              onClick$={async () => {
                if (props.loading) {
                  return;
                }
                props.setLoadingStatus(true);
                const res = await serverFetcher(
                  `game/${props.gameNumber}/day/${+props.dayNumber + 1}`,
                  "PUT",
                  props.userId
                );
                props.incrementButtonPresses();
                window.location.href = `/game/${
                  props.gameNumber
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
            {props.xtremeXmasData.currentDayCompleted ? `Yes` : `No`}
          </strong>{" "}
        </li>
        <li>
          Selected Day Part 1 Completed?{" "}
          {props.xtremeXmasData.part1Completed ? (
            <>
              <strong>Yes</strong>
              <br />
              <strong>
                {new Date(props.xtremeXmasData.part1Completed!).toString()}
              </strong>
            </>
          ) : (
            <strong>No</strong>
          )}
          {!props.privateViewerData ||
          !props.xtremeXmasData.dateFirstRolled ||
          props.xtremeXmasData.part1Completed ? (
            <></>
          ) : (
            <a
              onClick$={async () => {
                if (props.loading) {
                  return;
                }
                props.setLoadingStatus(true);
                await serverFetcher(
                  `game/${props.gameNumber}/day/${props.dayNumber}/complete/part1`,
                  "PUT",
                  props.userId
                );
                props.incrementButtonPresses();
              }}
            >
              °Complete Part 1°{" "}
              {props.xtremeXmasData.challengeModifier !== "None" && (
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
          {props.xtremeXmasData.part2Completed ? (
            <>
              <strong>Yes</strong>
              <br />
              <strong>
                {new Date(props.xtremeXmasData.part2Completed).toString()}
              </strong>
            </>
          ) : (
            <strong>No</strong>
          )}
          {!props.privateViewerData ||
          !props.xtremeXmasData.part1Completed ||
          props.xtremeXmasData.part2Completed ? (
            <></>
          ) : (
            <a
              onClick$={async () => {
                if (props.loading) {
                  return;
                }
                props.setLoadingStatus(true);
                await serverFetcher(
                  `game/${props.gameNumber}/day/${props.dayNumber}/complete/part2`,
                  "PUT",
                  props.userId
                );
                props.incrementButtonPresses();
              }}
            >
              °Complete Part 2°{" "}
              {props.xtremeXmasData.challengeModifier !== "None" && (
                <>
                  <>for </>
                  <span class="token"></span>
                </>
              )}
            </a>
          )}
        </li>{" "}
      </ul>
      {+props.dayNumber > 1 && (
        <a href={`/game/${props.gameNumber}/day/${+props.dayNumber - 1}/`}>
          °Previous Day°
        </a>
      )}{" "}
      {+props.dayNumber < props.xtremeXmasData.currentDay && (
        <a href={`/game/${props.gameNumber}/day/${+props.dayNumber + 1}/`}>
          °Next Day°
        </a>
      )}
    </>
  );
});
