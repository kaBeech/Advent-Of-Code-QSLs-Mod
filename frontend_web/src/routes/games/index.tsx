import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../plugin@auth";
import type { Session } from "@auth/core/types";
import type { UserData } from "~/types";
import constructUserId from "~/util/constructUserId";
import { isNumeric } from "~/util/isNumeric";

let gameNumber = 1;
const dayNumber = 1;
let userData: UserData | null = null;

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/login`);
  }

  const storedGameNumber = event.cookie.get("gameNumber")?.value || null;
  if (!storedGameNumber || !isNumeric(storedGameNumber)) {
    gameNumber = 1;
  } else {
    gameNumber = +storedGameNumber;
  }
  const userDataString = event.cookie.get("userData")?.value || null;
  if (userDataString) {
    userData = JSON.parse(userDataString);
  }
};

export default component$(() => {
  const session = useAuthSession();
  // This is not actually using email - it's a hack to get Qwik's DefaultSession to make the User's ID accessible
  const userId = constructUserId(
    session.value!.user!.email!,
    session.value!.user!.image!
  );

  const state = useStore({
    gameNumber,
    dayNumber,
    buttonPresses: 0,
    numberOfGames: 0,
    userData,
  });

  const userDataResource = useResource$<any>(async ({ track, cleanup }) => {
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
    const numberOfGames = +JSON.stringify(userData.Game.length);
    state.numberOfGames = numberOfGames;
    state.userData = userData;
    return {
      numberOfGames,
      fullData: userData,
    };
  });

  return (
    <article>
      <h1 class="title fontLarger">Current Games</h1>
      <br />
      <Resource
        value={userDataResource}
        onPending={() => {
          return (
            <p>
              <strong>
                {" "}
                {!state.userData ? (
                  `Loading...`
                ) : state.numberOfGames < 1 ? (
                  <h2>
                    Please{" "}
                    <a href="/new" class="textGreen">
                      °Start a New Game!°
                    </a>
                  </h2>
                ) : (
                  <ul>
                    {state.userData.Game.map(
                      (game: {
                        name: string;
                        number: number;
                        year: number;
                      }) => (
                        <li key={`game-${game.number}`}>
                          <a
                            href={`/game/${game.number}`}
                            class={`${gameNumber % 2 === 0 && ` textGreen`}`}
                          >
                            °{game.year}°
                            <span class={`textMedium`}> - {game.name}</span>
                          </a>
                        </li>
                      )
                    )}
                    <a href="/new">°New Game°</a>
                  </ul>
                )}
              </strong>
            </p>
          );
        }}
        onResolved={(userData) => {
          if (+userData.numberOfGames < 1) {
            return (
              <h2>
                Please{" "}
                <a href="/new" class="textGreen">
                  °Start a New Game!°
                </a>
              </h2>
            );
          }

          const sortedGames = userData.fullData.Game.sort(
            (a: { number: number }, b: { number: number }) => {
              return b.number - a.number;
            }
          );

          return (
            <ul>
              {sortedGames.map(
                (game: { name: string; number: number; year: number }) => (
                  <li key={`game-${game.number}`} class={`marginVertPoint5`}>
                    <a
                      href={`/game/${game.number}`}
                      class={game.number % 2 !== 0 && ` textGreen`}
                    >
                      °{game.year}°
                      <span class="textMedium"> - {game.name}</span>
                    </a>
                  </li>
                )
              )}
              <br />
              <li>
                <a href="/new">°New Game°</a>
              </li>
            </ul>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Games",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
