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
    return <div>Day {props.dayNumber}: Not Started</div>;
  }

  const challengeModifier = props.dayLinkData.ChallengeModifier
    ? props.dayLinkData.ChallengeModifier.name + ","
    : "";
  const modifierOption = props.dayLinkData.ModifierOption?.name
    ? props.dayLinkData.ModifierOption.name + ","
    : "";
  const score = 0;
  let tokensGained = 0;
  let tokensSpent = 0;
  props.dayLinkData.part1Completed && tokensGained++;
  props.dayLinkData.part2Completed && tokensGained++;
  tokensSpent += props.dayLinkData.challengeModifierRerollsUsed * 2;
  tokensSpent += props.dayLinkData.modifierOptionRerollsUsed;

  return (
    <div>
      <a href={`day/${props.dayNumber}`}>
        Day {props.dayNumber}:{" "}
        {props.dayLinkData.part2Completed
          ? `Completed, ${score} points, `
          : "In Progress, "}
        {challengeModifier} {modifierOption}{" "}
        <span class="token">{renderTokens(tokensGained)}</span>
        <span class="tokenSpent">{renderSpentTokens(tokensSpent)}</span>
      </a>
    </div>
  );
});
