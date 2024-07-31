import {
  createUser,
  deleteUser,
  getUserById,
  getUserBySerializedId,
  getUserByUsername,
  getUserDataSimpleById,
  getUserGameDataById,
  getUserGameDayDataByIdGameNumberAndDayNumber,
  getUserGamesListById,
  getUserIdById,
  getUserNumberOfGamesById,
  updateUser,
  updateUserName,
  updateUserOAuthInfo,
  upsertUser
} from "./users/user.ts";

import {
  createGame,
  deleteGameById,
  deleteGamesByTesterId,
  getGameById,
  getGameByUserIdAndGameNumber,
  getGameDataByUserIdAndGameNumber,
  getGamesByUserId,
  getLeaderboardGamesQuery,
  getPublicGameById,
  getPublicGameSimpleById,
  updateGame
} from "./games/games.ts";

import {
  createDay,
  getDayById,
  getDayByUserIdGameNumberAndDayNumber,
  getDayIdByGameIdAndDayNumber,
  getPublicDayByGameIdAndNumber,
  updateDay
} from "./days/day.ts";

import {
  getAllChallengeModifierNames,
  getAllChallengeModifiers,
  getChallengeModifierDataById
} from "./challengeModifiers/challengeModifier.ts";

import {
  getAllModifierOptions,
  getModifierOptionDataById,
  getModifierOptionsByChallengeModifierId
} from "./modifierOptions/modifierOption.ts";

import {
  getAllTitles
} from "./titles/title.ts";

export {
  // User CRUD
  createUser,
  upsertUser,
  getUserByUsername,
  getUserIdById,
  getUserById,
  getUserBySerializedId,
  getUserDataSimpleById,
  getUserNumberOfGamesById,
  getUserGamesListById,
  getUserGameDataById,
  getUserGameDayDataByIdGameNumberAndDayNumber,
  updateUser,
  updateUserName,
  updateUserOAuthInfo,
  deleteUser,

  // Game CRUD
  createGame,
  getLeaderboardGamesQuery,
  getGameById,
  getPublicGameSimpleById,
  getPublicGameById,
  getGameDataByUserIdAndGameNumber,
  getGamesByUserId,
  getGameByUserIdAndGameNumber,
  updateGame,
  deleteGameById,
  deleteGamesByTesterId,

  // Day CRUD
  createDay,
  getDayById,
  getDayByUserIdGameNumberAndDayNumber,
  getDayIdByGameIdAndDayNumber,
  getPublicDayByGameIdAndNumber,
  updateDay,

  // Challenge Modifier CRUD
  getAllChallengeModifiers,
  getAllChallengeModifierNames,
  getChallengeModifierDataById,

  //Modifier Options CRUD
  getAllModifierOptions,
  getModifierOptionsByChallengeModifierId,
  getModifierOptionDataById,

  // Title CRUD
  getAllTitles
}
