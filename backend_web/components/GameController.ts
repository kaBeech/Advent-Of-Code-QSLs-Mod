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
  completeCurrentDay: () => {
    if (state.game.currentDayCompleted === true) {
      throw new Error(
        `Current day (${state.game.currentDay}) already completed`,
      );
    }
    state.game.currentDayCompleted = true;
    state.game = rerollTokenGainer(state).gainRerollTokens(1);
    return state.game;
  },
});

const rerollTokenGainer = (state: GameControllerState) => ({
  gainRerollTokens: (amount: number) => {
    state.game.currentRerollTokens += amount;
    state.game.rerollTokensGained += amount;
    return state.game;
  },
});

const rerollTokenSpender = (state: GameControllerState) => ({
  spendRerollTokens: (amount: number) => {
    state.game.currentRerollTokens -= amount;
    state.game.rerollTokensSpent += amount;
    return state.game;
  },
});

const nameSetter = (state: GameControllerState) => ({
  setName: (newName: string) => {
    if (newName.length > 24) {
      throw new Error("Name cannot be longer than 24 characters");
    }
    if (newName.length < 1) {
      throw new Error("Name cannot be empty");
    }
    state.game.name = newName;
    return state.game;
  },
});

const playerNameSetter = (state: GameControllerState) => ({
  setPlayerName: (newPlayerName: string) => {
    if (newPlayerName.length > 24) {
      throw new Error("Player name cannot be longer than 24 characters");
    }
    if (newPlayerName.length < 1) {
      throw new Error("Player name cannot be empty");
    }
    state.game.playerName = newPlayerName;
    return state.game;
  },
});

const repositoryLinkSetter = (state: GameControllerState) => ({
  setRepositoryLink: (newRepositoryLink: string) => {
    if (newRepositoryLink.length > 255) {
      throw new Error("Repository link cannot be longer than 255 characters");
    }
    state.game.repositoryLink = newRepositoryLink;
    return state.game;
  },
});

const progressSheetLinkSetter = (state: GameControllerState) => ({
  setProgressSheetLink: (newProgressSheetLink: string) => {
    if (newProgressSheetLink.length > 255) {
      throw new Error(
        "Progress sheet link cannot be longer than 255 characters",
      );
    }
    state.game.progressSheetLink = newProgressSheetLink;
    return state.game;
  },
});
