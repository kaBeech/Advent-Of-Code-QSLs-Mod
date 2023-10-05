// import type { Session } from "@auth/core/types";
import { $, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const state = useStore({
    username: "USERNAME",
    password: "PASSWORD",
    buttonPresses: 0,
  });

  const login = $(async () => {
    const data = await serverFetcher(
      `log-in/local`,
      "POST",
      state.username,
      state.password
    );
    console.log(data);
    state.buttonPresses++;
  });

  return (
    <div>
      <div>
        <h1 class="title">Login</h1>
        <h2>Enter Username and Password:</h2>
        <input
          class="pointer"
          type="text"
          onInput$={(ev: any) => (state.username = ev.target.value)}
          value={"USERNAME"}
          aria-labelledby="Game ID"
        />
        <input
          class="pointer"
          type="password"
          onInput$={(ev: any) => (state.password = ev.target.value)}
          value={"PASSWORD"}
          aria-labelledby="Day ID"
        />
        <button onClick$={login}>TEST</button>

        <p>
          <Link href="../">{"<-- Back"}</Link>
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Login",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
