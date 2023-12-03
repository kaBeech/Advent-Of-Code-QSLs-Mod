import { component$ } from "@builder.io/qwik";
import { Resource, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LogIn from "~/components/logIn/logIn";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const state = useStore({
    buttonPresses: 0,
  });

  const modifiersResource = useResource$<any>(async ({ track, cleanup }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const buttonPresses = track(() => state.buttonPresses);

    const abortController = new AbortController();
    cleanup(() => abortController.abort("cleanup"));
    const userData = await serverFetcher(`modifier`, "GET");
    let modifiers = JSON.stringify(userData);
    if (!modifiers) {
      modifiers = "None";
    }
    return modifiers;
  });

  return (
    <article>
      <h1 class="title">Create New Game</h1>
      <h2>Enter Title, Year, and Player Name:</h2>
      <p class="textCenter">
        Please <LogIn /> to play!{" "}
      </p>

      <Resource
        value={modifiersResource}
        onPending={() => {
          return (
            <p>
              Modifiers: <strong>Loading...</strong>
            </p>
          );
        }}
        onResolved={(modifiers) => {
          return (
            <p>
              Modifiers: <strong>{modifiers}</strong>
            </p>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - New Game",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
