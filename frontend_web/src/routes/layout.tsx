import { $, component$, Slot, useStore, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import styles from "./styles.css?inline";
import Header from "~/components/header/header";
import type { Session } from "@auth/core/types";
import Footer from "~/components/footer/footer";
// import Sidebar from "~/components/sidebar/sidebar";

let isLoggedIn = false;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (session && new Date(session.expires) > new Date()) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
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
  });

  const toggleLoggedIn = $(() => {
    state.isLoggedIn ? (state.isLoggedIn = false) : (state.isLoggedIn = true);
  });
  return (
    <>
      <Header isLoggedIn={isLoggedIn} toggleLoggedIn={toggleLoggedIn} />
      <main class="flex column alignCenter">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
