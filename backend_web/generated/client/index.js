
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  serializedId: 'serializedId',
  username: 'username',
  dateCreated: 'dateCreated',
  numberOfGames: 'numberOfGames'
};

exports.Prisma.PublicProfileScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  name: 'name',
  userId: 'userId'
};

exports.Prisma.GameScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  userId: 'userId',
  number: 'number',
  year: 'year',
  name: 'name',
  playerName: 'playerName',
  currentDay: 'currentDay',
  currentDayCompleted: 'currentDayCompleted',
  currentRerollTokens: 'currentRerollTokens',
  rerollTokensSpent: 'rerollTokensSpent',
  rerollTokensSpentDuringPart2Raw: 'rerollTokensSpentDuringPart2Raw',
  rerollTokensSpentDuringPart2Limited: 'rerollTokensSpentDuringPart2Limited',
  repositoryLink: 'repositoryLink',
  progressSheetLink: 'progressSheetLink',
  isPublic: 'isPublic',
  publicProfileId: 'publicProfileId',
  score: 'score',
  rankId: 'rankId',
  dateCompleted: 'dateCompleted'
};

exports.Prisma.RankScalarFieldEnum = {
  id: 'id',
  name: 'name',
  minimumScore: 'minimumScore'
};

exports.Prisma.DayScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  gameId: 'gameId',
  userId: 'userId',
  gameNumber: 'gameNumber',
  number: 'number',
  challengeModifierId: 'challengeModifierId',
  modifierOptionId: 'modifierOptionId',
  dateFirstRolled: 'dateFirstRolled',
  part1Completed: 'part1Completed',
  modifierWhenPart1CompletedId: 'modifierWhenPart1CompletedId',
  optionWhenPart1CompletedId: 'optionWhenPart1CompletedId',
  part2Completed: 'part2Completed',
  challengeModifierRerollsUsed: 'challengeModifierRerollsUsed',
  modifierOptionRerollsUsed: 'modifierOptionRerollsUsed',
  rerollTokensSpentDuringPart2: 'rerollTokensSpentDuringPart2',
  netScore: 'netScore'
};

exports.Prisma.ChallengeModifierScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  name: 'name',
  text: 'text',
  hasOptions: 'hasOptions',
  explanatoryUrl: 'explanatoryUrl',
  standard: 'standard',
  createdById: 'createdById',
  isPublic: 'isPublic'
};

exports.Prisma.ModifierOptionScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  challengeModifierId: 'challengeModifierId',
  name: 'name',
  text: 'text',
  explanatoryUrl: 'explanatoryUrl',
  standard: 'standard',
  createdById: 'createdById',
  isPublic: 'isPublic'
};

exports.Prisma.ModifierPackScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  createdById: 'createdById',
  isPublic: 'isPublic'
};

exports.Prisma.UpvoteScalarFieldEnum = {
  id: 'id',
  note: 'note',
  dateCreated: 'dateCreated',
  gameId: 'gameId',
  createdById: 'createdById'
};

exports.Prisma.DownvoteScalarFieldEnum = {
  id: 'id',
  note: 'note',
  dateCreated: 'dateCreated',
  gameId: 'gameId',
  createdById: 'createdById'
};

exports.Prisma.TestTableScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  name: 'name',
  favoriteColor: 'favoriteColor'
};

exports.Prisma.TestChairScalarFieldEnum = {
  id: 'id',
  dateCreated: 'dateCreated',
  name: 'name',
  favoriteColor: 'favoriteColor',
  tableId: 'tableId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  PublicProfile: 'PublicProfile',
  Game: 'Game',
  Rank: 'Rank',
  Day: 'Day',
  ChallengeModifier: 'ChallengeModifier',
  ModifierOption: 'ModifierOption',
  ModifierPack: 'ModifierPack',
  Upvote: 'Upvote',
  Downvote: 'Downvote',
  TestTable: 'TestTable',
  TestChair: 'TestChair'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/qsl/repos/advent-of-code/xtreme-xmas-code/backend_web/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX0RCX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZAogIHNlcmlhbGl6ZWRJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgIEB1bmlxdWUKICB1c2VybmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICBAdW5pcXVlCiAgZGF0ZUNyZWF0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgbnVtYmVyT2ZHYW1lcyAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBHYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVtdCiAgUHVibGljUHJvZmlsZSAgICAgICAgICAgICAgICAgICAgICAgICAgIFB1YmxpY1Byb2ZpbGVbXQogIENoYWxsZW5nZU1vZGlmaWVyICAgICAgICAgICAgICAgICAgICAgICBDaGFsbGVuZ2VNb2RpZmllcltdCiAgTW9kaWZpZXJPcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyT3B0aW9uW10KICBEZWZhdWx0RXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMgICAgICAgQ2hhbGxlbmdlTW9kaWZpZXJbXSBAcmVsYXRpb24obmFtZTogIkRlZmF1bHRFeGNsdWRlZENoYWxsZW5nZU1vZGlmaWVycyIpCiAgRGVmYXVsdEV4Y2x1ZGVkTW9kaWZpZXJPcHRpb25zICAgICAgICAgIE1vZGlmaWVyT3B0aW9uW10gICAgQHJlbGF0aW9uKG5hbWU6ICJEZWZhdWx0RXhjbHVkZWRNb2RpZmllck9wdGlvbnMiKQogIERlZmF1bHRJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyBDaGFsbGVuZ2VNb2RpZmllcltdIEByZWxhdGlvbihuYW1lOiAiRGVmYXVsdEluY2x1ZGVkQ3VzdG9tQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBEZWZhdWx0SW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMgICAgTW9kaWZpZXJPcHRpb25bXSAgICBAcmVsYXRpb24obmFtZTogIkRlZmF1bHRJbmNsdWRlZEN1c3RvbU1vZGlmaWVyT3B0aW9ucyIpCiAgTW9kaWZpZXJQYWNrICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyUGFja1tdCiAgRG93bnZvdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd252b3RlW10KICBVcHZvdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXB2b3RlW10KfQoKbW9kZWwgUHVibGljUHJvZmlsZSB7CiAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlQ3JlYXRlZCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkKICBuYW1lICAgICAgICBTdHJpbmcKICB1c2VySWQgICAgICBTdHJpbmcKICBVc2VyICAgICAgICBVc2VyICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBHYW1lICAgICAgICBHYW1lW10KfQoKbW9kZWwgR2FtZSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlQ3JlYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICBAZGVmYXVsdChub3coKSkKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQKICB5ZWFyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQKICBuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBwbGF5ZXJOYW1lICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgY3VycmVudERheSAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBjdXJyZW50RGF5Q29tcGxldGVkICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjdXJyZW50UmVyb2xsVG9rZW5zICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAZGVmYXVsdCgxMikKICByZXJvbGxUb2tlbnNTcGVudCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHJlcm9sbFRva2Vuc1NwZW50RHVyaW5nUGFydDJSYXcgICAgIEludCAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgcmVyb2xsVG9rZW5zU3BlbnREdXJpbmdQYXJ0MkxpbWl0ZWQgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICByZXBvc2l0b3J5TGluayAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgcHJvZ3Jlc3NTaGVldExpbmsgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgQGRlZmF1bHQoIi9nYW1lL3B1YmxpYy8ke2lkfSIpCiAgaXNQdWJsaWMgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgcHVibGljUHJvZmlsZUlkICAgICAgICAgICAgICAgICAgICAgSW50PwogIHNjb3JlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgcmFua0lkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50PwogIGRhdGVDb21wbGV0ZWQgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIFVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFJhbmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhbms/ICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtyYW5rSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIERheSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERheVtdCiAgUHVibGljUHJvZmlsZSAgICAgICAgICAgICAgICAgICAgICAgUHVibGljUHJvZmlsZT8gQHJlbGF0aW9uKGZpZWxkczogW3B1YmxpY1Byb2ZpbGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgVXB2b3RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXB2b3RlW10KICBEb3dudm90ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dudm90ZVtdCn0KCm1vZGVsIFJhbmsgewogIGlkICAgICAgICAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICAgICAgU3RyaW5nIEB1bmlxdWUKICBtaW5pbXVtU2NvcmUgSW50CiAgR2FtZSAgICAgICAgIEdhbWVbXQp9Cgptb2RlbCBEYXkgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlQ3JlYXRlZCAgICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGdhbWVJZCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIHVzZXJJZCAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIGdhbWVOdW1iZXIgICAgICAgICAgICAgICAgICAgICAgIEludAogIG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIGNoYWxsZW5nZU1vZGlmaWVySWQgICAgICAgICAgICAgIEludD8KICBtb2RpZmllck9wdGlvbklkICAgICAgICAgICAgICAgICBJbnQ/CiAgZGF0ZUZpcnN0Um9sbGVkICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgcGFydDFDb21wbGV0ZWQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgbW9kaWZpZXJXaGVuUGFydDFDb21wbGV0ZWRJZCAgICAgSW50PwogIG9wdGlvbldoZW5QYXJ0MUNvbXBsZXRlZElkICAgICAgIEludD8KICBwYXJ0MkNvbXBsZXRlZCAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8KICBjaGFsbGVuZ2VNb2RpZmllclJlcm9sbHNVc2VkICAgICBJbnQgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgbW9kaWZpZXJPcHRpb25SZXJvbGxzVXNlZCAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHJlcm9sbFRva2Vuc1NwZW50RHVyaW5nUGFydDIgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBuZXRTY29yZSAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgRXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMgICAgICAgQ2hhbGxlbmdlTW9kaWZpZXJbXSBAcmVsYXRpb24obmFtZTogIkV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyAgICAgICAgICBNb2RpZmllck9wdGlvbltdICAgIEByZWxhdGlvbihuYW1lOiAiRXhjbHVkZWRNb2RpZmllck9wdGlvbnMiKQogIEluY2x1ZGVkQ3VzdG9tQ2hhbGxlbmdlTW9kaWZpZXJzIENoYWxsZW5nZU1vZGlmaWVyW10gQHJlbGF0aW9uKG5hbWU6ICJJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCiAgSW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMgICAgTW9kaWZpZXJPcHRpb25bXSAgICBAcmVsYXRpb24obmFtZTogIkluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zIikKICBHYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtnYW1lSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIE1vZGlmaWVyV2hlblBhcnQxQ29tcGxldGVkICAgICAgIENoYWxsZW5nZU1vZGlmaWVyPyAgQHJlbGF0aW9uKG5hbWU6ICJNb2RpZmllcldoZW5QYXJ0MUNvbXBsZXRlZCIsIGZpZWxkczogW21vZGlmaWVyV2hlblBhcnQxQ29tcGxldGVkSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIE9wdGlvbldoZW5QYXJ0MUNvbXBsZXRlZCAgICAgICAgIE1vZGlmaWVyT3B0aW9uPyAgICAgQHJlbGF0aW9uKG5hbWU6ICJPcHRpb25XaGVuUGFydDFDb21wbGV0ZWQiLCBmaWVsZHM6IFtvcHRpb25XaGVuUGFydDFDb21wbGV0ZWRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQ2hhbGxlbmdlTW9kaWZpZXIgICAgICAgICAgICAgICAgQ2hhbGxlbmdlTW9kaWZpZXI/ICBAcmVsYXRpb24oZmllbGRzOiBbY2hhbGxlbmdlTW9kaWZpZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgTW9kaWZpZXJPcHRpb24gICAgICAgICAgICAgICAgICAgTW9kaWZpZXJPcHRpb24/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kaWZpZXJPcHRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIENoYWxsZW5nZU1vZGlmaWVyIHsKICBpZCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICBAZGVmYXVsdChub3coKSkKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEB1bmlxdWUKICB0ZXh0ICAgICAgICAgICAgICAgICBTdHJpbmcKICBoYXNPcHRpb25zICAgICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGV4cGxhbmF0b3J5VXJsICAgICAgIFN0cmluZz8KICBzdGFuZGFyZCAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRCeUlkICAgICAgICAgIFN0cmluZz8KICBpc1B1YmxpYyAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIENyZWF0ZWRCeSAgICAgICAgICAgIFVzZXI/ICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBNb2RpZmllck9wdGlvbiAgICAgICBNb2RpZmllck9wdGlvbltdCiAgRGF5ICAgICAgICAgICAgICAgICAgRGF5W10KICBNb2RpZmllclBhY2tFeGNsdWRlZCBNb2RpZmllclBhY2tbXSAgIEByZWxhdGlvbihuYW1lOiAiRXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMiKQogIE1vZGlmaWVyUGFja0luY2x1ZGVkIE1vZGlmaWVyUGFja1tdICAgQHJlbGF0aW9uKG5hbWU6ICJJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCiAgVXNlckV4Y2x1ZGVkICAgICAgICAgVXNlcltdICAgICAgICAgICBAcmVsYXRpb24obmFtZTogIkRlZmF1bHRFeGNsdWRlZENoYWxsZW5nZU1vZGlmaWVycyIpCiAgVXNlckluY2x1ZGVkICAgICAgICAgVXNlcltdICAgICAgICAgICBAcmVsYXRpb24obmFtZTogIkRlZmF1bHRJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCiAgRXhjbHVkZWRGcm9tRGF5ICAgICAgRGF5W10gICAgICAgICAgICBAcmVsYXRpb24obmFtZTogIkV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBJbmNsdWRlZEluRGF5ICAgICAgICBEYXlbXSAgICAgICAgICAgIEByZWxhdGlvbihuYW1lOiAiSW5jbHVkZWRDdXN0b21DaGFsbGVuZ2VNb2RpZmllcnMiKQogIERheUNvbXBsZXRlZEluUGFydDEgIERheVtdICAgICAgICAgICAgQHJlbGF0aW9uKG5hbWU6ICJNb2RpZmllcldoZW5QYXJ0MUNvbXBsZXRlZCIpCn0KCm1vZGVsIE1vZGlmaWVyT3B0aW9uIHsKICBpZCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkICAgICAgICAgIERhdGVUaW1lICAgICAgICAgIEBkZWZhdWx0KG5vdygpKQogIGNoYWxsZW5nZU1vZGlmaWVySWQgIEludAogIG5hbWUgICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgIEB1bmlxdWUKICB0ZXh0ICAgICAgICAgICAgICAgICBTdHJpbmcKICBleHBsYW5hdG9yeVVybCAgICAgICBTdHJpbmc/CiAgc3RhbmRhcmQgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEJ5SWQgICAgICAgICAgU3RyaW5nPwogIGlzUHVibGljICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIENoYWxsZW5nZU1vZGlmaWVyICAgIENoYWxsZW5nZU1vZGlmaWVyIEByZWxhdGlvbihmaWVsZHM6IFtjaGFsbGVuZ2VNb2RpZmllcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBDcmVhdGVkQnkgICAgICAgICAgICBVc2VyPyAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIERheSAgICAgICAgICAgICAgICAgIERheVtdCiAgTW9kaWZpZXJQYWNrRXhjbHVkZWQgTW9kaWZpZXJQYWNrW10gICAgQHJlbGF0aW9uKG5hbWU6ICJFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyIpCiAgTW9kaWZpZXJQYWNrSW5jbHVkZWQgTW9kaWZpZXJQYWNrW10gICAgQHJlbGF0aW9uKG5hbWU6ICJJbmNsdWRlZEN1c3RvbU1vZGlmaWVyT3B0aW9ucyIpCiAgVXNlckV4Y2x1ZGVkICAgICAgICAgVXNlcltdICAgICAgICAgICAgQHJlbGF0aW9uKG5hbWU6ICJEZWZhdWx0RXhjbHVkZWRNb2RpZmllck9wdGlvbnMiKQogIFVzZXJJbmNsdWRlZCAgICAgICAgIFVzZXJbXSAgICAgICAgICAgIEByZWxhdGlvbihuYW1lOiAiRGVmYXVsdEluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zIikKICBFeGNsdWRlZEZyb21EYXkgICAgICBEYXlbXSAgICAgICAgICAgICBAcmVsYXRpb24obmFtZTogIkV4Y2x1ZGVkTW9kaWZpZXJPcHRpb25zIikKICBJbmNsdWRlZEluRGF5ICAgICAgICBEYXlbXSAgICAgICAgICAgICBAcmVsYXRpb24obmFtZTogIkluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zIikKICBEYXlDb21wbGV0ZWRJblBhcnQxICBEYXlbXSAgICAgICAgICAgICBAcmVsYXRpb24obmFtZTogIk9wdGlvbldoZW5QYXJ0MUNvbXBsZXRlZCIpCn0KCm1vZGVsIE1vZGlmaWVyUGFjayB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY3JlYXRlZEJ5SWQgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGlzUHVibGljICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgRXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMgICAgICAgQ2hhbGxlbmdlTW9kaWZpZXJbXSBAcmVsYXRpb24obmFtZTogIkV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzIikKICBFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyAgICAgICAgICBNb2RpZmllck9wdGlvbltdICAgIEByZWxhdGlvbihuYW1lOiAiRXhjbHVkZWRNb2RpZmllck9wdGlvbnMiKQogIEVuY2x1ZGVkQ3VzdG9tQ2hhbGxlbmdlTW9kaWZpZXJzIENoYWxsZW5nZU1vZGlmaWVyW10gQHJlbGF0aW9uKG5hbWU6ICJJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCiAgSW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMgICAgTW9kaWZpZXJPcHRpb25bXSAgICBAcmVsYXRpb24obmFtZTogIkluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zIikKICBDcmVhdGVkQnkgICAgICAgICAgICAgICAgICAgICAgICBVc2VyPyAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCm1vZGVsIFVwdm90ZSB7CiAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub3RlICAgICAgICBTdHJpbmc/CiAgZGF0ZUNyZWF0ZWQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgZ2FtZUlkICAgICAgSW50CiAgY3JlYXRlZEJ5SWQgU3RyaW5nCiAgR2FtZSAgICAgICAgR2FtZSAgICAgQHJlbGF0aW9uKGZpZWxkczogW2dhbWVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQ3JlYXRlZEJ5ICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKbW9kZWwgRG93bnZvdGUgewogIGlkICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm90ZSAgICAgICAgU3RyaW5nCiAgZGF0ZUNyZWF0ZWQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgZ2FtZUlkICAgICAgSW50CiAgY3JlYXRlZEJ5SWQgU3RyaW5nCiAgR2FtZSAgICAgICAgR2FtZSAgICAgQHJlbGF0aW9uKGZpZWxkczogW2dhbWVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgQ3JlYXRlZEJ5ICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKbW9kZWwgVGVzdFRhYmxlIHsKICBpZCAgICAgICAgICAgIEludCAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICBEYXRlVGltZSAgICBAZGVmYXVsdChub3coKSkKICBuYW1lICAgICAgICAgIFN0cmluZwogIGZhdm9yaXRlQ29sb3IgU3RyaW5nCiAgVGVzdENoYWlyICAgICBUZXN0Q2hhaXJbXQp9Cgptb2RlbCBUZXN0Q2hhaXIgewogIGlkICAgICAgICAgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgbmFtZSAgICAgICAgICBTdHJpbmcKICBmYXZvcml0ZUNvbG9yIFN0cmluZwogIHRhYmxlSWQgICAgICAgSW50CiAgVGFibGUgICAgICAgICBUZXN0VGFibGUgQHJlbGF0aW9uKGZpZWxkczogW3RhYmxlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cg==",
  "inlineSchemaHash": "0da6565caa2e12640ac9de19f6c78d6c9579ab66335c9c7dca4144d1399f5412",
  "noEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serializedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numberOfGames\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PublicProfile\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicProfile\",\"relationName\":\"PublicProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ModifierOptionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"DefaultExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DefaultExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultIncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"DefaultIncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultIncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DefaultIncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPack\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ModifierPackToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Downvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Downvote\",\"relationName\":\"DownvoteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Upvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Upvote\",\"relationName\":\"UpvoteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PublicProfile\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PublicProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToPublicProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Game\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentDayCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentRerollTokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":12,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2Raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2Limited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repositoryLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progressSheetLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"/game/public/${id}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rankId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GameToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rank\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Rank\",\"relationName\":\"GameToRank\",\"relationFromFields\":[\"rankId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"DayToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PublicProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicProfile\",\"relationName\":\"GameToPublicProfile\",\"relationFromFields\":[\"publicProfileId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Upvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Upvote\",\"relationName\":\"GameToUpvote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Downvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Downvote\",\"relationName\":\"DownvoteToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Rank\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimumScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToRank\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Day\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierOptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateFirstRolled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part1Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierWhenPart1CompletedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optionWhenPart1CompletedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part2Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierRerollsUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierOptionRerollsUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"netScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"DayToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierWhenPart1Completed\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ModifierWhenPart1Completed\",\"relationFromFields\":[\"modifierWhenPart1CompletedId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OptionWhenPart1Completed\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"OptionWhenPart1Completed\",\"relationFromFields\":[\"optionWhenPart1CompletedId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToDay\",\"relationFromFields\":[\"challengeModifierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DayToModifierOption\",\"relationFromFields\":[\"modifierOptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ChallengeModifier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasOptions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanatoryUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"standard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ChallengeModifierToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ChallengeModifierToModifierOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ChallengeModifierToDay\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultIncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedFromDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedInDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DayCompletedInPart1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ModifierWhenPart1Completed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModifierOption\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanatoryUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"standard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToModifierOption\",\"relationFromFields\":[\"challengeModifierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ModifierOptionToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"DayToModifierOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultIncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedFromDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedInDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DayCompletedInPart1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"OptionWhenPart1Completed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModifierPack\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ModifierPackToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Upvote\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUpvote\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UpvoteToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Downvote\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"DownvoteToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DownvoteToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TestTable\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoriteColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TestChair\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TestChair\",\"relationName\":\"TestChairToTestTable\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TestChair\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favoriteColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tableId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TestTable\",\"relationName\":\"TestChairToTestTable\",\"relationFromFields\":[\"tableId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

