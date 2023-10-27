import { component$ } from "@builder.io/qwik";
import { type DocumentHead, type RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = (event) => {
  const gameNumber = event.cookie.get("gameNumber")?.value || "1";
  throw event.redirect(302, `/game/${gameNumber}`);
};

export default component$(() => {
  return (
    <article>
      <p>
        Oh! Looks like the redirect didn't work. Maybe try{" "}
        <a class="link" href="game/1">
          this link
        </a>
        ?
      </p>
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Game   Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
