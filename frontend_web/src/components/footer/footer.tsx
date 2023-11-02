import { component$ } from "@builder.io/qwik";
import XmasLights from "../xmasLights/xmasLights";

export default component$(() => {
  return (
    <div id="footer" class="sponsor flex column gap1 alignCenter">
      <div class="textDim">
        <XmasLights
          numberOfLights={20}
          firstLightStartingColorNumber={1}
          alternateColors={true}
        />
        <a href="/sponsors" class="">
          Sponsor
        </a>

        <XmasLights
          numberOfLights={20}
          firstLightStartingColorNumber={1}
          alternateColors={true}
        />
      </div>
      <div class="sponsor">
        <a href="/about">Kyle Beechly</a> - I'm the creator of Xtreme Xmas Code;
        I hope you like it! <br />
        Please reach out if you have any questions or comments or if you'd like
        to work with me!
      </div>
      <XmasLights
        numberOfLights={44}
        firstLightStartingColorNumber={1}
        alternateColors={true}
      />
    </div>
  );
});
