import {
  Context,
  FormDataReader,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { GameController } from "../../components/GameController.ts";
import {
  createDay,
  createGame,
  getUserById,
  updateGame,
  updateUser,
} from "../../db.ts";

export const startNewGame = async (ctx: Context) => {
  const userId = ctx.state.session.get("userId") as string;
  const user = await getUserById(userId);
  const body: FormDataReader = ctx.request.body({ type: "form-data" }).value;
  const bodyData = await body.read();
  user!.numberOfGames++;
  await updateUser(user!);
  const game = await createGame(
    userId,
    user!.numberOfGames,
    bodyData.fields.name,
    +bodyData.fields.year,
    bodyData.fields.playerName,
  );
  const updatedGame = GameController(game!).startNextDay();
  const _nextDay = await createDay(
    updatedGame.userId,
    updatedGame.id,
    updatedGame.number,
    updatedGame.currentDay,
  );
  await updateGame(updatedGame);
  ctx.response.body = updatedGame;
};
