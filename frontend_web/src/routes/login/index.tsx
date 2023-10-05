// import type { Session } from "@auth/core/types";
import {
  $,
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";

export default component$(() => {
  const ref = useSignal<Element>();

  useVisibleTask$(() => {
    ref.value!.innerHTML = "Changed!";
  });

  const state = useStore({
    username: "USERNAME",
    password: "PASSWORD",
    buttonPresses: 0,
  });

  const login = $(async () => {
    const data = await serverFetcher(
      `log-in/local`,
      "POST",
      undefined,
      state.username,
      state.password
    );
    console.log(data);
    localStorage.setItem("token", data.token);
    sessionStorage.setItem("token", data.token);
    state.buttonPresses++;
  });

  const getData = $(async () => {
    const data = await serverFetcher(
      `userdata`,
      "GET",
      localStorage.getItem("token")!
    );
    console.log(data);
    state.buttonPresses++;
  });

  const loginGitHub = $(async () => {
    const data = await serverFetcher(`log-in/github`, "GET");
    const uri = data.uri;
    const githubOAuth = await fetch(uri, {
      method: "GET",
    });
    const githubOAuthJson = await githubOAuth.json();
    console.debug(githubOAuthJson);
    // localStorage.setItem("token", data.token);
    // sessionStorage.setItem("token", data.token);
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
        <button onClick$={login}>LOGIN</button>
        <button
          ref={ref}
          onClick$={() => {
            ref.value!.innerHTML = "Clicked!";
            document.title = "Hellooooo world!!";
          }}
        >
          Click me
        </button>
        <button onClick$={loginGitHub}>Login with GitHub</button>
        <button onClick$={getData}>GET DATA</button>

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
