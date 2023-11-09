import { serverAuth$ } from "@builder.io/qwik-auth";
import type { Provider } from "@auth/core/providers";
import GitHub from "@auth/core/providers/github";

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
              Authorization: `Bearer ${
                env.get("XMAS_SECRET")
              } github${profile.id}`,
            },
          });

          // Return profile info
          return {
            id: profile.id.toString(),
            name: profile.name ?? profile.login,
            email: profile.email,
            image: profile.avatar_url,
          };
        },
      }),
    ] as Provider[],
  }));
