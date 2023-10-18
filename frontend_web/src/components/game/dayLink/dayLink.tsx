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
      <div>
        #######################################################{" "}
        <span class="textBright">
          {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}
        </span>
      </div>
    );
  }

  const challengeModifier = props.dayLinkData.ChallengeModifier
    ? props.dayLinkData.ChallengeModifier.name + ", "
    : "";
  const modifierOption = props.dayLinkData.ModifierOption?.text
    ? props.dayLinkData.ModifierOption.text + ", "
    : "";
  let score = String(props.dayLinkData.netScore);
  if (+score >= 0) {
    score = "+" + score;
  }
  let tokensGained = 0;
  let tokensSpent = 0;
  props.dayLinkData.part1Completed && tokensGained++;
  props.dayLinkData.part2Completed && tokensGained++;
  tokensSpent += props.dayLinkData.challengeModifierRerollsUsed * 2;
  tokensSpent += props.dayLinkData.modifierOptionRerollsUsed;

  const dayDataString = ` ${challengeModifier}${modifierOption}${score} points `;
  let frontPadding = "";
  let endPadding = "";
  if (dayDataString.length < 55) {
    const frontPaddingDiff = (55 - dayDataString.length) / 2;
    let endPaddingDiff = Math.floor(frontPaddingDiff);
    if (frontPaddingDiff !== endPaddingDiff) {
      endPaddingDiff += 1;
    }
    frontPadding = "#".repeat(frontPaddingDiff);
    endPadding = "#".repeat(endPaddingDiff) + " ";
  }

  return (
    <div>
      <a href={`day/${props.dayNumber}`}>
        <span class="textDim">{frontPadding}</span>
        {dayDataString}
        <span class="textDim">{endPadding}</span>
      </a>
      <span class="textBright">
        {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}{" "}
      </span>
      <span class="token">{renderTokens(tokensGained)}</span>
      <span class="tokenSpent">{renderSpentTokens(tokensSpent)}</span>
    </div>
  );
});
