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
      <a href="/" class="logo stitch marginVertPoint2" id="logo">
        <span class="logoGold">*</span> Xtreme <span class="logoGreen">^</span>{" "}
        Xmas <span class="logoWhite">§</span> Code{" "}
        <span class="logoBrown">»</span>
      </a>
      <div class="flex column alignCenter mobileHide">
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/about" id="headerDesktopAbout">
            °About°
          </a>{" "}
          ¦{" "}
          <a href="/calendar" id="headerDesktopCalendar" class="textGreen">
            °Calendar°
          </a>{" "}
          ¦{" "}
          <a href="/modifier" id="headerDesktopModifiers" class="textRed">
            °Modifiers°
          </a>
          ¦
          <a href="/settings" id="headerDesktopSettings" class="textGreen">
            °Settings°
          </a>{" "}
          ¦{" "}
          <a
            href={props.aocLink}
            id="headerDesktopAOC"
            target="_blank"
            rel="noopener noreferrer"
            class="textRed"
          >
            °AoC°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/games" id="headerDesktopGames" class="textGreen">
            °Games°
          </a>{" "}
          ¦{" "}
          <a href="/support" id="headerDesktopSupport">
            °Support°
          </a>{" "}
          ¦
          <a
            href="/leaderboard"
            id="headerDesktopLeaderboard"
            class="textGreen"
          >
            °Leaderboard°
          </a>
          ¦
          <a href="/sponsors" id="headerDesktopSponsors">
            °Sponsors°
          </a>
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
          <a href="/about" id="headerMobileAbout">
            °About°
          </a>{" "}
          ¦{" "}
          <a href="/calendar" id="headerMobileCalendar" class="textGreen">
            °Calendar°
          </a>{" "}
          ¦{" "}
          <a href="/leaderboard" id="headerMobileLeaderboard">
            °Leaderboard°
          </a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/games" id="headerMobileGames" class="textGreen">
            °Games°
          </a>{" "}
          ¦
          <a href="/settings" id="headerMobileSettings">
            °Settings°
          </a>{" "}
          ¦
          <a href="/sponsors" id="headerMobileSponsors" class="textGreen">
            °Sponsors°
          </a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/modifier" id="headerMobileModifiers" class="textRed">
            °Modifiers°
          </a>
          ¦{" "}
          <a href="/support" id="headerMobileSupport" class="textGreen">
            °Support°
          </a>{" "}
          ¦
          <a
            href={props.aocLink}
            id="headerMobileAOC"
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
      </div>
      <div class="flex column alignCenter tinyShow">
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/about" id="headerTinyAbout">
            °About°
          </a>{" "}
          ¦{" "}
          <a href="/games" id="headerTinyGames" class="textGreen">
            °Games°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/calendar" id="headerTinyCalendar" class="textGreen">
            °Calendar°
          </a>
          ¦
          <a href="/sponsors" id="headerTinySponsors">
            °Sponsors°
          </a>
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/settings" id="headerTinySettings">
            °Settings°
          </a>{" "}
          ¦{" "}
          <a href="/support" id="headerTinySupport" class="textGreen">
            °Support°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          {" "}
          <a href="/modifier" id="headerTinyModifiers" class="textGreen">
            °Modifiers°
          </a>
          ¦
          <a
            href={props.aocLink}
            id="headerTinyAOC"
            target="_blank"
            rel="noopener noreferrer"
            class="textRed"
          >
            °AoC°
          </a>{" "}
        </div>
        <div class="flex gap1 marginVertPoint2">
          <a href="/leaderboard" id="headerTinyLeaderboard">
            °Leaderboard°
          </a>
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
        id="headerLights"
      />
      <br />
    </header>
  );
});
