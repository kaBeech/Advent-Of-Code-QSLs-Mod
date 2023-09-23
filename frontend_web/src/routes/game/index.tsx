import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, server$ } from "@builder.io/qwik-city";

const gameID = 1;
const dayID = 1;

const serverFetcher = server$(async function (route: string, method: string) {
  //   const xtremeXmasAPI = this.env.get("XTREME_XMAS_API");
  // if (xtremeXmasAPI == undefined) {
  //   console.error("XTREME_XMAS_API string not found upon request");
  // }
  const xtremeXmasAPI = "http://localhost:8000";
  const abortController = new AbortController();
  const res = await fetch(`${xtremeXmasAPI}/${route}`, {
    signal: abortController.signal,
    method,
  });
  const data = await res.json();
  return {
    challengeModifier: data.challengeModifierId
      ? data.ChallengeModifier.text
      : "None",
    modifierOption: data.hasOptions ? data.ModifierOption.text : "None",
  };
});

export default component$(() => {
  const state = useStore({
    gameID,
    dayID,
    buttonPresses: 0,
  });

  const xtremeXmasDayResource = useResource$<any>(
    async ({ track, cleanup }) => {
      const gameID = track(() => state.gameID);
      const dayID = track(() => state.dayID);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const res = await serverFetcher(
        `user/1/game/${gameID}/day/${dayID}`,
        "GET"
      );
      return res;
    }
  );

  return (
    <div>
      <div>
        <h1 class="title">Xtreme Xmas Day Viewer</h1>

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
          value={xtremeXmasDayResource}
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
          onResolved={(xtremeXmasDayData) => {
            return (
              <div class="flex column">
                <h2>
                  Challenge Modifier:{" "}
                  <strong>{xtremeXmasDayData.challengeModifier}</strong>
                </h2>
                <h3>
                  Modifier Option:{" "}
                  <strong>{xtremeXmasDayData.modifierOption}</strong>
                </h3>
              </div>
            );
          }}
        />
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/complete/part1`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Complete Part 1
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/complete/part2`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Complete Part 2
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/complete`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Complete Day
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${+state.dayID + 1}`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Start Next Day
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/roll`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Roll Initial Challenge Modifier
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/reroll/modifier`,
              "PUT"
            );
            state.buttonPresses++;
          }}
        >
          Reroll Challenge Modifier
        </button>
        <button
          onClick$={async () => {
            await serverFetcher(
              `user/1/game/${state.gameID}/day/${state.dayID}/reroll/option`,
              "PUT"
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

// import { component$ } from "@builder.io/qwik";
// import {
//   type DocumentHead,
//   routeLoader$,
//   routeAction$,
//   zod$,
//   z,
//   Form,
// } from "@builder.io/qwik-city";
// import styles from "./todolist.module.css";

// interface ListItem {
//   text: string;
// }

// export const list: ListItem[] = [];

// export const useListLoader = routeLoader$(() => {
//   return list;
// });

// export const useAddToListAction = routeAction$(
//   (item) => {
//     list.push(item);
//     return {
//       success: true,
//     };
//   },
//   zod$({
//     text: z.string().trim().min(1),
//   })
// );

// export default component$(() => {
//   const list = useListLoader();
//   const action = useAddToListAction();

//   return (
//     <>
//       <div>Hello World!</div>
//       <div class="container container-center">
//         <h1>
//           <span class="highlight">TODO</span> List
//         </h1>
//       </div>

//       <div role="presentation" class="ellipsis"></div>

//       <div class="container container-center">
//         {list.value.length === 0 ? (
//           <span class={styles.empty}>No items found</span>
//         ) : (
//           <ul class={styles.list}>
//             {list.value.map((item, index) => (
//               <li key={`items-${index}`}>{item.text}</li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <div class="container container-center">
//         <Form action={action} spaReset>
//           <input type="text" name="text" required class={styles.input} />{" "}
//           <button type="submit" class="button-dark">
//             Add item
//           </button>
//         </Form>

//         <p class={styles.hint}>
//           PS: This little app works even when JavaScript is disabled.
//         </p>
//       </div>
//     </>
//   );
// });

// export const head: DocumentHead = {
//   title: "Advent Of Code - Xtreme Xmas",
// };
