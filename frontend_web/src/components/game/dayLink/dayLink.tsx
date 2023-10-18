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
  };
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
        {props.dayNumber}
      </div>
    );
  }

  const challengeModifier = props.dayLinkData.ChallengeModifier
    ? props.dayLinkData.ChallengeModifier.name + ", "
    : "";
  const modifierOption = props.dayLinkData.ModifierOption?.name
    ? props.dayLinkData.ModifierOption.name + ", "
    : "";
  const score = 0;
  let tokensGained = 0;
  let tokensSpent = 0;
  props.dayLinkData.part1Completed && tokensGained++;
  props.dayLinkData.part2Completed && tokensGained++;
  tokensSpent += props.dayLinkData.challengeModifierRerollsUsed * 2;
  tokensSpent += props.dayLinkData.modifierOptionRerollsUsed;

  let dayDataString = ` ${challengeModifier}${modifierOption}${score} points, `;
  if (dayDataString.length < 55) {
    const frontPadding = (55 - dayDataString.length) / 2;
    let endPadding = Math.floor(frontPadding);
    if (frontPadding !== endPadding) {
      endPadding += 1;
    }
    dayDataString =
      "#".repeat(frontPadding) + dayDataString + "#".repeat(endPadding) + " ";
  }

  return (
    <div>
      <a href={`day/${props.dayNumber}`}>
        {dayDataString}
        {props.dayNumber < 10 ? " " + props.dayNumber : props.dayNumber}{" "}
        <span class="token">{renderTokens(tokensGained)}</span>
        <span class="tokenSpent">{renderSpentTokens(tokensSpent)}</span>
      </a>
    </div>
  );
});
