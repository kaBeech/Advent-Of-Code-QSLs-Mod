import {
  updateGameCurrentDayCompletionStatus,
  updateGameCurrentRerollTokens,
  updateGameName,
  updateGamePlayerName,
  updateGameProgressSheetLink,
  updateGameRepositoryLink,
  updateGameRerollTokensGained,
  updateGameRerollTokensSpent,
} from "../db.ts";
import { Game } from "../generated/client/deno/index.d.ts";

interface GameControllerState {
  game: Game;
}

export const GameController = (
  game: Game,
) => {
  const state = {
    game,
  };

  return {
    ...nextDayStarter(state),
    ...currentDayCompleter(state),
    ...rerollTokenGainer(state),
    ...rerollTokenSpender(state),
    ...nameSetter(state),
    ...playerNameSetter(state),
    ...repositoryLinkSetter(state),
    ...progressSheetLinkSetter(state),
  };
};

const nextDayStarter = (state: GameControllerState) => ({
  startNextDay: () => {
    if (state.game.currentDay === 25) {
      throw new Error("It's already Christmas (Day 25)!!!");
    }
    if (state.game.currentDay !== 0 && !state.game.currentDayCompleted) {
      throw new Error(
        `Day ${state.game.currentDay} has not been completed yet`,
      );
    }
    state.game.currentDay += 1;
    state.game.currentDayCompleted = false;
    return state.game;
  },
});

const currentDayCompleter = (state: GameControllerState) => ({
  completeCurrentDay: async () => {
    if (state.game.currentDayCompleted === true) {
      throw new Error(
        `Current day (${state.game.currentDay}) already completed`,
      );
    }
    state.game.currentDayCompleted = true;
    await updateGameCurrentDayCompletionStatus(
      state.game.id,
      true,
    );
    return state.game;
  },
});

const currentRerollTokensAdjuster = (state: GameControllerState) => ({
  adjustCurrentRerollTokens: async (amount: number) => {
    state.game.currentRerollTokens += amount;
    await updateGameCurrentRerollTokens(
      state.game.id,
      state.game.currentRerollTokens,
    );
    return state.game;
  },
});

const rerollTokenGainer = (state: GameControllerState) => ({
  gainRerollTokens: (amount: number) => {
    state.game.currentRerollTokens += amount;
    state.game.rerollTokensGained += amount;
    // await updateGameRerollTokensGained(
    //   state.game.id,
    //   state.game.rerollTokensGained,
    // );
    return state.game;
  },
});

const rerollTokenSpender = (state: GameControllerState) => ({
  spendRerollTokens: async (amount: number) => {
    state.game.currentRerollTokens -= amount;
    state.game.rerollTokensSpent += amount;
    await updateGameRerollTokensSpent(
      state.game.id,
      state.game.rerollTokensSpent,
    );
    return state.game;
  },
});

const nameSetter = (state: GameControllerState) => ({
  setName: async (newName: string) => {
    if (newName.length > 24) {
      throw new Error("Name cannot be longer than 24 characters");
    }
    if (newName.length < 1) {
      throw new Error("Name cannot be empty");
    }
    state.game.name = newName;
    await updateGameName(state.game.id, newName);
    return state.game;
  },
});

const playerNameSetter = (state: GameControllerState) => ({
  setPlayerName: async (newPlayerName: string) => {
    if (newPlayerName.length > 24) {
      throw new Error("Player name cannot be longer than 24 characters");
    }
    if (newPlayerName.length < 1) {
      throw new Error("Player name cannot be empty");
    }
    state.game.playerName = newPlayerName;
    await updateGamePlayerName(state.game.id, newPlayerName);
    return state.game;
  },
});

const repositoryLinkSetter = (state: GameControllerState) => ({
  setRepositoryLink: async (newRepositoryLink: string) => {
    if (newRepositoryLink.length > 255) {
      throw new Error("Repository link cannot be longer than 255 characters");
    }
    state.game.repositoryLink = newRepositoryLink;
    await updateGameRepositoryLink(state.game.id, newRepositoryLink);
    return state.game;
  },
});

const progressSheetLinkSetter = (state: GameControllerState) => ({
  setProgressSheetLink: async (newProgressSheetLink: string) => {
    if (newProgressSheetLink.length > 255) {
      throw new Error(
        "Progress sheet link cannot be longer than 255 characters",
      );
    }
    state.game.progressSheetLink = newProgressSheetLink;
    await updateGameProgressSheetLink(state.game.id, newProgressSheetLink);
    return state.game;
  },
});
