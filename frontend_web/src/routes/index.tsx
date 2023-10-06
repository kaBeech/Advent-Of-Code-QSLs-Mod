import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import SignIn from "~/components/signIn/signIn";
import SignOut from "~/components/signOut/signOut";

export default component$(() => {
  return (
    <>
      <SignIn />
      <SignOut />
      <button>
        <Link href="/game/" style={"color: #fff"}>
          GAME
        </Link>
      </button>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>

      <div class="container container-flex">
        <div></div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
