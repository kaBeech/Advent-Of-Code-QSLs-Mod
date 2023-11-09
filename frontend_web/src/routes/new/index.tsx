import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { serverFetcher } from "~/util/serverFetcher";
import { useAuthSession } from "../plugin@auth";
import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";

const title = "Test Game";
const year = 2022;
const numberOfGames = 0;
const isPublic: boolean = false;
const repositoryLink = "https://github.com/octocat/Spoon-Knife";

export default component$(() => {
  const session = useAuthSession();
  const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);

  const state = useStore({
    numberOfGames,
    title,
    year,
    buttonPresses: 0,
    loading: false,
    isPublic,
    repositoryLink,
  });

  const xtremeXmasUserDataResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const title = track(() => state.title);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const year = track(() => state.year);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const buttonPresses = track(() => state.buttonPresses);

      state.loading = true;
      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const userData = await serverFetcher(`userdata`, "GET", userId);
      let numberOfGames = 0;
      if (userData.Game) {
        numberOfGames = +JSON.stringify(userData.Game.length);
      }
      state.numberOfGames = +numberOfGames;
      state.loading = false;
      return {
        numberOfGames: +numberOfGames > 0 ? numberOfGames : 0,
      };
    }
  );

  return (
    <article>
      <h1 class="title">Create New Game</h1>
      <ul>
        <li>
          <label for="title">Title:</label>
          <input
            id="title"
            class="pointer"
            type="text"
            onInput$={(ev: any) => (state.title = ev.target.value)}
            value={title}
            minLength={1}
            maxLength={256}
            aria-labelledby="Title"
          />
        </li>
        <li>
          <label for="year">Year:</label>
          <input
            id="year"
            class="pointer"
            type="number"
            onInput$={(ev: any) => (state.year = ev.target.value)}
            value={year}
            min="2014"
            max="2023"
            aria-labelledby="Year"
          />
        </li>
        <li>
          <label for="repositoryLink">*Repository Link</label>
          <input
            id="repositoryLink"
            class="pointer"
            type="text"
            onInput$={(ev: any) => (state.repositoryLink = ev.target.value)}
            value={repositoryLink}
            minLength={1}
            maxLength={256}
            aria-labelledby="Repository Link"
          />
        </li>
        <li>
          <label for="publicCheckbox">*Public?</label>
          <input
            class="pointer"
            type="checkbox"
            onInput$={(ev: any) => (state.isPublic = ev.target.value)}
            id="publicCheckbox"
          />
        </li>
      </ul>
      <p>*Only required for Game to show on Leaderboards</p>
      <Resource
        value={xtremeXmasUserDataResource}
        onPending={() => {
          state.loading = true;
          return (
            <p>
              Number Of Games:{" "}
              <strong>
                {!state.numberOfGames ? `Loading...` : state.numberOfGames}
              </strong>
            </p>
          );
        }}
        onResolved={(xtremeXmasData) => {
          state.loading = false;
          return (
            <>
              <p>
                Number Of Games: <strong>{xtremeXmasData.numberOfGames}</strong>
              </p>
              <a
                onClick$={async () => {
                  if (state.loading) {
                    return;
                  }
                  state.loading = true;
                  let repositoryLink = state.repositoryLink;
                  if (
                    repositoryLink === "https://github.com/octocat/Spoon-Knife"
                  ) {
                    repositoryLink = "";
                  }
                  const res = await serverFetcher(
                    `game/${+xtremeXmasData.numberOfGames + 1}`,
                    "PUT",
                    userId,
                    {
                      name: state.title,
                      year: state.year,
                      isPublic: state.isPublic ? true : false,
                      repositoryLink,
                    }
                  );
                  state.buttonPresses++;
                  window.location.href = `/game/${res.number}`;
                }}
              >
                °Create New Game°
              </a>
            </>
          );
        }}
      />
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - New Game",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
