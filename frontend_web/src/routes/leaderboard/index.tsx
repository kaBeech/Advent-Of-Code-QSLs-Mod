/* eslint-disable no-irregular-whitespace */
// import type { Session } from "@auth/core/types";
import { Resource, component$, useResource$, useStore } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import type { LeaderboardGame } from "~/types";
import { serverFetcher } from "~/util/serverFetcher";

let leaderboardGames: LeaderboardGame[] | null = null;

export const onRequest: RequestHandler = (event) => {
  const leaderboardGamesString =
    event.cookie.get("leaderboardGames")?.value || null;
  if (leaderboardGamesString) {
    leaderboardGames = JSON.parse(leaderboardGamesString);
  }
};

export default component$(() => {
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
    <article class="dashedHeaders">
      <h1>Leaderboard</h1>
      <div class="desktopShow">
        <div>-----------------------------------------------</div>
        <div>
          # ¦ Year  ¦ Title      ¦ Game Name          
          <br />   ¦ Score ¦ Repo Link  ¦ Player Name
        </div>
        <div>-----------------------------------------------</div>
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
                          <a
                            href={`repositoryLink`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            °Repo Link°
                          </a>
                        </li>
                      ))}
                    </>
                  )}
                </>
              );
            }}
            onResolved={(leaderboardGamesData) => {
              if (leaderboardGamesData.length < 1) {
                return (
                  <li>No games currently recorded for this leaderboard</li>
                );
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
                      rank.string.length < 3 &&
                        (rank.string += " ".repeat(3 - rank.string.length));
                      gameNameString.length <= 21
                        ? (gameNameString += " ".repeat(
                            21 - gameNameString.length
                          ))
                        : (gameNameString =
                            gameNameString.slice(0, 16) + "...° ");
                      scoreString.length < 7 &&
                        (scoreString += " ".repeat(7 - scoreString.length));
                      title.string.length < 13
                        ? (title.string = "  " + title.string)
                        : title.string.length < 14 &&
                          (title.string = " " + title.string);
                      title.string.length < 14 &&
                        (title.string += " ".repeat(14 - title.string.length));
                      return (
                        <li key={`game-${game.id}`} class={`marginVert1`}>
                          <em>
                            <span class={rank.color}>{rank.string}</span>{" "}
                            {game.year}
                            {"  "}
                            <span class={title.color}>{title.string}</span>
                            <a href={`/game/public/${game.id}`}>
                              {gameNameString}
                            </a>{" "}
                            <br />
                            <span class="textGold">
                              {"    " + scoreString}
                            </span>{" "}
                            <a
                              href={game.repositoryLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              °Repo Link°
                            </a>
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
      </div>
      <div class="tabletShow">
        <h2>
          Rank ¦ Year ¦ Game Name ¦ Score ¦ Title ¦ Repo Link ¦ Player Name
        </h2>
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
                          <a
                            href={`repositoryLink`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            °Repo Link°
                          </a>
                        </li>
                      ))}
                    </>
                  )}
                </>
              );
            }}
            onResolved={(leaderboardGamesData) => {
              if (leaderboardGamesData.length < 1) {
                return (
                  <li>No games currently recorded for this leaderboard</li>
                );
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
                      const scoreString = String(game.score);
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
                      gameNameString.length > 21 &&
                        (gameNameString = gameNameString.slice(0, 16) + "...°");
                      return (
                        <li key={`game-${game.id}`}>
                          <p>
                            <span class={rank.color}>{rank.string}</span>
                            {" ¦ "}
                            <em>{game.year}</em>
                            {" ¦ "}
                            <a href={`/game/public/${game.id}`}>
                              {gameNameString}
                            </a>
                            {" ¦ "}
                            <span class="textGold">{scoreString}</span>
                            {" ¦ "}
                            <span class={title.color}>{title.string}</span>
                            <a
                              href={game.repositoryLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              °Repo Link°
                            </a>
                            {" ¦ "}
                            <em>{game.User.username}</em>
                          </p>
                        </li>
                      );
                    }
                  )}
                </>
              );
            }}
          />
        </ul>
      </div>
    </article>
  );
});

export const head: DocumentHead = {
  title: "Xtreme Xmas Code - Leaderboards",
  meta: [
    {
      name: "description",
      content:
        "Xtreme Xmas Code - an invigorating twist on your favorite advent calendar",
    },
  ],
};
