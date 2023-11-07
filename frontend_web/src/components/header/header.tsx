/* eslint-disable no-irregular-whitespace */
import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import LogInOrOut from "../logInOrOut/logInOrOut";
import { useAuthSession } from "~/routes/plugin@auth";
import XmasLights from "../xmasLights/xmasLights";

interface HeaderProps {
  isLoggedIn: boolean;
  toggleLoggedIn: Function | any;
  areLightsOn: boolean;
  toggleLights: QRL<() => void>;
}

export default component$((props: HeaderProps) => {
  const session = useAuthSession();
  return (
    <header class="flex column alignCenter">
      <a href="/" class="logo stitch marginTBPoint2">
        <span class="logoGold">*</span> Xtreme <span class="logoGreen">^</span>{" "}
        Xmas <span class="logoWhite">§</span> Code{" "}
        <span class="logoBrown">»</span>
      </a>
      <br />
      <XmasLights
        numberOfLights={42}
        firstLightStartingColorNumber={1}
        alternateColors={true}
        hasLightSwitch={true}
        isOn={props.areLightsOn}
        toggleLights={props.toggleLights}
      />
      <br />
      <br />
      <div class="flex column alignCenter">
        <div class="flex gap1 marginTBPoint2">
          {" "}
          <a href="/about">°About°</a> ¦{" "}
          <a href="/games" class="textGreen">
            °Games°
          </a>{" "}
          ¦{" "}
          <a href="/modifier" class="textRed">
            °Modifiers°
          </a>
          ¦
          <a href="/settings" class="textGreen">
            °Settings°
          </a>{" "}
          ¦{" "}
          <a href="https://adventofcode.com/" class="textRed">
            °AoC°
          </a>{" "}
        </div>
        <div class="flex gap1 marginTBPoint2">
          {" "}
          <a href="/calendar" class="textGreen">
            °Calendar°
          </a>{" "}
          ¦ <a href="/support">°Support°</a> ¦
          <a href="/leaderboard" class="textGreen">
            °Leaderboards°
          </a>
          ¦<a href="/sponsors">°Sponsors°</a>
        </div>
        <div class="flex gap1 marginTBPoint2">
          {" "}
          <span class="textGreen">{session.value?.user?.name}</span>
          <LogInOrOut
            isLoggedIn={props.isLoggedIn}
            toggleLoggedIn={props.toggleLoggedIn}
          />
        </div>
        <br />
      </div>
    </header>
  );
});
