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
      <li class="textDim">
        #######################################################{" "}
        <span class="textBright">
          {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}
        </span>
      </li>
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

  const challengeModifierString = `°${challengeModifier}°${
    challengeModifier.length < 23
      ? " ".repeat(23 - challengeModifier.length)
      : ""
  }`;

  const modifierOptionString = `°${modifierOption}°${
    modifierOption.length < 17 && " ".repeat(17 - modifierOption.length)
  }`;

  const scoreString = `${score} points${
    score.length < 7 && " ".repeat(7 - score.length)
  }`;

  return (
    <li>
      <a href={`day/${props.dayNumber}`} class={modifierColor}>
        <span>{challengeModifierString}</span>
        <span>{modifierOptionString}</span>
        <span class={scoreColor}>{scoreString}</span>
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
  );
});
