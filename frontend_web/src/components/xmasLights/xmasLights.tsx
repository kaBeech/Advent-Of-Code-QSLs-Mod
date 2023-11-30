import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export interface XmasLightsProps {
  numberOfLights: number;
  firstLightStartingColorNumber: number;
  rotation?: "0" | "90" | "180" | "270";
  isOn: boolean;
  toggleLights: QRL<() => void>;
  hasLightSwitch: boolean;
  length: "long" | "short";
  alternateColors?: boolean;
}

export default component$((props: XmasLightsProps) => {
  if (props.numberOfLights < 1) {
    throw new Error("numberOfLights must be at least 1");
  }
  if (props.firstLightStartingColorNumber < 1) {
    throw new Error("firstLightStartingColorNumber must be at least 1");
  }
  let alternateColors = props.alternateColors;
  if (!props.alternateColors) {
    alternateColors = false;
  }
  let direction = props.rotation;
  if (!props.rotation) {
    direction = "180";
  }
  const xmasLights = [];
  for (let i = 1; i <= props.numberOfLights; i++) {
    let startingColorNumber = i + props.firstLightStartingColorNumber - 1;
    if (alternateColors && startingColorNumber % 2 !== 0) {
      startingColorNumber += 5;
    }
    startingColorNumber = (startingColorNumber % 12) + 1;
    if (direction === "0" || direction === "270") {
      xmasLights.unshift({ number: i, startingColorNumber });
    } else {
      xmasLights.push({ number: i, startingColorNumber });
    }
  }
  return (
    <span class={`flippedSwitches rotate${direction}`}>
      {props.hasLightSwitch && props.isOn && (
        <>
          <span class="logoGreen fontLarger"> {"󰛨"}</span>
          <span
            class="logoGreen pointer"
            onClick$={() => {
              props.toggleLights();
            }}
          >
            {"󱨥"}
          </span>
        </>
      )}
      {props.hasLightSwitch && !props.isOn && (
        <>
          <span class="dimRed fontLarger">{"󰛩"}</span>
          <span
            class="logoGreen pointer"
            onClick$={() => {
              props.toggleLights();
            }}
          >
            {"󱨦"}
          </span>
        </>
      )}
      <span class="logoGreen">{"~"}</span>
      {props.isOn
        ? xmasLights.map(
            (xmasLight: { number: number; startingColorNumber: number }) => (
              <>
                <span
                  key={`xmasLight-${xmasLight.number}`}
                  class={
                    props.length === "long"
                      ? xmasLight.number < 12
                        ? `desktopShow`
                        : xmasLight.number < 22
                        ? `mobileHide`
                        : xmasLight.number < 28
                        ? `smallHide`
                        : xmasLight.number < 33 && `tinyHide`
                      : xmasLight.number < 6
                      ? `desktopShow`
                      : xmasLight.number < 11
                      ? `mobileHide`
                      : xmasLight.number < 14
                      ? `smallHide`
                      : xmasLight.number < 16 && `tinyHide`
                  }
                >
                  <span
                    class={`xmasLight brightLight colorShift${xmasLight.startingColorNumber}`}
                  >
                    
                  </span>
                  <span class="logoGreen">{"~"}</span>
                </span>
              </>
            )
          )
        : xmasLights.map(
            (xmasLight: { number: number; startingColorNumber: number }) => (
              <>
                <span
                  key={`xmasLight-${xmasLight.number}`}
                  class={
                    props.length === "long"
                      ? xmasLight.number < 12
                        ? `desktopShow`
                        : xmasLight.number < 22
                        ? `mobileHide`
                        : xmasLight.number < 28
                        ? `smallHide`
                        : xmasLight.number < 33 && `tinyHide`
                      : xmasLight.number < 6
                      ? `desktopShow`
                      : xmasLight.number < 11
                      ? `mobileHide`
                      : xmasLight.number < 14
                      ? `smallHide`
                      : xmasLight.number < 16 && `tinyHide`
                  }
                >
                  <span class={`logoRed`}>~</span>
                  <span class="logoGreen">{"~"}</span>
                </span>
              </>
            )
          )}
    </span>
  );
});
