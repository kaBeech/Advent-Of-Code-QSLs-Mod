export interface DayInfo {
  challengeModifier: string;
  modifierOption: string;
  rerollTokensSpentDuringPart1: number;
  rerollTokensSpentDuringPart2: number;
  currentRerollTokens: number;
  score: number;
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
  title: number | null;
  isPublic: boolean;
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
