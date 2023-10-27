import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { getAllPublicGamesWithRepositoryLinks } from "../../db.ts";

export const getLeaderboardGames = async (ctx: Context) => {
  const leaderboardGames = await getAllPublicGamesWithRepositoryLinks();
  const leaderboardGamesSorted = leaderboardGames.sort((a, b) =>
    b.score - a.score
  );
  ctx.response.body = leaderboardGamesSorted;
};
