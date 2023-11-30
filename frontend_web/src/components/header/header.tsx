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
  aocLink: string;
}

export default component$((props: HeaderProps) => {
  const session = useAuthSession();
  return (
    <header class="flex column alignCenter">
      <a href="/" class="logo stitch marginVertPoint2">
        <span class="logoGold">*</span> Xtreme <span class="logoGreen">^</span>{" "}
        Xmas <span class="logoWhite">§</span> Code{" "}
        <span class="logoBrown">»</span>
      </a>
      <div class="flex column alignCenter mobileHide">
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/about">°About°</a> ¦{" "}
          <a href="/calendar" class="textGreen">
            °Calendar°
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
          <a
            href={props.aocLink}
            target="_blank"
            rel="noopener noreferrer"
            class="textRed"
          >
            °AoC°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/games" class="textGreen">
            °Games°
          </a>{" "}
          ¦ <a href="/support">°Support°</a> ¦
          <a href="/leaderboard" class="textGreen">
            °Leaderboards°
          </a>
          ¦<a href="/sponsors">°Sponsors°</a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <span class="textGreen">{session.value?.user?.name}</span>
          <LogInOrOut
            isLoggedIn={props.isLoggedIn}
            toggleLoggedIn={props.toggleLoggedIn}
          />
        </div>
      </div>
      <div class="flex column alignCenter mobileShow">
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/about">°About°</a> ¦{" "}
          <a href="/calendar" class="textGreen">
            °Calendar°
          </a>{" "}
          ¦ <a href="/leaderboard">°Leaderboards°</a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/games" class="textGreen">
            °Games°
          </a>{" "}
          ¦<a href="/settings">°Settings°</a> ¦
          <a href="/sponsors" class="textGreen">
            °Sponsors°
          </a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/modifier" class="textRed">
            °Modifiers°
          </a>
          ¦{" "}
          <a href="/support" class="textGreen">
            °Support°
          </a>{" "}
          ¦
          <a
            href={props.aocLink}
            target="_blank"
            rel="noopener noreferrer"
            class="textRed"
          >
            °AoC°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <span class="textGreen">{session.value?.user?.name}</span>
          <LogInOrOut
            isLoggedIn={props.isLoggedIn}
            toggleLoggedIn={props.toggleLoggedIn}
          />
        </div>
        <br />
      </div>
      <div class="flex column alignCenter tinyShow">
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/about">°About°</a> ¦{" "}
          <a href="/games" class="textGreen">
            °Games°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/calendar" class="textGreen">
            °Calendar°
          </a>
          ¦<a href="/sponsors">°Sponsors°</a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/settings">°Settings°</a> ¦{" "}
          <a href="/support" class="textGreen">
            °Support°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/modifier" class="textGreen">
            °Modifiers°
          </a>
          ¦
          <a
            href={props.aocLink}
            target="_blank"
            rel="noopener noreferrer"
            class="textRed"
          >
            °AoC°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/leaderboard">°Leaderboards°</a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <span class="textGreen">{session.value?.user?.name}</span>
          <LogInOrOut
            isLoggedIn={props.isLoggedIn}
            toggleLoggedIn={props.toggleLoggedIn}
          />
        </div>
      </div>
      <XmasLights
        numberOfLights={42}
        firstLightStartingColorNumber={1}
        alternateColors={true}
        hasLightSwitch={true}
        isOn={props.areLightsOn}
        toggleLights={props.toggleLights}
        length="long"
      />
      <br />
    </header>
  );
});
