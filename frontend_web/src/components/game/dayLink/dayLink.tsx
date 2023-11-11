import { component$ } from "@builder.io/qwik";
import { renderSpentTokens } from "~/util/renderSpentTokens";
import { renderTokens } from "~/util/renderTokens";

export interface DayLinkData {
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
}

export interface DayLinkProps {
  dayNumber: number;
  dayLinkData?: DayLinkData;
}

export default component$((props: DayLinkProps) => {
  if (!props.dayLinkData) {
    return (
      <>
        <li class="textDim desktopShow">
          ########################################################{" "}
          <span class="textBright">
            {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}
          </span>
          {"        "}
        </li>
        <li class="textDim tabletShow">
          #####LOCKED#####{" "}
          <span class="textBright">
            {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}
          </span>
        </li>
      </>
    );
  }

  const challengeModifier = props.dayLinkData.ChallengeModifier
    ? props.dayLinkData.ChallengeModifier.name
    : "";
  const modifierOption = props.dayLinkData.ModifierOption?.text
    ? props.dayLinkData.ModifierOption.text
    : "";
  let score = String(props.dayLinkData.netScore);
  let modifierColor = "textRed";
  let scoreColor = "textRed";
  if (props.dayNumber % 2 === 0) {
    modifierColor = "textGreen";
  }
  if (+score >= 0) {
    score = "+" + score;
    scoreColor = "textGreen";
  }
  if (+score === 0) {
    scoreColor = "textBright";
  }
  let tokensGained = 0;
  let tokensSpent = 0;
  props.dayLinkData.part1Completed && tokensGained++;
  props.dayLinkData.part2Completed && tokensGained++;
  tokensSpent += props.dayLinkData.challengeModifierRerollsUsed * 2;
  tokensSpent += props.dayLinkData.modifierOptionRerollsUsed;

  const challengeModifierString = `°${challengeModifier}°`;

  const challengeModifierPadding = `${
    challengeModifier.length < 22
      ? " ".repeat(22 - challengeModifier.length)
      : ""
  }`;

  const modifierOptionString = `°${modifierOption}°`;

  const modifierOptionPadding = `${
    modifierOption.length < 16 ? " ".repeat(16 - modifierOption.length) : ""
  }`;

  const scoreString = `${score} points`;

  const scorePadding = `${
    score.length < 8 ? " ".repeat(8 - score.length) : ""
  }`;

  return (
    <>
      <li class="desktopShow">
        <a href={`day/${props.dayNumber}`} class={modifierColor}>
          <span>
            {challengeModifierString}
            {challengeModifierPadding}
          </span>
          <span>
            {modifierOptionString}
            {modifierOptionPadding}
          </span>
          <span class={scoreColor}>
            {scoreString}
            {scorePadding}
          </span>
        </a>
        <span class="textBright">
          {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}
          {"    "}
        </span>
        <span class="token">{renderTokens(tokensGained)}</span>
        <span class="tokenSpent">
          {tokensSpent > 9
            ? renderSpentTokens(1) + "x" + tokensSpent
            : renderSpentTokens(tokensSpent)}
          {/* {renderSpentTokens(tokensSpent)} */}
        </span>
      </li>
      <li class="tabletShow flex column textCenter alignCenter maxWidthFixedContent">
        <span class="textBright">{props.dayNumber}</span>
        <span class="token">{renderTokens(tokensGained)}</span>
        <span class="tokenSpent">
          {tokensSpent > 9
            ? renderSpentTokens(1) + "x" + tokensSpent
            : renderSpentTokens(tokensSpent)}
        </span>
        <a href={`day/${props.dayNumber}`} class={`textMedium`}>
          <span class={`${modifierColor}`}>{challengeModifierString}</span>
          {" ¦ "}
          <span class={`${modifierColor}`}>{modifierOptionString}</span>
          {" ¦ "}
          <span class={`${modifierColor} ${scoreColor}`}>{scoreString}</span>
        </a>
      </li>
    </>
  );
});
