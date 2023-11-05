import { component$ } from "@builder.io/qwik";
import XmasLights from "../xmasLights/xmasLights";

interface FooterProps {
  areLightsOn: boolean;
  toggleLights: Function | any;
}

export default component$((props: FooterProps) => {
  return (
    <footer id="footer" class="sponsor flex column gap1 alignCenter">
      <div>
        <XmasLights
          numberOfLights={18}
          firstLightStartingColorNumber={1}
          alternateColors={true}
          hasLightSwitch={false}
          isOn={props.areLightsOn}
          toggleLights={props.toggleLights}
        />
        <a href="/sponsors" class="">
          °Sponsor°
        </a>
        <XmasLights
          numberOfLights={18}
          firstLightStartingColorNumber={1}
          alternateColors={true}
          hasLightSwitch={false}
          isOn={props.areLightsOn}
          toggleLights={props.toggleLights}
        />
      </div>
      <p class="sponsor textCenter">
        <a href="/about">°Kyle Beechly°</a> - I'm the creator of Xtreme Xmas
        Code; I hope you like it! <br />
        Please reach out if you have any questions/comments or if you'd like to
        work with me!
      </p>
    </footer>
  );
});
