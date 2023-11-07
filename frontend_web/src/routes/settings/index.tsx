import { $, component$ } from "@builder.io/qwik";
import { useLocalStorage } from "~/hooks/useLocalStorage";

export default component$(() => {
  const [areLightsOn, setLightsBoolean] = useLocalStorage("areLightsOn", false);

  const toggleLights = $(() => {
    areLightsOn.value ? setLightsBoolean(false) : setLightsBoolean(true);
  });

  return (
    <article>
      <h1>Settings</h1>
      {areLightsOn.value ? (
        <p>
          <em class="pointer stitchLettering textGreen" onClick$={toggleLights}>
            󱨥
          </em>{" "}
          Christmas Lights are ON by default
        </p>
      ) : (
        <p>
          <em class="pointer stitchLettering textRed" onClick$={toggleLights}>
            󱨦
          </em>{" "}
          Christmas Lights are OFF by default
        </p>
      )}
    </article>
  );
});
