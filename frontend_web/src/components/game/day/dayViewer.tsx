import { component$ } from "@builder.io/qwik";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import DayButtons from "./dayButtons";

export interface DayDataProps {
  xtremeXmasData: {
    gameName: string;
    rerollTokensEarned: number;
    rerollTokensSpentDuringPart1: number;
    rerollTokensSpentDuringPart2: number;
    currentRerollTokens: number;
    score: number;
    modifierWhenPart1Completed: string;
    modifierWhenPart1CompletedExplanatoryUrl: string;
    optionWhenPart1Completed: string;
    optionWhenPart1CompletedExplanatoryUrl: string;
    challengeModifier: string;
    challengeModifierExplanatoryUrl: string;
    modifierOption: string;
    modifierOptionExplanatoryUrl: string;
    currentDay: number;
    currentDayCompleted: boolean;
    part1Completed: string | null;
    part2Completed: string | null;
  };
  privateViewerData?: {
    gameIsPublic: boolean;
    gameId: string;
    dateFirstRolled: string | null;
    gameNumber: string;
    dayNumber: string;
    incrementButtonPresses: Function | any;
    loading: boolean;
    setLoadingStatus: Function | any;
    userId: string;
  };
  publicViewerData?: {
    oauthAvatarUrl: string;
    username: string;
  };
}

export default component$((props: DayDataProps) => {
  return (
    <>
      <h1>{props.xtremeXmasData.gameName}</h1>
      {props.publicViewerData && (
        <h2>
          <img
            src={props.publicViewerData!.oauthAvatarUrl}
            alt="user avatar"
            style={{ height: "1.5rem", width: "1.5rem" }}
            width="24"
            height="24"
          />{" "}
          {props.publicViewerData!.username}
        </h2>
      )}
      {props.privateViewerData?.gameIsPublic && (
        <p>
          <a
            href={`/game/public/${props.privateViewerData.gameId}/day/${props.privateViewerData.dayNumber}`}
          >
            °Public Link°
          </a>
        </p>
      )}
      <br />
      <div class="flex column alignStart gap1">
        <ul class="flex column alignStart gap1">
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
          {props.xtremeXmasData.modifierWhenPart1Completed != "None" &&
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
          {props.xtremeXmasData.modifierWhenPart1CompletedExplanatoryUrl !==
            "None" && (
            <li>
              Click this{" "}
              <a
                href={
                  props.xtremeXmasData.modifierWhenPart1CompletedExplanatoryUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                °external link°
              </a>{" "}
              to learn more about this Challenge Modifier that was completed
              during Part 1
            </li>
          )}
          {props.xtremeXmasData.optionWhenPart1CompletedExplanatoryUrl !==
            "None" && (
            <li>
              Click this{" "}
              <a
                href={
                  props.xtremeXmasData.optionWhenPart1CompletedExplanatoryUrl
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                °external link°
              </a>{" "}
              to learn more about this Modifier Option that was completed during
              Part 1
            </li>
          )}
          <li>
            Challenge Modifier:{" "}
            <strong>
              {props.xtremeXmasData.challengeModifier === "None"
                ? "None"
                : constructChallengeModifierFullText(
                    props.xtremeXmasData.challengeModifier +
                      (props.xtremeXmasData.modifierOption !== "None"
                        ? props.xtremeXmasData.modifierOption
                        : "")
                  )}
            </strong>{" "}
          </li>
          {props.xtremeXmasData.challengeModifierExplanatoryUrl !== "None" && (
            <li>
              Click this{" "}
              <a
                href={props.xtremeXmasData.challengeModifierExplanatoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                °external link°
              </a>{" "}
              to learn more about this Challenge Modifier
            </li>
          )}
          {props.xtremeXmasData.modifierOptionExplanatoryUrl !== "None" && (
            <li>
              Click this{" "}
              <a
                href={props.xtremeXmasData.modifierOptionExplanatoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                °external link°
              </a>{" "}
              to learn more about this Modifier Option
            </li>
          )}
          <li>
            Current Day: <strong>{props.xtremeXmasData.currentDay}</strong>{" "}
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
          </li>{" "}
        </ul>
        {props.privateViewerData && (
          <DayButtons
            privateViewerData={props.privateViewerData}
            xtremeXmasData={props.xtremeXmasData}
          />
        )}
      </div>
    </>
  );
});
