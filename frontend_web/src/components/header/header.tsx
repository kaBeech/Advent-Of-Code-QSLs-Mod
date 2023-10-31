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
      <div class={`flex gap1`}>
        <div class="flex column alignEnd">
          <a href="/" class="glowGreen marginTBPoint2">
            Xtreme Xmas Code
          </a>

          <div class="flex column">
            <div class="flex gap1 marginTBPoint2">
              {" "}
              <a href="/about">About</a> <a href="/events">Games</a>{" "}
              <a href="https://adventofcode.com">AoC</a>{" "}
              <a href="/settings">Settings</a>{" "}
              <LogInOrOut
                isLoggedIn={state.isLoggedIn}
                toggleLoggedIn={toggleLoggedIn}
              />
              <div>{session.value?.user?.name}</div>
            </div>
            <div class="flex gap1 marginTBPoint2">
              {" "}
              <a href="/calendar">Calendar</a> <a href="/support">Support</a>{" "}
              <a href="/sponsors">Sponsors</a>{" "}
              <a href="/leaderboard">Leaderboard</a> <a href="/stats">Stats</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
