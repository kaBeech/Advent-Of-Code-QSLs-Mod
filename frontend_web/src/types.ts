export interface DayInfo {
  numberOfGames: string;
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
}

export interface GameInfo {
  name: string;
  year: number;
  score: number;
  currentRerollTokens: number;
  dateCompleted: string | null;
  rank: number | null;
}

export interface UserData {
  Game: {
    name: string;
    number: number;
    year: number;
  }[];
}
