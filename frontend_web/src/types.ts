export interface DayInfo {
  challengeModifier: string;
  modifierOption: string;
  rerollTokensSpentDuringPart1: number;
  rerollTokensSpentDuringPart2: number;
  currentRerollTokens: number;
  netScore: number;
  currentDay: number;
  currentDayCompleted: boolean;
  part1Completed: Date | null;
  modifierWhenPart1Completed: string;
  optionWhenPart1Completed: string;
  part2Completed: Date | null;
  number: number;
}

export interface GameInfo {
  name: string;
  year: number;
  score: number;
  currentRerollTokens: number;
  dateCompleted: string | null;
  rank: number | null;
}

export interface LeaderboardGame {
  id: string;
  playerName: string;
  name: string;
  number: number;
  year: number;
  score: number;
  Rank: { id: string; name: string; minimumScore: number };
  repositoryLink: string;
}

export interface ChallengeModifier {
  id: string;
  name: string;
  text: string;
  hasOptions: boolean;
  explanatoryUrl?: string;
  ModifierOption: ModifierOption[];
}

export interface ModifierOption {
  id: string;
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
}
