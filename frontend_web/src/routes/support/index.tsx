import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <article>
      <h1>Support</h1>
      <p>
        If you'd like to support Xtreme Xmas Code, you can do so by sharing it
        with a friend, supporting XXC's{" "}
        <a href="/sponsors" class="link">
          °sponsors°
        </a>
        , or supporting{" "}
        <a
          href="https://adventofcode.com/support"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          °Eric Wastl°
        </a>
        , creator of the original Advent of Code.
      </p>
      <p>
        I (<a href="/about#aboutMe">°Kyle Beechly°</a>) am also{" "}
        <em>#OpenToWork</em> and currently looking to move into a full-time
        software engineering role (right now I'm daylighting in healthcare and
        freelancing in web development). If you're looking to work with a fun
        nerd you may contact me via{" "}
        <a
          href="https://www.linkedin.com/in/kyle-beechly/"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          °LinkedIn°
        </a>
        ,{" "}
        <a
          href="mailto:contact@kabeech.com?subject=Let%27s%20work%20together%21"
          class="link"
        >
          °Email°
        </a>
        ,{" "}
        <a
          href="https://bsky.app/profile/kabeech.com"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          °Bluesky°
        </a>
        , or{" "}
        <a
          href="https://hachyderm.io/@kaBeech"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          °Mastodon°
        </a>
        !
      </p>
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Support",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
