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
      <div class={`flex justifyCenter gap1`}>
        <div class="flex column alignCenter">
          <a href="/" class="logo stitch marginTBPoint2">
            <span class="logoGold">*</span> Xtreme{" "}
            <span class="logoGreen">^</span> Xmas{" "}
            <span class="logoWhite">§</span> Code{" "}
            <span class="logoBrown">»</span>
          </a>

          <div class="flex column alignCenter">
            <div class="flex gap1 marginTBPoint2">
              {" "}
              <a href="/about">About</a> ¦ <a href="/events">Games</a> ¦
              <a href="/settings">Settings</a> ¦
              <LogInOrOut
                isLoggedIn={state.isLoggedIn}
                toggleLoggedIn={toggleLoggedIn}
              />
              <div>{session.value?.user?.name}</div>
            </div>
            <div class="flex gap1 marginTBPoint2">
              {" "}
              <a href="/calendar">Calendar</a> ¦ <a href="/support">Support</a>{" "}
              ¦<a href="/sponsors">Sponsors</a> ¦
              <a href="/leaderboard">Leaderboards</a>{" "}
            </div>
          </div>
          <br />
          <div class="rotate180 xmasLight">
                                             
                     
          </div>
        </div>
      </div>
    </header>
  );
});
