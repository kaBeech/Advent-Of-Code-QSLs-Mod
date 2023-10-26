import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = (event) => {
  throw event.redirect(302, `/game`);
};

export default component$(() => {
  return (
    <article>
      Oh! Looks like the redirect didn't work. Maybe try{" "}
      <a class="link" href="game/1">
        this link
      </a>
      ?
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Calendar",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
