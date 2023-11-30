import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import XmasLights from "../xmasLights/xmasLights";
import sponsors from "~/data/sponsors";
import { pickRandomly } from "~/util/pickRandomly";

interface FooterProps {
  areLightsOn: boolean;
  toggleLights: QRL<() => void>;
}

export default component$((props: FooterProps) => {
  const randomlySelectedSponsor = pickRandomly(sponsors);

  return (
    <footer id="footer" class="sponsor flex column gap1 alignCenter">
      <br />
      <div>
        <XmasLights
          numberOfLights={18}
          firstLightStartingColorNumber={1}
          alternateColors={true}
          hasLightSwitch={false}
          isOn={props.areLightsOn}
          toggleLights={props.toggleLights}
          length="short"
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
          length="short"
        />
      </div>
      <p class="sponsor textCenter margin0">
        <a
          href={randomlySelectedSponsor.url}
          target="_blank"
          rel="noopener noreferrer"
          class="textGreen"
        >
          °{randomlySelectedSponsor.name}°
        </a>{" "}
        - {randomlySelectedSponsor.textLine1} <br />{" "}
        {randomlySelectedSponsor.textLine2}
      </p>
    </footer>
  );
});
