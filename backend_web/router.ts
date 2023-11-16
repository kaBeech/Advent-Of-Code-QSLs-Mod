import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions@v4.0.5/mod.ts";
import { authenticate } from "./middleware/authenticate.ts";
import { completePart1 } from "./routes/day/completePart1.ts";
import { completePart2 } from "./routes/day/completePart2.ts";
import { rerollModifierOption } from "./routes/day/rerollModifierOption.ts";
import { rerollChallengeModifier } from "./routes/day/rerollChallengeModifier.ts";
import { rollInitialModifier } from "./routes/day/rollInitialModifier.ts";
import { startNextDay } from "./routes/day/startNextDay.ts";
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
import { logInWithOAuth } from "./routes/user/logInWithOAuth.ts";
import { getOAuthData } from "./routes/user/getOAuthData.ts";
import { getOrCreateUser } from "./routes/user/getOrCreateUser.ts";
import { getGameData } from "./routes/game/getGameData.ts";
import { getLeaderboardGames } from "./routes/leaderboard/getLeaderboardGames.ts";
import { getPublicGame } from "./routes/game/getPublicGame.ts";
import { getPublicDay } from "./routes/day/getPublicDay.ts";
import { removeChallengeModifier } from "./routes/day/removeChallengeModifier.ts";
import { updateUsername } from "./routes/user/updateUsername.ts";
import { updateGamePublicStatus } from "./routes/game/updateGamePublicStatus.ts";
import { updateGameName } from "./routes/game/updateGameName.ts";

type AppState = {
  session: Session;
};

export const router = new Router<AppState>();

router
  .get("/", getHelloWorld)
  .put("/user", authenticate, getOrCreateUser)
  .put("/user/username", authenticate, updateUsername)
  .get("/log-in/github", logInWithOAuth)
  .get("/oauth2/callback", getOAuthData)
  .get("/logout", authenticate, logOut)
  .get("/userdata", authenticate, getUserData)
  .get("/gamedata/:gameNumber", authenticate, getGameData)
  .get("/modifier", getChallengeModifiers)
  .get("/leaderboard", getLeaderboardGames)
  .get("/game/public/:id", getPublicGame)
  .get("/game/public/:gameId/day/:dayNumber", getPublicDay)
  .get("/game", authenticate, getGames)
  .get("/game/:gameNumber", authenticate, getGame)
  .put("/game/:gameNumber", authenticate, startNewGame)
  .put("/game/:gameNumber/public", authenticate, updateGamePublicStatus)
  .put("/game/:gameNumber/name", authenticate, updateGameName)
  .delete("/game/:gameNumber", authenticate, deleteGame)
  .get("/game/:gameNumber/day", authenticate, getAllDays)
  .get("/game/:gameNumber/day/:dayNumber", authenticate, getDay)
  .put("/game/:gameNumber/day/:dayNumber", authenticate, startNextDay)
  .put(
    "/game/:gameNumber/day/:dayNumber/roll",
    authenticate,
    rollInitialModifier,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/modifier",
    authenticate,
    rerollChallengeModifier,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/option",
    authenticate,
    rerollModifierOption,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/removeChallengeModifier",
    authenticate,
    removeChallengeModifier,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/complete/part1",
    authenticate,
    completePart1,
  )
  .put(
    "/game/:gameNumber/day/:dayNumber/complete/part2",
    authenticate,
    completePart2,
  );
