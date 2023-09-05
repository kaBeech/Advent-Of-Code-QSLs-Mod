import {
  createDay,
  updateGameCurrentDay,
  updateGameCurrentDayCompletionStatus,
  updateGameCurrentRerollTokens,
  updateGameName,
  updateGamePlayerName,
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
    ...currentRerollTokensAdjuster(state),
    ...rerollTokensGainedAdjuster(state),
    ...rerollTokensSpentAdjuster(state),
    ...nameSetter(state),
    ...playerNameSetter(state),
    ...repositoryLinkSetter(state),
    ...progressSheetLinkSetter(state),
  };
};

const nextDayStarter = (state: GameControllerState) => ({
  startNextDay: async () => {
    if (state.game.currentDay === 25) {
      throw new Error("It's already Christmas (Day 25)!!!");
    }
    if (state.game.currentDay !== 0 || !state.game.currentDayCompleted) {
      throw new Error(
        `Day ${state.game.currentDay} has not been completed yet`,
      );
    }
    state.game.currentDay += 1;
    await updateGameCurrentDay(state.game.id, state.game.currentDay);
    await createDay(state.game.id, state.game.currentDay);
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

const rerollTokensGainedAdjuster = (state: GameControllerState) => ({
  adjustRerollTokensGained: async (amount: number) => {
    state.game.rerollTokensGained += amount;
    await updateGameRerollTokensGained(
      state.game.id,
      state.game.rerollTokensGained,
    );
    return state.game;
  },
});

const rerollTokensSpentAdjuster = (state: GameControllerState) => ({
  adjustRerollTokensSpent: async (amount: number) => {
    state.game.rerollTokensSpent += amount;
    await updateGameRerollTokensSpent(
      state.game.id,
      state.game.rerollTokensSpent,
    );
    return state.game;
  },
});

const nameSetter = (state: GameControllerState) => ({
  setName: async (name: string) => {
    state.game.name = name;
    await updateGameName(state.game.id, name);
    return state.game;
  },
});

const playerNameSetter = (state: GameControllerState) => ({
  setPlayerName: async (playerName: string) => {
    state.game.playerName = playerName;
    await updateGamePlayerName(state.game.id, playerName);
    return state.game;
  },
});

const repositoryLinkSetter = (state: GameControllerState) => ({
  setRepositoryLink: async (repositoryLink: string) => {
    state.game.repositoryLink = repositoryLink;
    await updateGameRepositoryLink(state.game.id, repositoryLink);
    return state.game;
  },
});

const progressSheetLinkSetter = (state: GameControllerState) => ({
  setProgressSheetLink: (progressSheetLink: string) => {
    state.game.progressSheetLink = progressSheetLink;
    return state.game;
  },
});
