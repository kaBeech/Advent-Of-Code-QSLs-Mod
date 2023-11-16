import {
  $,
  component$,
  Slot,
  useStore,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestEvent, RequestHandler } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
import Header from "~/components/header/header";
import type { Session } from "@auth/core/types";
import Footer from "~/components/footer/footer";
import { useLocalStorage } from "~/hooks/useLocalStorage";

let isLoggedIn = false;
const aocLink = {
  url: "https://adventofcode.com/",
  type: "plain",
  dayNumber: 0,
};

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (session && new Date(session.expires) > new Date()) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }
  readyAOCLink(event);
};

const readyAOCLink = (event: RequestEvent<QwikCityPlatform>) => {
  if (event.pathname.includes(`game/`)) {
    aocLink.type = "game";
    if (event.pathname.includes(`day/`)) {
      aocLink.type = "day";
      aocLink.dayNumber = +event.params.dayNumber;
    }
  }
};

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);

  const state = useStore({
    isLoggedIn,
    aocLink,
    year: 2023,
  });

  const toggleLoggedIn = $(() => {
    state.isLoggedIn ? (state.isLoggedIn = false) : (state.isLoggedIn = true);
  });

  const [areLightsOn, setLightsBoolean] = useLocalStorage("areLightsOn", false);

  const toggleLights = $(() => {
    areLightsOn.value ? setLightsBoolean(false) : setLightsBoolean(true);
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [year, setYear] = useLocalStorage("year", 2023);

  useVisibleTask$(() => {
    state.year = year.value;
    if (state.aocLink.type === "game") {
      state.aocLink.url = `https://adventofcode.com/${state.year}`;
    } else if (state.aocLink.type === "day") {
      state.aocLink.url = `https://adventofcode.com/${state.year}/day/${state.aocLink.dayNumber}`;
    }
  });

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        toggleLoggedIn={toggleLoggedIn}
        areLightsOn={areLightsOn.value}
        toggleLights={toggleLights}
        aocLink={state.aocLink.url}
      />
      <main class="flex column alignCenter">
        <Slot />
      </main>
      <Footer areLightsOn={areLightsOn.value} toggleLights={toggleLights} />
    </>
  );
});
