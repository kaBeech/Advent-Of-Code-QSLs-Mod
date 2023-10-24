import { $, component$, useStore } from "@builder.io/qwik";
import LogInOrOut from "../logInOrOut/logInOrOut";
import { useAuthSession } from "~/routes/plugin@auth";

interface HeaderProps {
  isLoggedIn: boolean;
  toggleLoggedIn: Function | any;
}

export default component$((props: HeaderProps) => {
  const toggleLoggedIn = $(() => {
    props.toggleLoggedIn();
  });

  const state = useStore({
    isLoggedIn: props.isLoggedIn,
  });
  const session = useAuthSession();
  return (
    <header>
      <div class={`flex`}>
        <div class="flex column">
          <a href="/">Xtreme Xmas Code</a>
          <a href="/game">let y=2023</a>
        </div>
        <div class="flex column">
          <div class="flex">
            {" "}
            <a href="/about">[About]</a> <a href="/events">[Events]</a>{" "}
            <a href="https://adventofcode.com">[AoC]</a>{" "}
            <a href="/settings">[Settings]</a>{" "}
            <LogInOrOut
              isLoggedIn={state.isLoggedIn}
              toggleLoggedIn={toggleLoggedIn}
            />
            <div>{session.value?.user?.name}</div>
          </div>
          <div class="flex">
            {" "}
            <a href="/calendar">[Calendar]</a> <a href="/support">[XXC++]</a>{" "}
            <a href="/sponsors">[Sponsors]</a>{" "}
            <a href="/leaderboard">[Leaderboard]</a>{" "}
            <a href="/stats">[Stats]</a>
          </div>
        </div>
      </div>
    </header>
  );
});
