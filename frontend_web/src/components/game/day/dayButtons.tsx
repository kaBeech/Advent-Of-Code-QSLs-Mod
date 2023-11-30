import { component$ } from "@builder.io/qwik";
import { serverFetcher } from "~/util/serverFetcher";

export interface DayButtonsProps {
  privateViewerData: {
    gameIsPublic: boolean;
    gameId: string;
    dateFirstRolled: string | null;
    gameNumber: string;
    dayNumber: string;
    incrementButtonPresses: Function | any;
    loading: boolean;
    setLoadingStatus: Function | any;
    userId: string;
  };
  xtremeXmasData: {
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
    <div class={`flex column gap1 marginTop1`}>
      {+props.privateViewerData!.dayNumber <
        props.xtremeXmasData.currentDay && (
        <a
          href={`/game/${props.privateViewerData!.gameNumber}/day/${
            +props.privateViewerData!.dayNumber + 1
          }/`}
        >
          °Next Day°
        </a>
      )}
      {+props.privateViewerData.dayNumber > 1 && (
        <a
          href={`/game/${props.privateViewerData!.gameNumber}/day/${
            +props.privateViewerData!.dayNumber - 1
          }/`}
        >
          °Previous Day°
        </a>
      )}{" "}
      {props.xtremeXmasData.part2Completed ? (
        <></>
      ) : !props.privateViewerData.dateFirstRolled ? (
        <a
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
      {props.xtremeXmasData.modifierOption !== "None" &&
        !props.xtremeXmasData.part2Completed && (
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
                  }/reroll/option`,
                  "PUT",
                  props.privateViewerData!.userId
                );
                props.privateViewerData!.incrementButtonPresses();
              }}
            >
              °Reroll Modifier Option°
            </a>{" "}
            ({props.xtremeXmasData.modifierOption}) for{" "}
            <strong class="tokenSpent"></strong>
          </li>
        )}{" "}
      {props.xtremeXmasData.challengeModifier !== "None" &&
        !props.xtremeXmasData.part2Completed && (
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
      {!props.xtremeXmasData.currentDayCompleted ||
      props.xtremeXmasData.currentDay != +props.privateViewerData!.dayNumber ||
      props.xtremeXmasData.currentDay === 25 ? (
        <></>
      ) : (
        <a
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
      {!props.privateViewerData.dateFirstRolled ||
      props.xtremeXmasData.part1Completed ? (
        <></>
      ) : (
        <a
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
          {props.xtremeXmasData.challengeModifier !== "None" && (
            <>
              <>for </>
              <span class="token"></span>
            </>
          )}
        </a>
      )}
      {!props.xtremeXmasData.part1Completed ||
      props.xtremeXmasData.part2Completed ? (
        <></>
      ) : (
        <a
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
          {props.xtremeXmasData.challengeModifier !== "None" && (
            <>
              <>for </>
              <span class="token"></span>
            </>
          )}
        </a>
      )}
    </div>
  );
});
