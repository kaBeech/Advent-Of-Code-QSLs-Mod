import { serverAuth$ } from "@builder.io/qwik-auth";
import type { Provider } from "@auth/core/providers";
import GitHub from "@auth/core/providers/github";
import Reddit from "@auth/core/providers/reddit";

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET")!,
    trustHost: true,
    providers: [
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
        profile(profile) {
          // Create a user in the database if one doesn't yet exist
          const abortController = new AbortController();
          fetch(`${env.get("XTREME_XMAS_API")}/user`, {
            signal: abortController.signal,
            method: "PUT",
            headers: {
              Authorization: `Bearer ${env.get("XMAS_SECRET")}`,
              UserId: `github${profile.id}`,
              OAuthUrl: profile.html_url,
              OAuthUsername: profile.login,
              OAuthName: profile.name || "",
              OAuthAvatarUrl: profile.avatar_url,
            },
          });

          // Return profile info
          return {
            id: profile.id.toString(),
            name: profile.name ?? profile.login,
            image: profile.avatar_url ? profile.avatar_url : "github",
            // This is not email, it's a hack to get Qwik's DefaultSession to make the User's ID accessible
            email: profile.id.toString(),
          };
        },
      }),
      Reddit({
        clientId: env.get(`REDDIT_CLIENT_ID`)!,
        clientSecret: env.get(`REDDIT_CLIENT_SECRET`)!,
        authorization: {
          params: {
            duration: "permanent",
          },
        },
        profile(profile) {
          // Create a user in the database if one doesn't yet exist
          const abortController = new AbortController();
          fetch(`${env.get("XTREME_XMAS_API")}/user`, {
            signal: abortController.signal,
            method: "PUT",
            headers: {
              Authorization: `Bearer ${env.get("XMAS_SECRET")}`,
              UserId: `reddit${profile.id}`,
              OAuthUrl: `https://www.reddit.com/user/${profile.name}`,
              OAuthUsername: profile.name,
              OAuthName: profile.name || "",
              OAuthAvatarUrl: profile.snoovatar_img,
            },
          });

          // Return profile info
          return {
            id: profile.id.toString(),
            name: profile.name,
            image: profile.snoovatar_img ? profile.snoovatar_img : "reddit",
            // This is not email, it's a hack to get Qwik's DefaultSession to make the User's ID accessible
            email: profile.id.toString(),
          };
        },
      }),
    ] as Provider[],
  }));
