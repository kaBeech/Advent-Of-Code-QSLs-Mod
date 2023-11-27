import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LogIn from "~/components/logIn/logIn";

export default component$(() => {
  return (
    <>
      <h1 class="logo stitch logoWhite">
        {"<"}
        <span class="logoRed"> Welcome! </span>
        {"<"}
      </h1>
      <p class="textCenter">
        Please <LogIn /> to play!{" "}
      </p>
      <br />
      <br />
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
