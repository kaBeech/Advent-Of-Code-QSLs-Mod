import { component$ } from "@builder.io/qwik";
import {
  Link,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";

export const onRequest: RequestHandler = (event) => {
  throw event.redirect(302, `/game/1`);
};

export default component$(() => {
  return (
    <>
      <div class="screenContents justifyCenter">
        Oh! Looks like the redirect didn't work. Maybe try{" "}
        <Link class="link" href="game/1">
          this link
        </Link>
        ?
      </div>
      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>
    </>
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
