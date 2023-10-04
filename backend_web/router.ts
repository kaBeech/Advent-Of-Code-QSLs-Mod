import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v4.0.5/mod.ts";
import { completePart1 } from "./routes/day/completePart1.ts";
import { completePart2 } from "./routes/day/completePart2.ts";
import { rerollModifierOption } from "./routes/day/rerollModifierOption.ts";
import { rerollChallengeModifier } from "./routes/day/rerollChallengeModifier.ts";
import { rollInitialModifier } from "./routes/day/rollInitialModifier.ts";
import { startNextDay } from "./routes/day/startNextDay.ts";
import { completeCurrentDay } from "./routes/game/completeCurrentDay.ts";
import { authenticate } from "./middleware/authenticate.ts";
import { getDay } from "./routes/day/getDay.ts";
import { getAllDays } from "./routes/game/getAllDays.ts";
import { deleteGame } from "./routes/game/deleteGame.ts";
import { startNewGame } from "./routes/game/startNewGame.ts";
import { getGame } from "./routes/game/getGame.ts";
import { getGames } from "./routes/user/getGames.ts";
import { getUserData } from "./routes/user/getUserData.ts";
import { logOut } from "./routes/user/logOut.ts";
import { getChallengeModifiers } from "./routes/misc/getChallengeModifiers.ts";
import { getHelloWorld } from "./routes/misc/getHelloWorld.ts";
import { getSignupForm } from "./routes/misc/getSignupForm.ts";
import { signUp } from "./routes/misc/signUp.ts";
import { logInWithPassword } from "./routes/user/logInWithPassword.ts";
import { logInWithOAuth } from "./routes/user/logInWithOAuth.ts";
import { getOAuthData } from "./routes/user/getOAuthData.ts";

type AppState = {
  session: Session;
};

export const router = new Router<AppState>();

router
  .get("/", getHelloWorld)
  .get("/sign-up", getSignupForm)
  .post("/sign-up", signUp)
  .post("/log-in", logInWithPassword)
  .get("/login", logInWithOAuth)
  .get("/oauth2/callback", getOAuthData)
  .get("/logout", logOut)
  .get("/userdata", authenticate, getUserData)
  .get("/modifier", getChallengeModifiers)
  .get("/user/:id/game", getGames)
  .get("/user/:id/game/:gameNumber", getGame)
  .post("/game", startNewGame)
  .delete("/game/:gameNumber", deleteGame)
  .get("/game/:gameNumber/day", getAllDays)
  .get("/game/:gameNumber/day/:dayNumber", getDay)
  .put("/game/:gameNumber/day/complete", completeCurrentDay)
  .put("/game/:gameNumber/day/:dayNumber", startNextDay)
  .put("/game/:gameNumber/day/:dayNumber/roll", rollInitialModifier)
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/modifier",
    rerollChallengeModifier,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/option",
    rerollModifierOption,
  )
  .put("/game/:gameNumber/day/:dayNumber/complete/part1", completePart1)
  .put("/game/:gameNumber/day/:dayNumber/complete/part2", completePart2);
