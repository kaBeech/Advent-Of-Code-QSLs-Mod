export interface DayInfo {
  year: number;
  repositoryUrl: string;
  challengeModifier: string;
  challengeModifierExplanatoryUrl: string;
  modifierOption: string;
  modifierOptionExplanatoryUrl: string;
  rerollTokensSpentDuringPart1: number;
  rerollTokensSpentDuringPart2: number;
  currentRerollTokens: number;
  score: number;
  currentDay: number;
  currentDayCompleted: boolean;
  part1Completed: Date | null;
  modifierWhenPart1Completed: string;
  modifierWhenPart1CompletedExplanatoryUrl: string;
  optionWhenPart1Completed: string;
  optionWhenPart1CompletedExplanatoryUrl: string;
  part2Completed: Date | null;
  number: number;
  username: string;
  oauthAvatarUrl: string;
  gameName: string;
  rerollTokensEarned: number;
  gameIsPublic: boolean;
  dateFirstRolled: Date;
  gameId: string;
}

export interface GameInfo {
  id: string;
  name: string;
  year: number;
  score: number;
  currentRerollTokens: number;
  dateCompleted: string | null;
  title: number | null;
  isPublic: boolean;
  repositoryLink: string;
}

export interface LeaderboardGame {
  id: string;
  playerName: string;
  name: string;
  number: number;
  year: number;
  score: number;
  Title: { id: string; name: string; minimumScore: number };
  repositoryLink: string;
  User: { username: string };
}

export interface ChallengeModifier {
  id: number;
  name: string;
  text: string;
  hasOptions: boolean;
  explanatoryUrl?: string;
  ModifierOption: ModifierOption[];
}

export interface ModifierOption {
  id: number;
  name: string;
  text: string;
  challengeModiferId: number;
  explanatoryUrl?: string;
}

export interface UserData {
  Game: {
    name: string;
    number: number;
    year: number;
  }[];
  username: string;
}
