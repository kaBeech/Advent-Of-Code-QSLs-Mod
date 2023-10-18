import { component$ } from "@builder.io/qwik";
import { renderSpentTokens } from "~/util/renderSpentTokens";
import { renderTokens } from "~/util/renderTokens";

interface DayLinkData {
  challengeModifier: string | null;
  modifierOption: string | null;
  score: number | null;
  isCompleted: boolean;
  tokensGained: number;
  tokensSpent: number;
}

interface DayLinkProps {
  dayNumber: number;
  dayLinkData?: DayLinkData;
}

export default component$((props: DayLinkProps) => {
  return (
    <>
      {props.dayLinkData ? (
        <div>
          <a href={`day/${props.dayNumber}`}>
            Day {props.dayNumber}: {props.dayLinkData.challengeModifier},{" "}
            {props.dayLinkData.modifierOption},{" "}
            {props.dayLinkData.isCompleted
              ? `Completed, ${props.dayLinkData.score} points`
              : "Not Completed"}{" "}
            <span class="token">
              {renderTokens(
                props.dayLinkData.tokensGained
                  ? props.dayLinkData.tokensGained
                  : 0
              )}
            </span>
            <span class="tokenSpent">
              {renderSpentTokens(
                props.dayLinkData.tokensSpent
                  ? props.dayLinkData.tokensSpent
                  : 0
              )}
            </span>
          </a>
        </div>
      ) : (
        <div>Day {props.dayNumber}</div>
      )}
    </>
  );
});
