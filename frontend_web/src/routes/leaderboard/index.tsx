/* eslint-disable no-irregular-whitespace */
// import type { Session } from "@auth/core/types";
import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import type { LeaderboardGame } from "~/types";
import { serverFetcher } from "~/util/serverFetcher";
// import { getGithubUserIdFromUserImage } from "~/util/getGithubUserIdFromUserImage";
// import { useAuthSession } from "../plugin@auth";

let leaderboardGames: LeaderboardGame[] | null = null;

export const onRequest: RequestHandler = (event) => {
  const leaderboardGamesString =
    event.cookie.get("leaderboardGames")?.value || null;
  if (leaderboardGamesString) {
    leaderboardGames = JSON.parse(leaderboardGamesString);
  }
};

export default component$(() => {
  // const session = useAuthSession();
  // const userId = getGithubUserIdFromUserImage(session.value!.user!.image!);
  const state = useStore({
    leaderboardGames,
  });

  const leaderboardGamesResource = useResource$<any>(
    async ({ track, cleanup }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const leaderboardGames = track(() => state.leaderboardGames);

      const abortController = new AbortController();
      cleanup(() => abortController.abort("cleanup"));
      const leaderboardGamesData: LeaderboardGame[] = await serverFetcher(
        `leaderboard`,
        "GET"
      );
      state.leaderboardGames = leaderboardGamesData;
      return leaderboardGamesData;
    }
  );

  return (
    <article>
      <h1>Leaderboard</h1>
      <div>
        -----------------------------------------------------------------------------
      </div>
      <div>
        Rank ¦ Year ¦ Game Name        ¦ Score ¦ Title      ¦ Repo Link ¦ Player
        Name
      </div>
      <div>
        -----------------------------------------------------------------------------
      </div>
      <ul>
        <Resource
          value={leaderboardGamesResource}
          onPending={() => {
            return (
              <>
                {" "}
                {!state.leaderboardGames ? (
                  <li>Loading...</li>
                ) : state.leaderboardGames.length < 1 ? (
                  <li>No games currently recorded for this leaderboard</li>
                ) : (
                  <>
                    {state.leaderboardGames.map((game: LeaderboardGame) => (
                      <li key={`game-${game.id}`}>
                        {game.year} - {game.name} - {game.score} -{" "}
                        {game.Title.name} - {game.User.username} -{" "}
                        <a href={`repositoryLink`}>°Repo Link°</a>
                      </li>
                    ))}
                  </>
                )}
              </>
            );
          }}
          onResolved={(leaderboardGamesData) => {
            if (leaderboardGamesData.length < 1) {
              return <li>No games currently recorded for this leaderboard</li>;
            }
            return (
              <>
                {leaderboardGamesData.map(
                  (game: LeaderboardGame, index: number) => {
                    const rank = {
                      string: String(index + 1),
                      color: `xmasLight colorShift${(index % 12) + 1}`,
                    };
                    let gameNameString = `°${game.name}°`;
                    let scoreString = String(game.score);
                    const title = {
                      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                      string: game.Title
                        ? game.Title.name.split(" ")[0]
                        : `Incomplete`,
                      color: "textBright",
                    };
                    switch (title.string) {
                      case "Champion":
                        title.color = "fsGreen";
                        break;
                      case "Gnarly":
                        title.color = "fsTurquoise";
                        break;
                      case "Radical":
                        title.color = "fsCyan";
                        break;
                      case "Righteous":
                        title.color = "fsCerulean";
                        break;
                      case "Epic":
                        title.color = "fsBlue";
                        break;
                      case "Flawless":
                        title.color = "fsPurple";
                        break;
                      case "Legendary":
                        title.color = "fsRose";
                        break;
                      case "Santaic":
                        title.color = "fsRed";
                        break;
                      case "Godlike":
                        title.color = "fsYellow";
                        break;
                      default:
                        break;
                    }
                    rank.string.length < 6 &&
                      (rank.string += " ".repeat(6 - rank.string.length));
                    gameNameString.length <= 19
                      ? (gameNameString += " ".repeat(
                          19 - gameNameString.length
                        ))
                      : (gameNameString = gameNameString.slice(0, 15) + "...°");
                    scoreString.length < 7 &&
                      (scoreString += " ".repeat(7 - scoreString.length));
                    title.string.length < 11 &&
                      (title.string += " ".repeat(11 - title.string.length));
                    return (
                      <li key={`game-${game.id}`}>
                        <em>
                          <span class={rank.color}>{rank.string}</span>{" "}
                          {game.year}
                          {"  "}
                          <a href={`/game/public/${game.id}`}>
                            {gameNameString}
                          </a>{" "}
                          <span class="textGold">{scoreString}</span>{" "}
                          <span class={title.color}>{title.string}</span>
                          <a href={game.repositoryLink}> °Repo Link°</a>
                          {"  "}
                          {game.User.username}{" "}
                        </em>
                      </li>
                    );
                  }
                )}
              </>
            );
          }}
        />
      </ul>
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas - Leaderboards",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas - an invigorating twist on your favorite advent calendar",
    },
  ],
};
