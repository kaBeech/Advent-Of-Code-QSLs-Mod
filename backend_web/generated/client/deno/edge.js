const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
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
  defineDmmfProperty,
  Public,
} from '.././runtime/edge-esm.js'

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
  oauthUrl: 'oauthUrl',
  oauthUsername: 'oauthUsername',
  oauthName: 'oauthName',
  oauthAvatarUrl: 'oauthAvatarUrl',
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
  titleId: 'titleId',
  dateCompleted: 'dateCompleted'
};

exports.Prisma.TitleScalarFieldEnum = {
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
  score: 'score'
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
  shortText: 'shortText',
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
  Title: 'Title',
  Day: 'Day',
  ChallengeModifier: 'ChallengeModifier',
  ModifierOption: 'ModifierOption',
  ModifierPack: 'ModifierPack',
  Upvote: 'Upvote',
  Downvote: 'Downvote'
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
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgb3V0cHV0ICAgICAgICAgID0gIi4uL2dlbmVyYXRlZC9jbGllbnQiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX0RCX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBpZAogIHNlcmlhbGl6ZWRJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgIEB1bmlxdWUKICB1c2VybmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPyAgICAgICAgICAgICBAdW5pcXVlCiAgb2F1dGhVcmwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBvYXV0aFVzZXJuYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIG9hdXRoTmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/CiAgb2F1dGhBdmF0YXJVcmwgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBkYXRlQ3JlYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBudW1iZXJPZkdhbWVzICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIENoYWxsZW5nZU1vZGlmaWVyICAgICAgICAgICAgICAgICAgICAgICBDaGFsbGVuZ2VNb2RpZmllcltdCiAgRG93bnZvdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvd252b3RlW10KICBHYW1lICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVtdCiAgTW9kaWZpZXJPcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGlmaWVyT3B0aW9uW10KICBNb2RpZmllclBhY2sgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kaWZpZXJQYWNrW10KICBQdWJsaWNQcm9maWxlICAgICAgICAgICAgICAgICAgICAgICAgICAgUHVibGljUHJvZmlsZVtdCiAgVXB2b3RlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwdm90ZVtdCiAgRGVmYXVsdEV4Y2x1ZGVkQ2hhbGxlbmdlTW9kaWZpZXJzICAgICAgIENoYWxsZW5nZU1vZGlmaWVyW10gQHJlbGF0aW9uKCJEZWZhdWx0RXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMiKQogIERlZmF1bHRFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyAgICAgICAgICBNb2RpZmllck9wdGlvbltdICAgIEByZWxhdGlvbigiRGVmYXVsdEV4Y2x1ZGVkTW9kaWZpZXJPcHRpb25zIikKICBEZWZhdWx0SW5jbHVkZWRDdXN0b21DaGFsbGVuZ2VNb2RpZmllcnMgQ2hhbGxlbmdlTW9kaWZpZXJbXSBAcmVsYXRpb24oIkRlZmF1bHRJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCiAgRGVmYXVsdEluY2x1ZGVkQ3VzdG9tTW9kaWZpZXJPcHRpb25zICAgIE1vZGlmaWVyT3B0aW9uW10gICAgQHJlbGF0aW9uKCJEZWZhdWx0SW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMiKQp9Cgptb2RlbCBQdWJsaWNQcm9maWxlIHsKICBpZCAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQogIG5hbWUgICAgICAgIFN0cmluZwogIHVzZXJJZCAgICAgIFN0cmluZwogIEdhbWUgICAgICAgIEdhbWVbXQogIFVzZXIgICAgICAgIFVzZXIgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9Cgptb2RlbCBHYW1lIHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGVDcmVhdGVkICAgICAgICAgICAgICAgICAgICAgICAgIERhdGVUaW1lICAgICAgIEBkZWZhdWx0KG5vdygpKQogIHVzZXJJZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIG51bWJlciAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIHllYXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludAogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHBsYXllck5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBjdXJyZW50RGF5ICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGN1cnJlbnREYXlDb21wbGV0ZWQgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGN1cnJlbnRSZXJvbGxUb2tlbnMgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBkZWZhdWx0KDI0KQogIHJlcm9sbFRva2Vuc1NwZW50ICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgcmVyb2xsVG9rZW5zU3BlbnREdXJpbmdQYXJ0MlJhdyAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICByZXJvbGxUb2tlbnNTcGVudER1cmluZ1BhcnQyTGltaXRlZCBJbnQgICAgICAgICAgICBAZGVmYXVsdCgwKQogIHJlcG9zaXRvcnlMaW5rICAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBwcm9ncmVzc1NoZWV0TGluayAgICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICBAZGVmYXVsdCgiL2dhbWUvcHVibGljLyR7aWR9IikKICBpc1B1YmxpYyAgICAgICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuICAgICAgICBAZGVmYXVsdChmYWxzZSkKICBwdWJsaWNQcm9maWxlSWQgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgc2NvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgQGRlZmF1bHQoMCkKICB0aXRsZUlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgZGF0ZUNvbXBsZXRlZCAgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgRGF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF5W10KICBEb3dudm90ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb3dudm90ZVtdCiAgUHVibGljUHJvZmlsZSAgICAgICAgICAgICAgICAgICAgICAgUHVibGljUHJvZmlsZT8gQHJlbGF0aW9uKGZpZWxkczogW3B1YmxpY1Byb2ZpbGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgVGl0bGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU/ICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3RpdGxlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFVzZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFVwdm90ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwdm90ZVtdCn0KCm1vZGVsIFRpdGxlIHsKICBpZCAgICAgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgICAgIFN0cmluZyBAdW5pcXVlCiAgbWluaW11bVNjb3JlIEludAogIEdhbWUgICAgICAgICBHYW1lW10KfQoKbW9kZWwgRGF5IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICBAZGVmYXVsdChub3coKSkKICBnYW1lSWQgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQKICB1c2VySWQgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcKICBnYW1lTnVtYmVyICAgICAgICAgICAgICAgICAgICAgICBJbnQKICBudW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQKICBjaGFsbGVuZ2VNb2RpZmllcklkICAgICAgICAgICAgICBJbnQ/CiAgbW9kaWZpZXJPcHRpb25JZCAgICAgICAgICAgICAgICAgSW50PwogIGRhdGVGaXJzdFJvbGxlZCAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIHBhcnQxQ29tcGxldGVkICAgICAgICAgICAgICAgICAgIERhdGVUaW1lPwogIG1vZGlmaWVyV2hlblBhcnQxQ29tcGxldGVkSWQgICAgIEludD8KICBvcHRpb25XaGVuUGFydDFDb21wbGV0ZWRJZCAgICAgICBJbnQ/CiAgcGFydDJDb21wbGV0ZWQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/CiAgY2hhbGxlbmdlTW9kaWZpZXJSZXJvbGxzVXNlZCAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIG1vZGlmaWVyT3B0aW9uUmVyb2xsc1VzZWQgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICByZXJvbGxUb2tlbnNTcGVudER1cmluZ1BhcnQyICAgICBJbnQgICAgICAgICAgICAgICAgIEBkZWZhdWx0KDApCiAgc2NvcmUgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIENoYWxsZW5nZU1vZGlmaWVyICAgICAgICAgICAgICAgIENoYWxsZW5nZU1vZGlmaWVyPyAgQHJlbGF0aW9uKGZpZWxkczogW2NoYWxsZW5nZU1vZGlmaWVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIEdhbWUgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWUgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2dhbWVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgTW9kaWZpZXJPcHRpb24gICAgICAgICAgICAgICAgICAgTW9kaWZpZXJPcHRpb24/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbbW9kaWZpZXJPcHRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgTW9kaWZpZXJXaGVuUGFydDFDb21wbGV0ZWQgICAgICAgQ2hhbGxlbmdlTW9kaWZpZXI/ICBAcmVsYXRpb24oIk1vZGlmaWVyV2hlblBhcnQxQ29tcGxldGVkIiwgZmllbGRzOiBbbW9kaWZpZXJXaGVuUGFydDFDb21wbGV0ZWRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgT3B0aW9uV2hlblBhcnQxQ29tcGxldGVkICAgICAgICAgTW9kaWZpZXJPcHRpb24/ICAgICBAcmVsYXRpb24oIk9wdGlvbldoZW5QYXJ0MUNvbXBsZXRlZCIsIGZpZWxkczogW29wdGlvbldoZW5QYXJ0MUNvbXBsZXRlZElkXSwgcmVmZXJlbmNlczogW2lkXSkKICBFeGNsdWRlZENoYWxsZW5nZU1vZGlmaWVycyAgICAgICBDaGFsbGVuZ2VNb2RpZmllcltdIEByZWxhdGlvbigiRXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMiKQogIEVuY2x1ZGVkQ3VzdG9tQ2hhbGxlbmdlTW9kaWZpZXJzIENoYWxsZW5nZU1vZGlmaWVyW10gQHJlbGF0aW9uKCJJbmNsdWRlZEN1c3RvbUNoYWxsZW5nZU1vZGlmaWVycyIpCn0KCm1vZGVsIENoYWxsZW5nZU1vZGlmaWVyIHsKICBpZCAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICBAZGVmYXVsdChub3coKSkKICBuYW1lICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEB1bmlxdWUKICB0ZXh0ICAgICAgICAgICAgICAgICBTdHJpbmcKICBoYXNPcHRpb25zICAgICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGV4cGxhbmF0b3J5VXJsICAgICAgIFN0cmluZz8KICBzdGFuZGFyZCAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIGNyZWF0ZWRCeUlkICAgICAgICAgIFN0cmluZz8KICBpc1B1YmxpYyAgICAgICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIENyZWF0ZWRCeSAgICAgICAgICAgIFVzZXI/ICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBEYXkgICAgICAgICAgICAgICAgICBEYXlbXQogIERheUNvbXBsZXRlZEluUGFydDEgIERheVtdICAgICAgICAgICAgQHJlbGF0aW9uKCJNb2RpZmllcldoZW5QYXJ0MUNvbXBsZXRlZCIpCiAgTW9kaWZpZXJPcHRpb24gICAgICAgTW9kaWZpZXJPcHRpb25bXQogIFVzZXJFeGNsdWRlZCAgICAgICAgIFVzZXJbXSAgICAgICAgICAgQHJlbGF0aW9uKCJEZWZhdWx0RXhjbHVkZWRDaGFsbGVuZ2VNb2RpZmllcnMiKQogIFVzZXJJbmNsdWRlZCAgICAgICAgIFVzZXJbXSAgICAgICAgICAgQHJlbGF0aW9uKCJEZWZhdWx0SW5jbHVkZWRDdXN0b21DaGFsbGVuZ2VNb2RpZmllcnMiKQogIE1vZGlmaWVyUGFja0V4Y2x1ZGVkIERheVtdICAgICAgICAgICAgQHJlbGF0aW9uKCJFeGNsdWRlZENoYWxsZW5nZU1vZGlmaWVycyIpCiAgTW9kaWZpZXJQYWNrSW5jbHVkZWQgRGF5W10gICAgICAgICAgICBAcmVsYXRpb24oIkluY2x1ZGVkQ3VzdG9tQ2hhbGxlbmdlTW9kaWZpZXJzIikKfQoKbW9kZWwgTW9kaWZpZXJPcHRpb24gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZUNyZWF0ZWQgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpCiAgY2hhbGxlbmdlTW9kaWZpZXJJZCAgICAgICAgICAgSW50CiAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZQogIHRleHQgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZwogIHNob3J0VGV4dCAgICAgICAgICAgICAgICAgICAgIFN0cmluZz8KICBleHBsYW5hdG9yeVVybCAgICAgICAgICAgICAgICBTdHJpbmc/CiAgc3RhbmRhcmQgICAgICAgICAgICAgICAgICAgICAgQm9vbGVhbiAgICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCiAgY3JlYXRlZEJ5SWQgICAgICAgICAgICAgICAgICAgU3RyaW5nPwogIGlzUHVibGljICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIERheSAgICAgICAgICAgICAgICAgICAgICAgICAgIERheVtdCiAgRGF5Q29tcGxldGVkSW5QYXJ0MSAgICAgICAgICAgRGF5W10gICAgICAgICAgICAgQHJlbGF0aW9uKCJPcHRpb25XaGVuUGFydDFDb21wbGV0ZWQiKQogIENoYWxsZW5nZU1vZGlmaWVyICAgICAgICAgICAgIENoYWxsZW5nZU1vZGlmaWVyIEByZWxhdGlvbihmaWVsZHM6IFtjaGFsbGVuZ2VNb2RpZmllcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBDcmVhdGVkQnkgICAgICAgICAgICAgICAgICAgICBVc2VyPyAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbY3JlYXRlZEJ5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIFVzZXJFeGNsdWRlZCAgICAgICAgICAgICAgICAgIFVzZXJbXSAgICAgICAgICAgIEByZWxhdGlvbigiRGVmYXVsdEV4Y2x1ZGVkTW9kaWZpZXJPcHRpb25zIikKICBVc2VySW5jbHVkZWQgICAgICAgICAgICAgICAgICBVc2VyW10gICAgICAgICAgICBAcmVsYXRpb24oIkRlZmF1bHRJbmNsdWRlZEN1c3RvbU1vZGlmaWVyT3B0aW9ucyIpCiAgRXhjbHVkZWRNb2RpZmllck9wdGlvbnMgICAgICAgTW9kaWZpZXJQYWNrW10gICAgQHJlbGF0aW9uKCJFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyIpCiAgSW5jbHVkZWRDdXN0b21Nb2RpZmllck9wdGlvbnMgTW9kaWZpZXJQYWNrW10gICAgQHJlbGF0aW9uKCJJbmNsdWRlZEN1c3RvbU1vZGlmaWVyT3B0aW9ucyIpCn0KCm1vZGVsIE1vZGlmaWVyUGFjayB7CiAgaWQgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBkYXRlQ3JlYXRlZCAgICAgRGF0ZVRpbWUgICAgICAgICBAZGVmYXVsdChub3coKSkKICBjcmVhdGVkQnlJZCAgICAgU3RyaW5nPwogIGlzUHVibGljICAgICAgICBCb29sZWFuICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIENyZWF0ZWRCeSAgICAgICBVc2VyPyAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtjcmVhdGVkQnlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgRXhjbHVkZWRGcm9tRGF5IE1vZGlmaWVyT3B0aW9uW10gQHJlbGF0aW9uKCJFeGNsdWRlZE1vZGlmaWVyT3B0aW9ucyIpCiAgSW5jbHVkZWRJbkRheSAgIE1vZGlmaWVyT3B0aW9uW10gQHJlbGF0aW9uKCJJbmNsdWRlZEN1c3RvbU1vZGlmaWVyT3B0aW9ucyIpCn0KCm1vZGVsIFVwdm90ZSB7CiAgaWQgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub3RlICAgICAgICBTdHJpbmc/CiAgZGF0ZUNyZWF0ZWQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgZ2FtZUlkICAgICAgSW50CiAgY3JlYXRlZEJ5SWQgU3RyaW5nCiAgQ3JlYXRlZEJ5ICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBHYW1lICAgICAgICBHYW1lICAgICBAcmVsYXRpb24oZmllbGRzOiBbZ2FtZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKbW9kZWwgRG93bnZvdGUgewogIGlkICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbm90ZSAgICAgICAgU3RyaW5nCiAgZGF0ZUNyZWF0ZWQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgZ2FtZUlkICAgICAgSW50CiAgY3JlYXRlZEJ5SWQgU3RyaW5nCiAgQ3JlYXRlZEJ5ICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NyZWF0ZWRCeUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBHYW1lICAgICAgICBHYW1lICAgICBAcmVsYXRpb24oZmllbGRzOiBbZ2FtZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKfQo=",
  "inlineSchemaHash": "8cfc7e69728e9553e045730c602b452633db82c07921089a7a5375790439ffbc"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serializedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthUsername\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"oauthAvatarUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numberOfGames\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Downvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Downvote\",\"relationName\":\"DownvoteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ModifierOptionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPack\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ModifierPackToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PublicProfile\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicProfile\",\"relationName\":\"PublicProfileToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Upvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Upvote\",\"relationName\":\"UpvoteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"DefaultExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DefaultExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultIncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"DefaultIncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DefaultIncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DefaultIncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PublicProfile\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToPublicProfile\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PublicProfileToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Game\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playerName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentDay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentDayCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentRerollTokens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":24,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2Raw\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2Limited\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"repositoryLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"progressSheetLink\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"/game/public/${id}\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicProfileId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titleId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCompleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"DayToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Downvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Downvote\",\"relationName\":\"DownvoteToGame\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PublicProfile\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PublicProfile\",\"relationName\":\"GameToPublicProfile\",\"relationFromFields\":[\"publicProfileId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Title\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Title\",\"relationName\":\"GameToTitle\",\"relationFromFields\":[\"titleId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"GameToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Upvote\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Upvote\",\"relationName\":\"GameToUpvote\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Title\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minimumScore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToTitle\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Day\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierOptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateFirstRolled\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part1Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierWhenPart1CompletedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optionWhenPart1CompletedId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"part2Completed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierRerollsUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modifierOptionRerollsUsed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rerollTokensSpentDuringPart2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToDay\",\"relationFromFields\":[\"challengeModifierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"DayToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"DayToModifierOption\",\"relationFromFields\":[\"modifierOptionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierWhenPart1Completed\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ModifierWhenPart1Completed\",\"relationFromFields\":[\"modifierWhenPart1CompletedId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OptionWhenPart1Completed\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"OptionWhenPart1Completed\",\"relationFromFields\":[\"optionWhenPart1CompletedId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EncludedCustomChallengeModifiers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ChallengeModifier\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasOptions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanatoryUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"standard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ChallengeModifierToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ChallengeModifierToDay\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DayCompletedInPart1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ModifierWhenPart1Completed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ChallengeModifierToModifierOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultIncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"ExcludedChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ModifierPackIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"IncludedCustomChallengeModifiers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModifierOption\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"challengeModifierId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shortText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"explanatoryUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"standard\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Day\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"DayToModifierOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DayCompletedInPart1\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Day\",\"relationName\":\"OptionWhenPart1Completed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ChallengeModifier\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ChallengeModifier\",\"relationName\":\"ChallengeModifierToModifierOption\",\"relationFromFields\":[\"challengeModifierId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ModifierOptionToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserExcluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserIncluded\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DefaultIncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedCustomModifierOptions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierPack\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ModifierPack\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPublic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"ModifierPackToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ExcludedFromDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"ExcludedModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IncludedInDay\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ModifierOption\",\"relationName\":\"IncludedCustomModifierOptions\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Upvote\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UpvoteToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"GameToUpvote\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Downvote\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"note\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateCreated\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gameId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdById\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedBy\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DownvoteToUser\",\"relationFromFields\":[\"createdById\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Game\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Game\",\"relationName\":\"DownvoteToGame\",\"relationFromFields\":[\"gameId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

