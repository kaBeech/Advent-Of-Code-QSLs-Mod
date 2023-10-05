// import type { Session } from "@auth/core/types";
import {
  Resource,
  component$,
  useResource$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { Link, server$ } from "@builder.io/qwik-city";
import SignIn from "~/components/signIn/signIn";
import SignOut from "~/components/signOut/signOut";

// export const onRequest: RequestHandler = (event) => {
//   const session: Session | null = event.sharedMap.get("session");
//   if (!session || new Date(session.expires) < new Date()) {
//     throw event.redirect(
//       302,
//       `/api/auth/signin?callbackUrl=${event.url.pathname}`
//     );
//   }
// };

const gameID = 1;
const dayID = 1;

const serverFetcher = server$(async function (
  route: string,
  method: string,
  token: string
) {
  //   const xtremeXmasAPI = this.env.get("XTREME_XMAS_API");
  // if (xtremeXmasAPI == undefined) {
  //   console.error("XTREME_XMAS_API string not found upon request");
  // }
  const xtremeXmasAPI = "http://127.0.0.1:8000";
  const abortController = new AbortController();
  const res = await fetch(`${xtremeXmasAPI}/${route}`, {
    signal: abortController.signal,
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
});

export default component$(() => {
  const state = useStore({
    gameID,
    dayID,
    buttonPresses: 0,
    token: "undefined",
  });

  useVisibleTask$(() => {
    state.token = localStorage.getItem("token")!;
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const gameID = track(() => state.gameID);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const dayID = track(() => state.dayID);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);
      const token = track(() => state.token);
      if (token === "undefined") {
        return {
          challengeModifier: "Loading...",
          modifierOption: "Loading...",
          currentRerollTokens: "Loading...",
          currentDay: "Loading...",
          currentDayCompleted: "Loading...",
          part1Completed: "Loading...",
          part2Completed: "Loading...",
        };
      }
      console.log("xmasToken", token);
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`userdata`, "GET", token);
      const gameData = userData.Game.find(
        (game: { number: number }) => game.number === +gameID
      );
      const dayData = gameData.Day.find(
        (day: { number: number }) => day.number === +dayID
      );
      return {
        challengeModifier: dayData.challengeModifierId
          ? dayData.ChallengeModifier.text
          : "None",
        modifierOption: dayData.modifierOptionId
          ? dayData.ModifierOption.text
          : "None",
        currentRerollTokens: gameData.currentRerollTokens,
        currentDay: gameData.currentDay,
        currentDayCompleted: dayData.currentDayCompleted ? "Yes" : "No",
        part1Completed: dayData.part1Completed ? "Yes" : "No",
        part2Completed: dayData.part2Completed ? "Yes" : "No",
      };
    }
  );

  return (
    <div>
      <div>
        <h1 class="title">Xtreme Xmas Day Viewer</h1>
        <SignIn />
        <SignOut />
        <h2>Enter Game and Day IDs:</h2>
        <input
          class="pointer"
          type="number"
          onInput$={(ev: any) => (state.gameID = ev.target.value)}
          value={gameID}
          aria-labelledby="Game ID"
        />
        <input
          class="pointer"
          type="number"
          onInput$={(ev: any) => (state.dayID = ev.target.value)}
          value={dayID}
          aria-labelledby="Day ID"
        />
        <Resource
          value={xtremeXmasUserDataResource}
          onPending={() => {
            return (
              <div>
                <h2>
                  Challenge Modifier: <strong>Loading...</strong>
                </h2>
                <h3>Modifier Option: Loading...</h3>
              </div>
            );
          }}
          onResolved={(xtremeXmasData) => {
            return (
              <div class="flex column">
                <h2>
                  Challenge Modifier:{" "}
                  <strong>{xtremeXmasData.challengeModifier}</strong>
                </h2>
                <h3>
                  Modifier Option:{" "}
                  <strong>{xtremeXmasData.modifierOption}</strong>
                </h3>
                <div>
                  Current Reroll Tokens:{" "}
                  <strong>{xtremeXmasData.currentRerollTokens}</strong>
                </div>
                <div>
                  Current Day: <strong>{xtremeXmasData.currentDay}</strong>
                </div>
                <div>
                  Current Day Completed?{" "}
                  <strong>{xtremeXmasData.currentDayCompleted}</strong>
                </div>
                <div>
                  Selected Day Part 1 Completed?{" "}
                  <strong>{xtremeXmasData.part1Completed}</strong>
                </div>
                <div>
                  Selected Day Part 2 Completed?{" "}
                  <strong>{xtremeXmasData.part2Completed}</strong>
                </div>
              </div>
            );
          }}
        />
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/${state.dayID}/complete/part1`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Complete Part 1
        </button>
        <button
          onClick$={async () => {
            const data = await serverFetcher(
              `userdata`,
              "GET",
              localStorage.getItem("token")!
            );
            console.log(data);
            state.buttonPresses++;
          }}
        >
          Get Data
        </button>
        {/* <button
          onClick$={async () => {
            await serverFetcher(`login`, "GET");
            state.buttonPresses++;
          }}
        >
          Login
        </button>{" "} */}
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/${state.dayID}/complete/part2`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Complete Part 2
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/complete`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Complete Day
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/${+state.dayID + 1}`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Start Next Day
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/${state.dayID}/roll`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Roll Initial Challenge Modifier
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/${state.dayID}/reroll/modifier`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Reroll Challenge Modifier
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `game/${state.gameID}/day/${state.dayID}/reroll/option`,
              "PUT",
              localStorage.getItem("token")!
            );
            state.buttonPresses++;
          }}
        >
          Reroll Modifier Option
        </button>
        <p>
          <Link href="../">{"<-- Back"}</Link>
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Day Viewer",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
