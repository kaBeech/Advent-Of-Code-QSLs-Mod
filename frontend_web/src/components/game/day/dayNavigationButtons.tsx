import { component$ } from "@builder.io/qwik";

export interface DayNavigationButtonsProps {
  dayNumber: number;
  currentDay: number;
  gameNumber?: number;
  gameId?: number;
}

export default component$((props: DayNavigationButtonsProps) => {
  if (!props.gameNumber && !props.gameId) {
    throw new Error(
      "DayNavigationButtons component requires either a gameNumber or a gameId prop"
    );
  }
  const extension = props.gameId ? "game/public" : "game";
  return (
    <>
      {props.dayNumber < props.currentDay && (
        <a
          href={`/game/${props.gameNumber}/day/${props.dayNumber + 1}/`}
          class="textGreen"
        >
          °Next Day°
        </a>
      )}
      {props.dayNumber > 1 && (
        <a
          href={`/${extension}/${props.gameNumber}/day/${
            +props.dayNumber - 1
          }/`}
        >
          °Previous Day°
        </a>
      )}{" "}
      <a
        href={`/game/${props.gameNumber}/`}
        class={+props.dayNumber > 1 && `textGreen`}
      >
        °Back to Calendar°
      </a>
    </>
  );
});
