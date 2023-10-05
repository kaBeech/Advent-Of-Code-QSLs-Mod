import { serverAuth$ } from "@builder.io/qwik-auth";
import type { Provider } from "@auth/core/providers";
// import Credentials from "@auth/core/providers/credentials";
import GitHub from "@auth/core/providers/github";

// import { getFormData } from "~/util/getFormData";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET")!,
    trustHost: true,
    providers: [
      // Credentials({
      //   credentials: {
      //     username: { label: "Username" },
      //     password: { label: "Password", type: "password" },
      //   },
      //   async authorize(credentials) {
      //     const username = credentials.username as string;
      //     const password = credentials.password as string;
      //     const bodyData = {
      //       username,
      //       password,
      //     };
      //     const bodyFormData = getFormData(bodyData);
      //     const response = await fetch(`http://127.0.0.1:8000/log-in/local`, {
      //       method: "POST",
      //       body: bodyFormData,
      //     });
      //     const data = await response.json();

      //     const user = {
      //       id: 1,
      //       name: data.username,
      //       email: data.token,
      //     };
      //     return user ?? null;
      //   },
      // }),
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
      }),
    ] as Provider[],
  }));
