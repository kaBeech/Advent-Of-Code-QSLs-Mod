import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, server$ } from "@builder.io/qwik-city";

const gameID = 1;
const dayID = 1;

const serverFetcher = server$(async function () {
  const xtremeXmasAPI = this.env.get("XTREME_XMAS_API");
  const abortController = new AbortController();
  const res = await fetch(`${xtremeXmasAPI}/modifier`, {
    signal: abortController.signal,
  });
  const data = await res.json();
  return data || `Error - URI is ${xtremeXmasAPI}/modifier`;
});

export default component$(() => {
  const state = useStore({
    gameID,
    dayID,
  });

  const xtremeXmasDayResource = useResource$<any>(
    async ({ track, cleanup }) => {
      const gameID = track(() => state.gameID);
      const dayID = track(() => state.dayID);
      console.log("gameID", gameID, "dayID", dayID);
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const res = await serverFetcher();
      return res || `Error fetching xtremeXmasAPI`;
    }
  );

  return (
    <div>
      <div>
        <h1 class="title">Xtreme Xmas Day Viewer</h1>

        <h2>Enter Game and Day IDs:</h2>

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
                  Challenge Modifier: <strong>THIS IS A TEST</strong>
                </h2>
                <h3>Modifier Option: {xtremeXmasDayData[0].id} </h3>
              </div>
            );
          }}
        />
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
