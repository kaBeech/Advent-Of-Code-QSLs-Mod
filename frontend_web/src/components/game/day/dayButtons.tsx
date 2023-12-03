import { component$ } from "@builder.io/qwik";
import { serverFetcher } from "~/util/serverFetcher";
import DayNavigationButtons from "./dayNavigationButtons";

export interface DayButtonsProps {
  privateViewerData: {
    gameIsPublic: boolean;
    gameNumber: string;
    dayNumber: string;
    incrementButtonPresses: Function | any;
    loading: boolean;
    setLoadingStatus: Function | any;
    userId: string;
  };
  dayInfoData: {
    gameId: string;
    dateFirstRolled: string | null;
    currentDay: number;
    currentDayCompleted: boolean;
    part1Completed: string | null;
    part2Completed: string | null;
    modifierOption: string;
    challengeModifier: string;
  };
}

export default component$((props: DayButtonsProps) => {
  return (
    <>
      {props.dayInfoData.part2Completed ? (
        <></>
      ) : !props.dayInfoData.dateFirstRolled ? (
        <a
          class="textGreen"
          onClick$={async () => {
            if (props.privateViewerData!.loading) {
              return;
            }
            props.privateViewerData!.setLoadingStatus(true);
            await serverFetcher(
              `game/${props.privateViewerData!.gameNumber}/day/${
                props.privateViewerData!.dayNumber
              }/roll`,
              "PUT",
              props.privateViewerData!.userId
            );
            props.privateViewerData!.incrementButtonPresses();
          }}
        >
          °Roll Initial Challenge Modifier°
        </a>
      ) : (
        <li>
          <a
            class="textGreen"
            onClick$={async () => {
              if (props.privateViewerData!.loading) {
                return;
              }
              props.privateViewerData!.setLoadingStatus(true);
              await serverFetcher(
                `game/${props.privateViewerData!.gameNumber}/day/${
                  props.privateViewerData!.dayNumber
                }/reroll/modifier`,
                "PUT",
                props.privateViewerData!.userId
              );
              props.privateViewerData!.incrementButtonPresses();
            }}
          >
            °Reroll Challenge Modifier°
          </a>{" "}
          for <strong class="tokenSpent"></strong>
        </li>
      )}{" "}
      {props.dayInfoData.challengeModifier !== "None" &&
        !props.dayInfoData.part2Completed && (
          <li>
            <a
              onClick$={async () => {
                if (props.privateViewerData!.loading) {
                  return;
                }
                props.privateViewerData!.setLoadingStatus(true);
                await serverFetcher(
                  `game/${props.privateViewerData!.gameNumber}/day/${
                    props.privateViewerData!.dayNumber
                  }/removeChallengeModifier`,
                  "PUT",
                  props.privateViewerData!.userId
                );
                props.privateViewerData!.incrementButtonPresses();
              }}
            >
              °Remove Challenge Modifier°
            </a>
          </li>
        )}
      {props.dayInfoData.modifierOption !== "None" &&
        !props.dayInfoData.part2Completed && (
          <li>
            <a
              class="textGreen"
              onClick$={async () => {
                if (props.privateViewerData!.loading) {
                  return;
                }
                props.privateViewerData!.setLoadingStatus(true);
                await serverFetcher(
                  `game/${props.privateViewerData!.gameNumber}/day/${
                    props.privateViewerData!.dayNumber
                  }/reroll/option`,
                  "PUT",
                  props.privateViewerData!.userId
                );
                props.privateViewerData!.incrementButtonPresses();
              }}
            >
              °Reroll Modifier Option°
            </a>{" "}
            ({props.dayInfoData.modifierOption}) for{" "}
            <strong class="tokenSpent"></strong>
          </li>
        )}{" "}
      {!props.dayInfoData.currentDayCompleted ||
      props.dayInfoData.currentDay != +props.privateViewerData!.dayNumber ||
      props.dayInfoData.currentDay === 25 ? (
        <></>
      ) : (
        <a
          class={"textGreen"}
          onClick$={async () => {
            if (props.privateViewerData!.loading) {
              return;
            }
            props.privateViewerData!.setLoadingStatus(true);
            const res = await serverFetcher(
              `game/${props.privateViewerData!.gameNumber}/day/${
                +props.privateViewerData!.dayNumber + 1
              }`,
              "PUT",
              props.privateViewerData!.userId
            );
            props.privateViewerData!.incrementButtonPresses();
            window.location.href = `/game/${
              props.privateViewerData!.gameNumber
            }/day/${+res.number}`;
          }}
        >
          °Start Next Day°
        </a>
      )}
      {!props.dayInfoData.dateFirstRolled ||
      props.dayInfoData.part1Completed ? (
        <></>
      ) : (
        <a
          class={"textGreen"}
          onClick$={async () => {
            if (props.privateViewerData!.loading) {
              return;
            }
            props.privateViewerData!.setLoadingStatus(true);
            await serverFetcher(
              `game/${props.privateViewerData!.gameNumber}/day/${
                props.privateViewerData!.dayNumber
              }/complete/part1`,
              "PUT",
              props.privateViewerData!.userId
            );
            props.privateViewerData!.incrementButtonPresses();
          }}
        >
          °Complete Part 1°{" "}
          {props.dayInfoData.challengeModifier !== "None" && (
            <>
              <>for </>
              <span class="token"></span>
            </>
          )}
        </a>
      )}
      {!props.dayInfoData.part1Completed || props.dayInfoData.part2Completed ? (
        <></>
      ) : (
        <a
          class={"textGreen"}
          onClick$={async () => {
            if (props.privateViewerData!.loading) {
              return;
            }
            props.privateViewerData!.setLoadingStatus(true);
            await serverFetcher(
              `game/${props.privateViewerData!.gameNumber}/day/${
                props.privateViewerData!.dayNumber
              }/complete/part2`,
              "PUT",
              props.privateViewerData!.userId
            );
            props.privateViewerData!.incrementButtonPresses();
          }}
        >
          °Complete Part 2°{" "}
          {props.dayInfoData.challengeModifier !== "None" && (
            <>
              <>for </>
              <span class="token"></span>
            </>
          )}
        </a>
      )}
      <DayNavigationButtons
        dayNumber={+props.privateViewerData.dayNumber}
        currentDay={props.dayInfoData.currentDay}
        gameNumber={+props.privateViewerData.gameNumber}
      />
    </>
  );
});
