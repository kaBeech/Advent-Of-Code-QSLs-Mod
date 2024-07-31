import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getLeaderboardGamesAll } from "../../db/db.ts";

export const getLeaderboardGames = async (ctx: Context) => {
  const leaderboardGames = await getLeaderboardGamesAll();
  const leaderboardGamesSorted = leaderboardGames.sort((a, b) =>
    b.score - a.score
  );
  ctx.response.body = leaderboardGamesSorted;
};
