import { createGame, getUserById, updateUser } from "../../db.ts";

export const startNewGame = async (ctx: any) => {
  const userId = ctx.state.session.get("userId") as string;
  const user = await getUserById(userId);
  const { name, year, playerName } = await ctx.request
    .body({
      type: "json",
    })
    .value;
  user!.numberOfGames++;
  await updateUser(user!);
  ctx.response.body = await createGame(
    userId,
    user!.numberOfGames,
    name,
    year,
    playerName,
  );
};
