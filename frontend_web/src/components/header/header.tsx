import { component$ } from "@builder.io/qwik";
import SignIn from "../signIn/signIn";
import SignOut from "../signOut/signOut";

export default component$(() => {
  return (
    <header>
      <div class={`flex`}>
        <div class="flex column">
          <a href="/">Xtreme Xmas</a>
          <a href="/game">YEAR0</a>
        </div>
        <div class="flex column">
          <div class="flex">
            {" "}
            <a href="/about">[About]</a> <a href="/events">[Events]</a>{" "}
            <div>[Shop???]</div> <a href="/settings">[Settings]</a> <SignIn />{" "}
            <SignOut /> <div>NAME</div>{" "}
          </div>
          <div class="flex">
            {" "}
            <a href="/game">[Calendar]</a> <a href="/support">[XX++]</a>{" "}
            <a href="/sponsors">[Sponsors]</a>{" "}
            <a href="/leaderboard">[Leaderboard]</a>{" "}
            <a href="/stats">[Stats]</a>
          </div>
        </div>
      </div>
    </header>
  );
});
