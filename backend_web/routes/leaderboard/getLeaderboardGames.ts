import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getLeaderboardGamesQuery } from "../../db.ts";

export const getLeaderboardGames = async (ctx: Context) => {
  const leaderboardGames = await getLeaderboardGamesQuery();
  const leaderboardGamesSorted = leaderboardGames.sort((a, b) =>
    b.score - a.score
  );
  ctx.response.body = leaderboardGamesSorted;
};
