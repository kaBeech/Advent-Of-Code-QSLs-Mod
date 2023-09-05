import {
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
  };
};

export { GameController };
