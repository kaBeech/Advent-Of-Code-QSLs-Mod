import { component$, useStylesScoped$ } from "@builder.io/qwik";
import constructChallengeModifierFullText from "~/util/constructChallengeModifierFullText";
import DayButtons from "./dayButtons";
import styles from "./dayViewer.css?inline";
import DayNavigationButtons from "./dayNavigationButtons";

export interface DayDataProps {
  dayInfoData: {
    dayNumber: number;
    gameId: string;
    gameName: string;
    year: number;
    repositoryLink: string;
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
    dateFirstRolled: string | null;
    currentDay: number;
    currentDayCompleted: boolean;
    part1Completed: string | null;
    part2Completed: string | null;
  };
  privateViewerData?: {
    gameIsPublic: boolean;
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
  useStylesScoped$(styles);

  return (
    <>
      <br />
      <div class="dashedBorder textCenter fontLarger">
        {" "}
        <h1 class="margin0">{props.dayInfoData.gameName}</h1>
        {props.publicViewerData && (
          <p class="marginBottom1">
            <img
              src={props.publicViewerData!.oauthAvatarUrl}
              alt="user avatar"
              style={{ height: "1.5rem", width: "1.5rem" }}
              width="24"
              height="24"
            />{" "}
            <span style={`vertical-align: text-top`}>
              {props.publicViewerData!.username}
            </span>
          </p>
        )}
        <h2>Day {props.dayInfoData.dayNumber}</h2>
      </div>
      <br />
      <br />
      <p>
        <a
          href={`https://adventofcode.com/${props.dayInfoData.year}/day/${props.dayInfoData.currentDay}`}
          target="_blank"
          rel="noopener noreferrer"
          class="textGreen"
        >
          °Puzzle Link°
        </a>
      </p>
      {props.dayInfoData.repositoryLink !== "None" && (
        <p>
          <a
            href={props.dayInfoData.repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            °Repo Link°
          </a>
        </p>
      )}
      {props.privateViewerData?.gameIsPublic &&
        props.dayInfoData.repositoryLink !== "None" && (
          <p>
            <a
              href={`/game/public/${props.dayInfoData.gameId}/day/${props.privateViewerData.dayNumber}`}
              class="textGreen"
            >
              °Public Link°
            </a>
          </p>
        )}
      <br />
      <br />
      <div class="flex column alignStart gap1" style={`max-width: 36rem`}>
        <ul class="flex column alignStart gap1">
          <li>
            <strong>Reroll Tokens Earned</strong>:{" "}
            <strong class="token">
              {props.dayInfoData.rerollTokensEarned === 0
                ? "0"
                : "".repeat(props.dayInfoData.rerollTokensEarned)}
            </strong>
          </li>
          <li>
            <strong>Reroll Tokens Spent During Part 1</strong>:{" "}
            <strong class="tokenSpent">
              {props.dayInfoData.rerollTokensSpentDuringPart1 === 0
                ? "0"
                : props.dayInfoData.rerollTokensSpentDuringPart1 > 9
                ? props.dayInfoData.rerollTokensSpentDuringPart1 + ""
                : "".repeat(props.dayInfoData.rerollTokensSpentDuringPart1)}
            </strong>
          </li>
          <li>
            <strong>Reroll Tokens Spent During Part 2</strong>:{" "}
            <strong class="tokenSpent">
              {props.dayInfoData.rerollTokensSpentDuringPart2 === 0
                ? "0"
                : props.dayInfoData.rerollTokensSpentDuringPart2 > 9
                ? props.dayInfoData.rerollTokensSpentDuringPart2 + ""
                : "".repeat(props.dayInfoData.rerollTokensSpentDuringPart2)}
            </strong>
          </li>
          <li>
            <strong>Current Reroll Tokens</strong>:{" "}
            <strong class="token">
              {props.dayInfoData.currentRerollTokens > 9
                ? props.dayInfoData.currentRerollTokens + ""
                : "".repeat(props.dayInfoData.currentRerollTokens)}
            </strong>
          </li>
          <li>
            <strong>Day Score</strong>:{" "}
            {props.dayInfoData.score > 0 ? (
              <strong class="token">+{props.dayInfoData.score}</strong>
            ) : (
              <strong class="tokenSpent">{props.dayInfoData.score}</strong>
            )}
          </li>
          <br />
          <li>
            <strong>Challenge Modifier</strong>:<br />
            {props.dayInfoData.challengeModifier === "None"
              ? "None"
              : constructChallengeModifierFullText(
                  props.dayInfoData.challengeModifier +
                    (props.dayInfoData.modifierOption !== "None"
                      ? props.dayInfoData.modifierOption
                      : "")
                )}
          </li>
          {props.dayInfoData.challengeModifierExplanatoryUrl !== "None" && (
            <li>
              Click this{" "}
              <a
                href={props.dayInfoData.challengeModifierExplanatoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                °external link°
              </a>{" "}
              to learn more about this Challenge Modifier
            </li>
          )}
          {props.dayInfoData.modifierOptionExplanatoryUrl !== "None" && (
            <li>
              Click this{" "}
              <a
                href={props.dayInfoData.modifierOptionExplanatoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                °external link°
              </a>{" "}
              to learn more about this Modifier Option
            </li>
          )}
          {props.dayInfoData.modifierWhenPart1Completed !== "None" &&
            (props.dayInfoData.modifierWhenPart1Completed !==
              props.dayInfoData.challengeModifier ||
              props.dayInfoData.optionWhenPart1Completed !==
                props.dayInfoData.modifierOption) && (
              <>
                <br />
                <li>
                  <strong>Challenge Modifier During Part 1</strong>:{" "}
                  {props.dayInfoData.modifierWhenPart1Completed === "None"
                    ? "None"
                    : constructChallengeModifierFullText(
                        props.dayInfoData.modifierWhenPart1Completed +
                          (props.dayInfoData.optionWhenPart1Completed !== "None"
                            ? props.dayInfoData.optionWhenPart1Completed
                            : "")
                      )}
                  {props.dayInfoData.optionWhenPart1Completed !== "None" &&
                    props.dayInfoData.optionWhenPart1Completed}
                </li>
              </>
            )}
          {props.dayInfoData.modifierWhenPart1CompletedExplanatoryUrl !==
            "None" &&
            props.dayInfoData.modifierWhenPart1Completed !==
              props.dayInfoData.challengeModifier && (
              <li>
                Click this{" "}
                <a
                  href={
                    props.dayInfoData.modifierWhenPart1CompletedExplanatoryUrl
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
          {props.dayInfoData.optionWhenPart1CompletedExplanatoryUrl !==
            "None" &&
            props.dayInfoData.optionWhenPart1Completed !==
              props.dayInfoData.modifierOption && (
              <li>
                Click this{" "}
                <a
                  href={
                    props.dayInfoData.optionWhenPart1CompletedExplanatoryUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  °external link°
                </a>{" "}
                to learn more about this Modifier Option that was completed
                during Part 1
              </li>
            )}
          {props.dayInfoData.dateFirstRolled && (
            <>
              <br />
              <li>
                <strong>First Rolled On</strong>: <br />
                {new Date(props.dayInfoData.dateFirstRolled).toString()}{" "}
              </li>
            </>
          )}
          {props.dayInfoData.part1Completed && (
            <li>
              <strong>Part 1 Completed On</strong>:<br />
              {new Date(props.dayInfoData.part1Completed).toString()}
            </li>
          )}
          {props.dayInfoData.part2Completed && (
            <li>
              <strong>Part 2 Completed On</strong>:<br />
              {new Date(props.dayInfoData.part2Completed).toString()}
            </li>
          )}{" "}
        </ul>
        <div class={`flex column gap1 marginTop1`}>
          {props.privateViewerData ? (
            <DayButtons
              privateViewerData={props.privateViewerData}
              dayInfoData={props.dayInfoData}
            />
          ) : (
            <DayNavigationButtons
              dayNumber={props.dayInfoData.dayNumber}
              currentDay={props.dayInfoData.currentDay}
              gameId={+props.dayInfoData.gameId}
            />
          )}
        </div>
      </div>
      <br />
    </>
  );
});
