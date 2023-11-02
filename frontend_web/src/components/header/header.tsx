/* eslint-disable no-irregular-whitespace */
import { $, component$, useStore } from "@builder.io/qwik";
import LogInOrOut from "../logInOrOut/logInOrOut";
import { useAuthSession } from "~/routes/plugin@auth";
import XmasLights from "../xmasLights/xmasLights";

interface HeaderProps {
  isLoggedIn: boolean;
  toggleLoggedIn: Function | any;
}

export default component$((props: HeaderProps) => {
  const toggleLoggedIn = $(() => {
    props.toggleLoggedIn();
  });

  const state = useStore({
    isLoggedIn: props.isLoggedIn,
  });
  const session = useAuthSession();
  return (
    <header class={`flex justifyCenter gap1`}>
      <div class="flex column alignCenter">
        <a href="/" class="logo stitch marginTBPoint2">
          <span class="logoGold">*</span> Xtreme{" "}
          <span class="logoGreen">^</span> Xmas <span class="logoWhite">§</span>{" "}
          Code <span class="logoBrown">»</span>
        </a>
        <br />
        {/* <XmasLights
          numberOfLights={44}
          firstLightStartingColorNumber={7}
          rotation={"0"}
          alternateColors={true}
        /> */}
        <XmasLights
          numberOfLights={42}
          firstLightStartingColorNumber={1}
          alternateColors={true}
        />
        <br />
        <div class="flex column alignCenter">
          <div class="flex gap1 marginTBPoint2">
            {" "}
            <a href="/about">°About°</a> ¦{" "}
            <a href="/events" class="textGreen">
              °Games°
            </a>{" "}
            ¦<a href="/settings">°Settings°</a> ¦{" "}
            <a href="/leaderboard" class="textGreen">
              °Leaderboards°
            </a>
          </div>
          <div class="flex gap1 marginTBPoint2">
            {" "}
            <a href="/calendar" class="textGreen">
              °Calendar°
            </a>{" "}
            ¦ <a href="/support">°Support°</a> ¦
            <a href="https://adventofcode.com/" class="textGreen">
              °AoC°
            </a>{" "}
            ¦<a href="/sponsors">°Sponsors°</a>
          </div>{" "}
          <div class="flex gap1 marginTBPoint2">
            {" "}
            <span class="textGreen">{session.value?.user?.name}</span>
            <LogInOrOut
              isLoggedIn={state.isLoggedIn}
              toggleLoggedIn={toggleLoggedIn}
            />
          </div>
          <br />
        </div>
      </div>
    </header>
  );
});
