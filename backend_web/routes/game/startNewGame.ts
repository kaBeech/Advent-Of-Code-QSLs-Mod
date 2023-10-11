import {
  Context,
  FormDataReader,
} from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { createGame, getUserById, updateUser } from "../../db.ts";

export const startNewGame = async (ctx: Context) => {
  const userId = ctx.state.session.get("userId") as string;
  const user = await getUserById(userId);
  const body: FormDataReader = ctx.request.body({ type: "form-data" }).value;
  const bodyData = await body.read();
  user!.numberOfGames++;
  await updateUser(user!);
  ctx.response.body = await createGame(
    userId,
    user!.numberOfGames,
    bodyData.fields.name,
    +bodyData.fields.year,
    bodyData.fields.playerName,
  );
};
