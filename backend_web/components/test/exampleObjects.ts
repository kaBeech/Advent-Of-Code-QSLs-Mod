export const exampleDay = {
  "id": 1,
  "number": 1,
  "part1Completed": false,
  "part2Completed": false,
  "challengeModifierRerollsUsed": 0,
  "modifierOptionRerollsUsed": 0,
  "challengeModifierId": null,
  "modifierOptionId": null,
  "gameId": 1,
};

export const exampleGame = {
  "id": 1,
  "name": "test game 2",
  "playerName": "Me!",
  "year": 1925,
  "currentDay": 0,
  "currentDayCompleted": false,
  "currentRerollTokens": 7,
  "rerollTokensGained": 7,
  "rerollTokensSpent": 0,
  "repositoryLink": null,
  "progressSheetLink": null,
};

export const exampleGameDay1 = {
  "id": 1,
  "name": "test game 2",
  "playerName": "Me!",
  "year": 1925,
  "currentDay": 1,
  "currentDayCompleted": false,
  "currentRerollTokens": 7,
  "rerollTokensGained": 7,
  "rerollTokensSpent": 0,
  "repositoryLink": null,
  "progressSheetLink": null,
};

export const exampleChallengeModifiers = [
  {
    "id": 1,
    "name": "new_codebase_language",
    "text": "in a programming language not yet used in this codebase",
    "hasOptions": false,
  },
  {
    "id": 2,
    "name": "new_language",
    "text": "in a programming language you've never used before",
    "hasOptions": false,
  },
  {
    "id": 3,
    "name": "quickly",
    "text": "as quickly as you can",
    "hasOptions": false,
  },
  {
    "id": 4,
    "name": "language_box_1",
    "text": "using a random programming language from Language Box 1: ",
    "hasOptions": true,
  },
  {
    "id": 5,
    "name": "language_box_2",
    "text": "using a random programming language from Language Box 2: ",
    "hasOptions": true,
  },
  {
    "id": 6,
    "name": "language_box_3",
    "text": "using a random programming language from Language Box 3: ",
    "hasOptions": true,
  },
  {
    "id": 7,
    "name": "testing",
    "text": "with thorough testing",
    "hasOptions": false,
  },
];

export const exampleModifierOptions = [
  {
    "id": 1,
    "name": "language_box_1_javascript",
    "text": "JavaScript",
    "challengeModifierId": 4,
  },
  {
    "id": 2,
    "name": "language_box_1_typescript",
    "text": "TypeScript",
    "challengeModifierId": 4,
  },
  {
    "id": 3,
    "name": "language_box_1_python",
    "text": "Python",
    "challengeModifierId": 4,
  },
  {
    "id": 4,
    "name": "language_box_1_r",
    "text": "R",
    "challengeModifierId": 4,
  },
  {
    "id": 5,
    "name": "language_box_1_ruby",
    "text": "Ruby",
    "challengeModifierId": 4,
  },
  {
    "id": 6,
    "name": "language_box_1_java",
    "text": "Java",
    "challengeModifierId": 4,
  },
  {
    "id": 7,
    "name": "language_box_1_c",
    "text": "C",
    "challengeModifierId": 4,
  },
  {
    "id": 8,
    "name": "language_box_1_go",
    "text": "Go",
    "challengeModifierId": 4,
  },
  {
    "id": 9,
    "name": "language_box_2_cpp",
    "text": "C++",
    "challengeModifierId": 5,
  },
  {
    "id": 10,
    "name": "language_box_2_rust",
    "text": "Rust",
    "challengeModifierId": 5,
  },
  {
    "id": 11,
    "name": "language_box_2_lisp",
    "text": "Lisp",
    "challengeModifierId": 5,
  },
];
