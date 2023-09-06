import { getAllChallengeModifiers, getAllModifierOptions } from "../../db.ts";

export const exampleDay = {
  "id": 1,
  "number": 1,
  "part1Completed": false,
  "part2Completed": false,
  "challengeModifierRerollsUsed": 0,
  "modifierOptionRerollsUsed": 0,
  "challengeModifierId": null,
  "modifierOptionId": null,
  "gameId": 1,
};

export const exampleGame = {
  "id": 1,
  "name": "test game 2",
  "playerName": "Me!",
  "year": 1925,
  "currentDay": 0,
  "currentDayCompleted": false,
  "currentRerollTokens": 7,
  "rerollTokensGained": 7,
  "rerollTokensSpent": 0,
  "repositoryLink": null,
  "progressSheetLink": null,
};

export const exampleChallengeModifiers = await getAllChallengeModifiers();

export const exampleModifierOptions = await getAllModifierOptions();
