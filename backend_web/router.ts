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
// import { getGame } from "./routes/game/getGame.ts";
// import { getGames } from "./routes/user/getGames.ts";
import { getUserGamesData } from "./routes/user/getUserGamesData.ts";
import { logOut } from "./routes/user/logOut.ts";
// import { getChallengeModifiers } from "./routes/misc/getChallengeModifiers.ts";
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
import { updateGameRepositoryLink } from "./routes/game/updateGameRepositoryLink.ts";
import deleteTesterGames from "./routes/game/deleteTesterGames.ts";
import { getUserDataSimple } from "./routes/user/getUserDataSimple.ts";
import { getUserGamesListById, getUserNumberOfGamesById } from "./db.ts";
import { getChallengeModifierNames } from "./routes/challenge_modifiers/getChallengeModifierNames.ts";
import { getChallengeModifierData } from "./routes/challenge_modifiers/getChallengeModifierData.ts";
import { getModifierOptionData } from "./routes/modifier_options/getModifierOptionData.ts";
import { getPublicGameSimple } from "./routes/game/getPublicGameSimple.ts";

type AppState = {
  session: Session;
};

export const router = new Router<AppState>();

router
  .get("/", getHelloWorld) // T0
  .put("/user", authenticate, getOrCreateUser) // T0
  .put("/user/username", authenticate, updateUsername) // T0
  .get("/log-in/github", logInWithOAuth) // T0
  .get("/oauth2/callback", getOAuthData) // T0
  .get("/logout", authenticate, logOut) // T0
  .get("/userdata/games", authenticate, getUserGamesData) // T0
  .get("/userdata/simple", authenticate, getUserDataSimple) // T0
  .get("/userdata/numberofgames", authenticate, getUserNumberOfGamesById) // T0
  .get("/userdata/games/list", authenticate, getUserGamesListById) // T0
  .get("/gamedata/:gameNumber", authenticate, getGameData)
  .get("/modifier/names", getChallengeModifierNames) // T0
  .get("/modifier/:id", getChallengeModifierData) // T0
  .get("/modifier-option/:id", getModifierOptionData) // T0
  .get("/leaderboard", getLeaderboardGames) // T0
  .get("/game/public/:id", getPublicGame) // T0
  .get("/game/public/:id/simple", getPublicGameSimple) // T0
  .get("/game/public/:gameId/day/:dayNumber", getPublicDay) // T0
  // .get("/game", authenticate, getGames) // T0
  // .get("/game/:gameNumber", authenticate, getGame) // T0
  .put("/game/:gameNumber", authenticate, startNewGame) // T0
  .put("/game/:gameNumber/public", authenticate, updateGamePublicStatus) // T0
  .put("/game/:gameNumber/name", authenticate, updateGameName) // T0
  .put("/game/:gameNumber/repolink", authenticate, updateGameRepositoryLink) // T0
  .delete("/game/:gameNumber", authenticate, deleteGame) // T0
  .delete("/chester", deleteTesterGames) // N/A
  .get("/game/:gameNumber/day", authenticate, getAllDays)
  .get("/game/:gameNumber/day/:dayNumber", authenticate, getDay)
  .put("/game/:gameNumber/day/:dayNumber", authenticate, startNextDay) // T0
  .put(
    "/game/:gameNumber/day/:dayNumber/roll",
    authenticate,
    rollInitialModifier,
  ) // T0
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/modifier",
    authenticate,
    rerollChallengeModifier,
  ) // T0
  .put(
    "/game/:gameNumber/day/:dayNumber/reroll/option",
    authenticate,
    rerollModifierOption,
  ) // T0
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
