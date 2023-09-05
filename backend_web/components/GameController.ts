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

const nameSetter = (state: GameControllerState) => ({
  setName: (name: string) => {
    state.game.name = name;
    updateGameName(state.game.id, name);
    return state.game;
  },
});

const playerNameSetter = (state: GameControllerState) => ({
  setPlayerName: (playerName: string) => {
    state.game.playerName = playerName;
    updateGamePlayerName(state.game.id, playerName);
    return state.game;
  },
});

const currentRerollTokensAdjuster = (state: GameControllerState) => ({
  adjustCurrentRerollTokens: (amount: number) => {
    state.game.currentRerollTokens += amount;
    updateGameCurrentRerollTokens(
      state.game.id,
      state.game.currentRerollTokens,
    );
    return state.game;
  },
});

const rerollTokensGainedAdjuster = (state: GameControllerState) => ({
  adjustRerollTokensGained: (amount: number) => {
    state.game.rerollTokensGained += amount;
    updateGameRerollTokensGained(state.game.id, state.game.rerollTokensGained);
    return state.game;
  },
});

const rerollTokensSpentAdjuster = (state: GameControllerState) => ({
  adjustRerollTokensSpent: (amount: number) => {
    state.game.rerollTokensSpent += amount;
    updateGameRerollTokensSpent(state.game.id, state.game.rerollTokensSpent);
    return state.game;
  },
});

const repositoryLinkSetter = (state: GameControllerState) => ({
  setRepositoryLink: (repositoryLink: string) => {
    state.game.repositoryLink = repositoryLink;
    updateGameRepositoryLink(state.game.id, repositoryLink);
    return state.game;
  },
});

const progressSheetLinkSetter = (state: GameControllerState) => ({
  setProgressSheetLink: (progressSheetLink: string) => {
    state.game.progressSheetLink = progressSheetLink;
    return state.game;
  },
});

const nextDayStarter = (state: GameControllerState) => ({
  startNextDay: () => {
    if (state.game.currentDay === 25) {
      throw new Error("It's already Christmas (Day 25)!!!");
    }
    if (!state.game.currentDayCompleted) {
      throw new Error(
        `Day ${state.game.currentDay} has not been completed yet`,
      );
    }
    state.game.currentDay += 1;
    updateGameCurrentDay(state.game.id, state.game.currentDay);
    createDay(state.game.id, state.game.currentDay);
    return state.game;
  },
});

const currentDayCompleter = (state: GameControllerState) => ({
  completeCurrentDay: () => {
    if (state.game.currentDayCompleted === true) {
      throw new Error(
        `Current day (${state.game.currentDay}) already completed`,
      );
    }
    state.game.currentDayCompleted = true;
    updateGameCurrentDayCompletionStatus(
      state.game.id,
      true,
    );
    return state.game;
  },
});

const GameController = (
  game: Game,
) => {
  const state = {
    game,
  };

  return {
    ...nameSetter(state),
    ...playerNameSetter(state),
    ...currentRerollTokensAdjuster(state),
    ...rerollTokensGainedAdjuster(state),
    ...rerollTokensSpentAdjuster(state),
    ...repositoryLinkSetter(state),
    ...progressSheetLinkSetter(state),
    ...nextDayStarter(state),
    ...currentDayCompleter(state),
  };
};

export { GameController };
