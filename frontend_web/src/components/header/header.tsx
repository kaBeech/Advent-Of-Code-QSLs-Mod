import { $, component$, useStore } from "@builder.io/qwik";
import LogInOrOut from "../logInOrOut/logInOrOut";
import { useAuthSession } from "~/routes/plugin@auth";

interface HeaderProps {
  isLoggedIn: boolean;
  toggleLoggedIn: Function | any;
}

export default component$((props: HeaderProps) => {
  console.log("Props", props.isLoggedIn);

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
          <a href="/">Xtreme Xmas</a>
          <a href="/game">YEAR0</a>
        </div>
        <div class="flex column">
          <div class="flex">
            {" "}
            <a href="/about">[About]</a> <a href="/events">[Events]</a>{" "}
            <div>[Shop???]</div> <a href="/settings">[Settings]</a>{" "}
            <LogInOrOut
              isLoggedIn={state.isLoggedIn}
              toggleLoggedIn={toggleLoggedIn}
            />
            <div>{session.value?.user?.name}</div>
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
