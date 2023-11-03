import { component$ } from "@builder.io/qwik";
import XmasLights from "../xmasLights/xmasLights";

export default component$(() => {
  return (
    <footer id="footer" class="sponsor flex column gap1 alignCenter">
      <div>
        <XmasLights
          numberOfLights={18}
          firstLightStartingColorNumber={1}
          alternateColors={true}
        />
        <a href="/sponsors" class="">
          °Sponsor°
        </a>
        <XmasLights
          numberOfLights={18}
          firstLightStartingColorNumber={1}
          alternateColors={true}
        />
      </div>
      <p class="sponsor textCenter">
        <a href="/about">°Kyle Beechly°</a> - I'm the creator of Xtreme Xmas
        Code; I hope you like it! <br />
        Please reach out if you have any questions/comments or if you'd like to
        work with me!
      </p>
      {/* <XmasLights
        numberOfLights={43}
        firstLightStartingColorNumber={1}
        alternateColors={true}
      /> */}
    </footer>
  );
});
