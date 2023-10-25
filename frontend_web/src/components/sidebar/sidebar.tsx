import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div id="sidebar" class="desktopShow">
      <div class="sponsor flex column gap1">
        <div class="textDim">
          Our{" "}
          <a href="/sponsors" class="">
            sponsors
          </a>{" "}
          help make Xtreme Xmas Code possible:
        </div>
        <div class="sponsor">
          <a href="/about">Kyle Beechly</a> - I'm the creator of Xtreme Xmas
          Code; I hope you like it! <br />
          Please reach out if you have any questions or comments or if you'd
          like to work with me!
        </div>
      </div>
    </div>
  );
});
