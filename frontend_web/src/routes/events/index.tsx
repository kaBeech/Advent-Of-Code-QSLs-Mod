import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
import type { Session } from "@auth/core/types";

let gameNumber = 1;
const dayNumber = 1;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }
  gameNumber = +event.cookie.get("gameNumber")!.value;
};

export default component$(() => {
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);

  const state = useStore({
    gameNumber,
    dayNumber,
    buttonPresses: 0,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const gameNumber = track(() => state.gameNumber);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dayNumber = track(() => state.dayNumber);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);

      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`userdata`, "GET", userId);
      if (userData.Game.length < 1) {
        return { numberOfGames: JSON.stringify(userData.Game.length) };
      }
      return {
        numberOfGames: JSON.stringify(userData.Game.length),
        userData,
      };
    }
  );

  return (
    <div>
      <div>
        <h1 class="title">Current Games</h1>
        <Resource
          value={xtremeXmasUserDataResource}
          onPending={() => {
            return (
              <div>
                <strong>Loading...</strong>
              </div>
            );
          }}
          onResolved={(xtremeXmasData) => {
            if (+xtremeXmasData.numberOfGames < 1) {
              return (
                <div>
                  <h2>
                    Please <a href="/new">[Start a New Game!]</a>
                  </h2>
                </div>
              );
            }

            return (
              <>
                {xtremeXmasData.userData.Game.map(
                  (game: { name: string; number: number; year: number }) => (
                    <div key={`game-${game.number}`}>
                      <a href={`/game/${game.number}`}>
                        {game.year}
                        <span class="textMedium"> - {game.name}</span>
                      </a>
                    </div>
                  )
                )}
                <a href="/new">[New Game]</a>
              </>
            );
          }}
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Events",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
