import { component$ } from "@builder.io/qwik";
import { renderSpentTokens } from "~/util/renderSpentTokens";
import { renderTokens } from "~/util/renderTokens";

interface DayLinkProps {
  isLocked: boolean;
  dayNumber: number;
  challengeModifier: string;
  modifierOption: string;
  score: number;
  isCompleted: boolean;
  toggleLoggedIn: Function | any;
  tokensGained: number;
  tokensSpent: number;
}

export default component$((props: DayLinkProps) => {
  return (
    <>
      {props.isLocked ? (
        <div>Day {props.dayNumber}</div>
      ) : (
        <a href={`day/${props.dayNumber}`}>
          Day {props.dayNumber}: {props.challengeModifier},{" "}
          {props.modifierOption},{" "}
          {props.isCompleted
            ? `Completed, ${props.score} points`
            : "Not Completed"}{" "}
          <span class="token">{renderTokens(props.tokensGained)}</span>
          <span class="tokenSpent">{renderSpentTokens(props.tokensSpent)}</span>
        </a>
      )}
    </>
  );
});
