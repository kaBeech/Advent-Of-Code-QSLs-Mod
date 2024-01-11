import type { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import LogIn from "~/components/logIn/logIn";

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (session && new Date(session.expires) > new Date()) {
    throw event.redirect(302, `/game/`);
  }
};

export default component$(() => {
  return (
    <>
      <h1 class="logo stitch logoWhite">
        {"<"}
        <span class="logoRed"> Welcome! </span>
        {"<"}
      </h1>
      <p class="textCenter fontLarger marginTop0">
        Please <LogIn /> to play!
      </p>
      <p>
        View the <a href="/leaderboard">°Leaderboard°</a>
      </p>{" "}
      <p>
        Learn{" "}
        <a href="about" class={`textGreen`}>
          °About°
        </a>{" "}
        XXC
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Calendar",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
