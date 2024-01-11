import type { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { useAuthSignin } from "../plugin@auth";

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (session && new Date(session.expires) > new Date()) {
    throw event.redirect(302, `/game/`);
  }
};

export default component$(() => {
  const logIn = useAuthSignin();

  return (
    <>
      <h1 class="logo stitch logoWhite">
        {"<"}
        <span class="logoRed"> Welcome! </span>
        {"<"}
      </h1>
      <p class="textCenter fontLarger marginTop0">
        Please log in with{" "}
        <a
          onClick$={() => {
            logIn.submit({ providerId: "credentials" });
          }}
          class="textGreen"
        >
          °Chester The Tester°
        </a>{" "}
        to test this site!
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Cheseter The Tester",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
