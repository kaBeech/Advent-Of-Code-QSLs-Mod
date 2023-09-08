import { User } from "../generated/client/deno/edge.ts";

interface UserControllerState {
  user: User;
}

export const UserController = (
  user: User,
) => {
  const state = {
    user,
  };

  return {
    ...numberOfGamesAdjuster(state),
  };
};

const numberOfGamesAdjuster = (state: UserControllerState) => ({
  adjustNumberOfGames: (amount: number) => {
    state.user.numberOfGames += amount;
    return state.user;
  },
});
