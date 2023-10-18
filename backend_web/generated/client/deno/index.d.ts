
/**
 * Client
**/

import * as runtime from '.././runtime/index.d.ts';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    Game: GamePayload<ExtArgs>[]
    PublicProfile: PublicProfilePayload<ExtArgs>[]
    ChallengeModifier: ChallengeModifierPayload<ExtArgs>[]
    ModifierOption: ModifierOptionPayload<ExtArgs>[]
    DefaultExcludedChallengeModifiers: ChallengeModifierPayload<ExtArgs>[]
    DefaultExcludedModifierOptions: ModifierOptionPayload<ExtArgs>[]
    DefaultIncludedCustomChallengeModifiers: ChallengeModifierPayload<ExtArgs>[]
    DefaultIncludedCustomModifierOptions: ModifierOptionPayload<ExtArgs>[]
    ModifierPack: ModifierPackPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    serializedId: string | null
    username: string | null
    dateCreated: Date
    numberOfGames: number
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type PublicProfilePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PublicProfile"
  objects: {
    User: UserPayload<ExtArgs>
    Game: GamePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    dateCreated: Date
    name: string
    userId: string
  }, ExtArgs["result"]["publicProfile"]>
  composites: {}
}

/**
 * Model PublicProfile
 * 
 */
export type PublicProfile = runtime.Types.DefaultSelection<PublicProfilePayload>
export type GamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Game"
  objects: {
    User: UserPayload<ExtArgs>
    Rank: RankPayload<ExtArgs> | null
    Day: DayPayload<ExtArgs>[]
    PublicProfile: PublicProfilePayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    dateCreated: Date
    userId: string
    number: number
    year: number
    name: string
    playerName: string | null
    currentDay: number
    currentDayCompleted: boolean
    currentRerollTokens: number
    rerollTokensSpent: number
    repositoryLink: string | null
    progressSheetLink: string | null
    public: boolean
    publicProfileId: number | null
    score: number
    rankId: number | null
    dateCompleted: Date | null
  }, ExtArgs["result"]["game"]>
  composites: {}
}

/**
 * Model Game
 * 
 */
export type Game = runtime.Types.DefaultSelection<GamePayload>
export type RankPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Rank"
  objects: {
    Game: GamePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    minimumScore: number
  }, ExtArgs["result"]["rank"]>
  composites: {}
}

/**
 * Model Rank
 * 
 */
export type Rank = runtime.Types.DefaultSelection<RankPayload>
export type DayPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Day"
  objects: {
    ExcludedChallengeModifiers: ChallengeModifierPayload<ExtArgs>[]
    ExcludedModifierOptions: ModifierOptionPayload<ExtArgs>[]
    IncludedCustomChallengeModifiers: ChallengeModifierPayload<ExtArgs>[]
    IncludedCustomModifierOptions: ModifierOptionPayload<ExtArgs>[]
    Game: GamePayload<ExtArgs>
    ModifierWhenPart1Completed: ChallengeModifierPayload<ExtArgs> | null
    OptionWhenPart1Completed: ModifierOptionPayload<ExtArgs> | null
    ChallengeModifier: ChallengeModifierPayload<ExtArgs> | null
    ModifierOption: ModifierOptionPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    dateCreated: Date
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    rerollTokensSpentDuringPart2: number
    netScore: number
  }, ExtArgs["result"]["day"]>
  composites: {}
}

/**
 * Model Day
 * 
 */
export type Day = runtime.Types.DefaultSelection<DayPayload>
export type ChallengeModifierPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ChallengeModifier"
  objects: {
    CreatedBy: UserPayload<ExtArgs> | null
    ModifierOption: ModifierOptionPayload<ExtArgs>[]
    Day: DayPayload<ExtArgs>[]
    ModifierPackExcluded: ModifierPackPayload<ExtArgs>[]
    ModifierPackIncluded: ModifierPackPayload<ExtArgs>[]
    UserExcluded: UserPayload<ExtArgs>[]
    UserIncluded: UserPayload<ExtArgs>[]
    ExcludedFromDay: DayPayload<ExtArgs>[]
    IncludedInDay: DayPayload<ExtArgs>[]
    DayCompletedInPart1: DayPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    dateCreated: Date
    name: string
    text: string
    hasOptions: boolean
    explanatoryUrl: string | null
    standard: boolean
    createdById: string | null
    public: boolean
  }, ExtArgs["result"]["challengeModifier"]>
  composites: {}
}

/**
 * Model ChallengeModifier
 * 
 */
export type ChallengeModifier = runtime.Types.DefaultSelection<ChallengeModifierPayload>
export type ModifierOptionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ModifierOption"
  objects: {
    ChallengeModifier: ChallengeModifierPayload<ExtArgs>
    CreatedBy: UserPayload<ExtArgs> | null
    Day: DayPayload<ExtArgs>[]
    ModifierPackExcluded: ModifierPackPayload<ExtArgs>[]
    ModifierPackIncluded: ModifierPackPayload<ExtArgs>[]
    UserExcluded: UserPayload<ExtArgs>[]
    UserIncluded: UserPayload<ExtArgs>[]
    ExcludedFromDay: DayPayload<ExtArgs>[]
    IncludedInDay: DayPayload<ExtArgs>[]
    DayCompletedInPart1: DayPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    dateCreated: Date
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl: string | null
    standard: boolean
    createdById: string | null
    public: boolean
  }, ExtArgs["result"]["modifierOption"]>
  composites: {}
}

/**
 * Model ModifierOption
 * 
 */
export type ModifierOption = runtime.Types.DefaultSelection<ModifierOptionPayload>
export type ModifierPackPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ModifierPack"
  objects: {
    ExcludedChallengeModifiers: ChallengeModifierPayload<ExtArgs>[]
    ExcludedModifierOptions: ModifierOptionPayload<ExtArgs>[]
    EncludedCustomChallengeModifiers: ChallengeModifierPayload<ExtArgs>[]
    IncludedCustomModifierOptions: ModifierOptionPayload<ExtArgs>[]
    CreatedBy: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    dateCreated: Date
    createdById: string | null
    public: boolean
  }, ExtArgs["result"]["modifierPack"]>
  composites: {}
}

/**
 * Model ModifierPack
 * 
 */
export type ModifierPack = runtime.Types.DefaultSelection<ModifierPackPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.publicProfile`: Exposes CRUD operations for the **PublicProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicProfiles
    * const publicProfiles = await prisma.publicProfile.findMany()
    * ```
    */
  get publicProfile(): Prisma.PublicProfileDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.rank`: Exposes CRUD operations for the **Rank** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ranks
    * const ranks = await prisma.rank.findMany()
    * ```
    */
  get rank(): Prisma.RankDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.challengeModifier`: Exposes CRUD operations for the **ChallengeModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeModifiers
    * const challengeModifiers = await prisma.challengeModifier.findMany()
    * ```
    */
  get challengeModifier(): Prisma.ChallengeModifierDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.modifierOption`: Exposes CRUD operations for the **ModifierOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModifierOptions
    * const modifierOptions = await prisma.modifierOption.findMany()
    * ```
    */
  get modifierOption(): Prisma.ModifierOptionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.modifierPack`: Exposes CRUD operations for the **ModifierPack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModifierPacks
    * const modifierPacks = await prisma.modifierPack.findMany()
    * ```
    */
  get modifierPack(): Prisma.ModifierPackDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PublicProfile: 'PublicProfile',
    Game: 'Game',
    Rank: 'Rank',
    Day: 'Day',
    ChallengeModifier: 'ChallengeModifier',
    ModifierOption: 'ModifierOption',
    ModifierPack: 'ModifierPack'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'publicProfile' | 'game' | 'rank' | 'day' | 'challengeModifier' | 'modifierOption' | 'modifierPack'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PublicProfile: {
        payload: PublicProfilePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PublicProfileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicProfileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>
          }
          findFirst: {
            args: Prisma.PublicProfileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicProfileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>
          }
          findMany: {
            args: Prisma.PublicProfileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>[]
          }
          create: {
            args: Prisma.PublicProfileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>
          }
          createMany: {
            args: Prisma.PublicProfileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PublicProfileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>
          }
          update: {
            args: Prisma.PublicProfileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>
          }
          deleteMany: {
            args: Prisma.PublicProfileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublicProfileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublicProfileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PublicProfilePayload>
          }
          aggregate: {
            args: Prisma.PublicProfileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePublicProfile>
          }
          groupBy: {
            args: Prisma.PublicProfileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PublicProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicProfileCountArgs<ExtArgs>,
            result: $Utils.Optional<PublicProfileCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: GamePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>,
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Rank: {
        payload: RankPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.RankFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>
          }
          findFirst: {
            args: Prisma.RankFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>
          }
          findMany: {
            args: Prisma.RankFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>[]
          }
          create: {
            args: Prisma.RankCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>
          }
          createMany: {
            args: Prisma.RankCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RankDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>
          }
          update: {
            args: Prisma.RankUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>
          }
          deleteMany: {
            args: Prisma.RankDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RankUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RankUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RankPayload>
          }
          aggregate: {
            args: Prisma.RankAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRank>
          }
          groupBy: {
            args: Prisma.RankGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RankGroupByOutputType>[]
          }
          count: {
            args: Prisma.RankCountArgs<ExtArgs>,
            result: $Utils.Optional<RankCountAggregateOutputType> | number
          }
        }
      }
      Day: {
        payload: DayPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          findFirst: {
            args: Prisma.DayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          findMany: {
            args: Prisma.DayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>[]
          }
          create: {
            args: Prisma.DayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          createMany: {
            args: Prisma.DayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          update: {
            args: Prisma.DayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          deleteMany: {
            args: Prisma.DayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DayPayload>
          }
          aggregate: {
            args: Prisma.DayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDay>
          }
          groupBy: {
            args: Prisma.DayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DayGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayCountArgs<ExtArgs>,
            result: $Utils.Optional<DayCountAggregateOutputType> | number
          }
        }
      }
      ChallengeModifier: {
        payload: ChallengeModifierPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ChallengeModifierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeModifierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>
          }
          findFirst: {
            args: Prisma.ChallengeModifierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeModifierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>
          }
          findMany: {
            args: Prisma.ChallengeModifierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>[]
          }
          create: {
            args: Prisma.ChallengeModifierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>
          }
          createMany: {
            args: Prisma.ChallengeModifierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChallengeModifierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>
          }
          update: {
            args: Prisma.ChallengeModifierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeModifierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeModifierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChallengeModifierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ChallengeModifierPayload>
          }
          aggregate: {
            args: Prisma.ChallengeModifierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChallengeModifier>
          }
          groupBy: {
            args: Prisma.ChallengeModifierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeModifierCountArgs<ExtArgs>,
            result: $Utils.Optional<ChallengeModifierCountAggregateOutputType> | number
          }
        }
      }
      ModifierOption: {
        payload: ModifierOptionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ModifierOptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierOptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>
          }
          findFirst: {
            args: Prisma.ModifierOptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierOptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>
          }
          findMany: {
            args: Prisma.ModifierOptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>[]
          }
          create: {
            args: Prisma.ModifierOptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>
          }
          createMany: {
            args: Prisma.ModifierOptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModifierOptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>
          }
          update: {
            args: Prisma.ModifierOptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>
          }
          deleteMany: {
            args: Prisma.ModifierOptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierOptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModifierOptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierOptionPayload>
          }
          aggregate: {
            args: Prisma.ModifierOptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModifierOption>
          }
          groupBy: {
            args: Prisma.ModifierOptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModifierOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierOptionCountArgs<ExtArgs>,
            result: $Utils.Optional<ModifierOptionCountAggregateOutputType> | number
          }
        }
      }
      ModifierPack: {
        payload: ModifierPackPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ModifierPackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierPackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>
          }
          findFirst: {
            args: Prisma.ModifierPackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierPackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>
          }
          findMany: {
            args: Prisma.ModifierPackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>[]
          }
          create: {
            args: Prisma.ModifierPackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>
          }
          createMany: {
            args: Prisma.ModifierPackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModifierPackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>
          }
          update: {
            args: Prisma.ModifierPackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>
          }
          deleteMany: {
            args: Prisma.ModifierPackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierPackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModifierPackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ModifierPackPayload>
          }
          aggregate: {
            args: Prisma.ModifierPackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModifierPack>
          }
          groupBy: {
            args: Prisma.ModifierPackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModifierPackGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierPackCountArgs<ExtArgs>,
            result: $Utils.Optional<ModifierPackCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Game: number
    PublicProfile: number
    ChallengeModifier: number
    ModifierOption: number
    DefaultExcludedChallengeModifiers: number
    DefaultExcludedModifierOptions: number
    DefaultIncludedCustomChallengeModifiers: number
    DefaultIncludedCustomModifierOptions: number
    ModifierPack: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Game?: boolean | UserCountOutputTypeCountGameArgs
    PublicProfile?: boolean | UserCountOutputTypeCountPublicProfileArgs
    ChallengeModifier?: boolean | UserCountOutputTypeCountChallengeModifierArgs
    ModifierOption?: boolean | UserCountOutputTypeCountModifierOptionArgs
    DefaultExcludedChallengeModifiers?: boolean | UserCountOutputTypeCountDefaultExcludedChallengeModifiersArgs
    DefaultExcludedModifierOptions?: boolean | UserCountOutputTypeCountDefaultExcludedModifierOptionsArgs
    DefaultIncludedCustomChallengeModifiers?: boolean | UserCountOutputTypeCountDefaultIncludedCustomChallengeModifiersArgs
    DefaultIncludedCustomModifierOptions?: boolean | UserCountOutputTypeCountDefaultIncludedCustomModifierOptionsArgs
    ModifierPack?: boolean | UserCountOutputTypeCountModifierPackArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublicProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PublicProfileWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengeModifierArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModifierOptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultExcludedModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultIncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDefaultIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountModifierPackArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }



  /**
   * Count Type PublicProfileCountOutputType
   */


  export type PublicProfileCountOutputType = {
    Game: number
  }

  export type PublicProfileCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Game?: boolean | PublicProfileCountOutputTypeCountGameArgs
  }

  // Custom InputTypes

  /**
   * PublicProfileCountOutputType without action
   */
  export type PublicProfileCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfileCountOutputType
     */
    select?: PublicProfileCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PublicProfileCountOutputType without action
   */
  export type PublicProfileCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }



  /**
   * Count Type GameCountOutputType
   */


  export type GameCountOutputType = {
    Day: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Day?: boolean | GameCountOutputTypeCountDayArgs
  }

  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }



  /**
   * Count Type RankCountOutputType
   */


  export type RankCountOutputType = {
    Game: number
  }

  export type RankCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Game?: boolean | RankCountOutputTypeCountGameArgs
  }

  // Custom InputTypes

  /**
   * RankCountOutputType without action
   */
  export type RankCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankCountOutputType
     */
    select?: RankCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RankCountOutputType without action
   */
  export type RankCountOutputTypeCountGameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }



  /**
   * Count Type DayCountOutputType
   */


  export type DayCountOutputType = {
    ExcludedChallengeModifiers: number
    ExcludedModifierOptions: number
    IncludedCustomChallengeModifiers: number
    IncludedCustomModifierOptions: number
  }

  export type DayCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ExcludedChallengeModifiers?: boolean | DayCountOutputTypeCountExcludedChallengeModifiersArgs
    ExcludedModifierOptions?: boolean | DayCountOutputTypeCountExcludedModifierOptionsArgs
    IncludedCustomChallengeModifiers?: boolean | DayCountOutputTypeCountIncludedCustomChallengeModifiersArgs
    IncludedCustomModifierOptions?: boolean | DayCountOutputTypeCountIncludedCustomModifierOptionsArgs
  }

  // Custom InputTypes

  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayCountOutputType
     */
    select?: DayCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountExcludedModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountIncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * DayCountOutputType without action
   */
  export type DayCountOutputTypeCountIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }



  /**
   * Count Type ChallengeModifierCountOutputType
   */


  export type ChallengeModifierCountOutputType = {
    ModifierOption: number
    Day: number
    ModifierPackExcluded: number
    ModifierPackIncluded: number
    UserExcluded: number
    UserIncluded: number
    ExcludedFromDay: number
    IncludedInDay: number
    DayCompletedInPart1: number
  }

  export type ChallengeModifierCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ModifierOption?: boolean | ChallengeModifierCountOutputTypeCountModifierOptionArgs
    Day?: boolean | ChallengeModifierCountOutputTypeCountDayArgs
    ModifierPackExcluded?: boolean | ChallengeModifierCountOutputTypeCountModifierPackExcludedArgs
    ModifierPackIncluded?: boolean | ChallengeModifierCountOutputTypeCountModifierPackIncludedArgs
    UserExcluded?: boolean | ChallengeModifierCountOutputTypeCountUserExcludedArgs
    UserIncluded?: boolean | ChallengeModifierCountOutputTypeCountUserIncludedArgs
    ExcludedFromDay?: boolean | ChallengeModifierCountOutputTypeCountExcludedFromDayArgs
    IncludedInDay?: boolean | ChallengeModifierCountOutputTypeCountIncludedInDayArgs
    DayCompletedInPart1?: boolean | ChallengeModifierCountOutputTypeCountDayCompletedInPart1Args
  }

  // Custom InputTypes

  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifierCountOutputType
     */
    select?: ChallengeModifierCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountModifierOptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountModifierPackExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountModifierPackIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountUserExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountUserIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountExcludedFromDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountIncludedInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ChallengeModifierCountOutputType without action
   */
  export type ChallengeModifierCountOutputTypeCountDayCompletedInPart1Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }



  /**
   * Count Type ModifierOptionCountOutputType
   */


  export type ModifierOptionCountOutputType = {
    Day: number
    ModifierPackExcluded: number
    ModifierPackIncluded: number
    UserExcluded: number
    UserIncluded: number
    ExcludedFromDay: number
    IncludedInDay: number
    DayCompletedInPart1: number
  }

  export type ModifierOptionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Day?: boolean | ModifierOptionCountOutputTypeCountDayArgs
    ModifierPackExcluded?: boolean | ModifierOptionCountOutputTypeCountModifierPackExcludedArgs
    ModifierPackIncluded?: boolean | ModifierOptionCountOutputTypeCountModifierPackIncludedArgs
    UserExcluded?: boolean | ModifierOptionCountOutputTypeCountUserExcludedArgs
    UserIncluded?: boolean | ModifierOptionCountOutputTypeCountUserIncludedArgs
    ExcludedFromDay?: boolean | ModifierOptionCountOutputTypeCountExcludedFromDayArgs
    IncludedInDay?: boolean | ModifierOptionCountOutputTypeCountIncludedInDayArgs
    DayCompletedInPart1?: boolean | ModifierOptionCountOutputTypeCountDayCompletedInPart1Args
  }

  // Custom InputTypes

  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOptionCountOutputType
     */
    select?: ModifierOptionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountModifierPackExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountModifierPackIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountUserExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountUserIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountExcludedFromDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountIncludedInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }


  /**
   * ModifierOptionCountOutputType without action
   */
  export type ModifierOptionCountOutputTypeCountDayCompletedInPart1Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
  }



  /**
   * Count Type ModifierPackCountOutputType
   */


  export type ModifierPackCountOutputType = {
    ExcludedChallengeModifiers: number
    ExcludedModifierOptions: number
    EncludedCustomChallengeModifiers: number
    IncludedCustomModifierOptions: number
  }

  export type ModifierPackCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ExcludedChallengeModifiers?: boolean | ModifierPackCountOutputTypeCountExcludedChallengeModifiersArgs
    ExcludedModifierOptions?: boolean | ModifierPackCountOutputTypeCountExcludedModifierOptionsArgs
    EncludedCustomChallengeModifiers?: boolean | ModifierPackCountOutputTypeCountEncludedCustomChallengeModifiersArgs
    IncludedCustomModifierOptions?: boolean | ModifierPackCountOutputTypeCountIncludedCustomModifierOptionsArgs
  }

  // Custom InputTypes

  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPackCountOutputType
     */
    select?: ModifierPackCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeCountExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeCountExcludedModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }


  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeCountEncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
  }


  /**
   * ModifierPackCountOutputType without action
   */
  export type ModifierPackCountOutputTypeCountIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    numberOfGames: number | null
  }

  export type UserSumAggregateOutputType = {
    numberOfGames: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    serializedId: string | null
    username: string | null
    dateCreated: Date | null
    numberOfGames: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    serializedId: string | null
    username: string | null
    dateCreated: Date | null
    numberOfGames: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    serializedId: number
    username: number
    dateCreated: number
    numberOfGames: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    numberOfGames?: true
  }

  export type UserSumAggregateInputType = {
    numberOfGames?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    serializedId?: true
    username?: true
    dateCreated?: true
    numberOfGames?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    serializedId?: true
    username?: true
    dateCreated?: true
    numberOfGames?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    serializedId?: true
    username?: true
    dateCreated?: true
    numberOfGames?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    serializedId: string | null
    username: string | null
    dateCreated: Date
    numberOfGames: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serializedId?: boolean
    username?: boolean
    dateCreated?: boolean
    numberOfGames?: boolean
    Game?: boolean | User$GameArgs<ExtArgs>
    PublicProfile?: boolean | User$PublicProfileArgs<ExtArgs>
    ChallengeModifier?: boolean | User$ChallengeModifierArgs<ExtArgs>
    ModifierOption?: boolean | User$ModifierOptionArgs<ExtArgs>
    DefaultExcludedChallengeModifiers?: boolean | User$DefaultExcludedChallengeModifiersArgs<ExtArgs>
    DefaultExcludedModifierOptions?: boolean | User$DefaultExcludedModifierOptionsArgs<ExtArgs>
    DefaultIncludedCustomChallengeModifiers?: boolean | User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs>
    DefaultIncludedCustomModifierOptions?: boolean | User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs>
    ModifierPack?: boolean | User$ModifierPackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    serializedId?: boolean
    username?: boolean
    dateCreated?: boolean
    numberOfGames?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Game?: boolean | User$GameArgs<ExtArgs>
    PublicProfile?: boolean | User$PublicProfileArgs<ExtArgs>
    ChallengeModifier?: boolean | User$ChallengeModifierArgs<ExtArgs>
    ModifierOption?: boolean | User$ModifierOptionArgs<ExtArgs>
    DefaultExcludedChallengeModifiers?: boolean | User$DefaultExcludedChallengeModifiersArgs<ExtArgs>
    DefaultExcludedModifierOptions?: boolean | User$DefaultExcludedModifierOptionsArgs<ExtArgs>
    DefaultIncludedCustomChallengeModifiers?: boolean | User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs>
    DefaultIncludedCustomModifierOptions?: boolean | User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs>
    ModifierPack?: boolean | User$ModifierPackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Game<T extends User$GameArgs<ExtArgs> = {}>(args?: Subset<T, User$GameArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GamePayload<ExtArgs>, T, 'findMany', never>| Null>;

    PublicProfile<T extends User$PublicProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$PublicProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findMany', never>| Null>;

    ChallengeModifier<T extends User$ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, User$ChallengeModifierArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ModifierOption<T extends User$ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, User$ModifierOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    DefaultExcludedChallengeModifiers<T extends User$DefaultExcludedChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultExcludedChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    DefaultExcludedModifierOptions<T extends User$DefaultExcludedModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultExcludedModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    DefaultIncludedCustomChallengeModifiers<T extends User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    DefaultIncludedCustomModifierOptions<T extends User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ModifierPack<T extends User$ModifierPackArgs<ExtArgs> = {}>(args?: Subset<T, User$ModifierPackArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Game
   */
  export type User$GameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * User.PublicProfile
   */
  export type User$PublicProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    where?: PublicProfileWhereInput
    orderBy?: Enumerable<PublicProfileOrderByWithRelationInput>
    cursor?: PublicProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PublicProfileScalarFieldEnum>
  }


  /**
   * User.ChallengeModifier
   */
  export type User$ChallengeModifierArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * User.ModifierOption
   */
  export type User$ModifierOptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * User.DefaultExcludedChallengeModifiers
   */
  export type User$DefaultExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * User.DefaultExcludedModifierOptions
   */
  export type User$DefaultExcludedModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * User.DefaultIncludedCustomChallengeModifiers
   */
  export type User$DefaultIncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * User.DefaultIncludedCustomModifierOptions
   */
  export type User$DefaultIncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * User.ModifierPack
   */
  export type User$ModifierPackArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model PublicProfile
   */


  export type AggregatePublicProfile = {
    _count: PublicProfileCountAggregateOutputType | null
    _avg: PublicProfileAvgAggregateOutputType | null
    _sum: PublicProfileSumAggregateOutputType | null
    _min: PublicProfileMinAggregateOutputType | null
    _max: PublicProfileMaxAggregateOutputType | null
  }

  export type PublicProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type PublicProfileSumAggregateOutputType = {
    id: number | null
  }

  export type PublicProfileMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    userId: string | null
  }

  export type PublicProfileMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    userId: string | null
  }

  export type PublicProfileCountAggregateOutputType = {
    id: number
    dateCreated: number
    name: number
    userId: number
    _all: number
  }


  export type PublicProfileAvgAggregateInputType = {
    id?: true
  }

  export type PublicProfileSumAggregateInputType = {
    id?: true
  }

  export type PublicProfileMinAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    userId?: true
  }

  export type PublicProfileMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    userId?: true
  }

  export type PublicProfileCountAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type PublicProfileAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicProfile to aggregate.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: Enumerable<PublicProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicProfiles
    **/
    _count?: true | PublicProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicProfileMaxAggregateInputType
  }

  export type GetPublicProfileAggregateType<T extends PublicProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicProfile[P]>
      : GetScalarType<T[P], AggregatePublicProfile[P]>
  }




  export type PublicProfileGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PublicProfileWhereInput
    orderBy?: Enumerable<PublicProfileOrderByWithAggregationInput>
    by: PublicProfileScalarFieldEnum[]
    having?: PublicProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicProfileCountAggregateInputType | true
    _avg?: PublicProfileAvgAggregateInputType
    _sum?: PublicProfileSumAggregateInputType
    _min?: PublicProfileMinAggregateInputType
    _max?: PublicProfileMaxAggregateInputType
  }


  export type PublicProfileGroupByOutputType = {
    id: number
    dateCreated: Date
    name: string
    userId: string
    _count: PublicProfileCountAggregateOutputType | null
    _avg: PublicProfileAvgAggregateOutputType | null
    _sum: PublicProfileSumAggregateOutputType | null
    _min: PublicProfileMinAggregateOutputType | null
    _max: PublicProfileMaxAggregateOutputType | null
  }

  type GetPublicProfileGroupByPayload<T extends PublicProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PublicProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PublicProfileGroupByOutputType[P]>
        }
      >
    >


  export type PublicProfileSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    userId?: boolean
    User?: boolean | UserArgs<ExtArgs>
    Game?: boolean | PublicProfile$GameArgs<ExtArgs>
    _count?: boolean | PublicProfileCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["publicProfile"]>

  export type PublicProfileSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    userId?: boolean
  }

  export type PublicProfileInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserArgs<ExtArgs>
    Game?: boolean | PublicProfile$GameArgs<ExtArgs>
    _count?: boolean | PublicProfileCountOutputTypeArgs<ExtArgs>
  }


  type PublicProfileGetPayload<S extends boolean | null | undefined | PublicProfileArgs> = $Types.GetResult<PublicProfilePayload, S>

  type PublicProfileCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PublicProfileFindManyArgs, 'select' | 'include'> & {
      select?: PublicProfileCountAggregateInputType | true
    }

  export interface PublicProfileDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicProfile'], meta: { name: 'PublicProfile' } }
    /**
     * Find zero or one PublicProfile that matches the filter.
     * @param {PublicProfileFindUniqueArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicProfileFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PublicProfileFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PublicProfile'> extends True ? Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PublicProfile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PublicProfileFindUniqueOrThrowArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicProfileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PublicProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileFindFirstArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicProfileFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PublicProfileFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PublicProfile'> extends True ? Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PublicProfile that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileFindFirstOrThrowArgs} args - Arguments to find a PublicProfile
     * @example
     * // Get one PublicProfile
     * const publicProfile = await prisma.publicProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicProfileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PublicProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicProfiles
     * const publicProfiles = await prisma.publicProfile.findMany()
     * 
     * // Get first 10 PublicProfiles
     * const publicProfiles = await prisma.publicProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicProfileWithIdOnly = await prisma.publicProfile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicProfileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PublicProfile.
     * @param {PublicProfileCreateArgs} args - Arguments to create a PublicProfile.
     * @example
     * // Create one PublicProfile
     * const PublicProfile = await prisma.publicProfile.create({
     *   data: {
     *     // ... data to create a PublicProfile
     *   }
     * })
     * 
    **/
    create<T extends PublicProfileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileCreateArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PublicProfiles.
     *     @param {PublicProfileCreateManyArgs} args - Arguments to create many PublicProfiles.
     *     @example
     *     // Create many PublicProfiles
     *     const publicProfile = await prisma.publicProfile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PublicProfileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PublicProfile.
     * @param {PublicProfileDeleteArgs} args - Arguments to delete one PublicProfile.
     * @example
     * // Delete one PublicProfile
     * const PublicProfile = await prisma.publicProfile.delete({
     *   where: {
     *     // ... filter to delete one PublicProfile
     *   }
     * })
     * 
    **/
    delete<T extends PublicProfileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileDeleteArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PublicProfile.
     * @param {PublicProfileUpdateArgs} args - Arguments to update one PublicProfile.
     * @example
     * // Update one PublicProfile
     * const publicProfile = await prisma.publicProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicProfileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileUpdateArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PublicProfiles.
     * @param {PublicProfileDeleteManyArgs} args - Arguments to filter PublicProfiles to delete.
     * @example
     * // Delete a few PublicProfiles
     * const { count } = await prisma.publicProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicProfileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicProfileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicProfiles
     * const publicProfile = await prisma.publicProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicProfileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicProfile.
     * @param {PublicProfileUpsertArgs} args - Arguments to update or create a PublicProfile.
     * @example
     * // Update or create a PublicProfile
     * const publicProfile = await prisma.publicProfile.upsert({
     *   create: {
     *     // ... data to create a PublicProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicProfile we want to update
     *   }
     * })
    **/
    upsert<T extends PublicProfileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublicProfileUpsertArgs<ExtArgs>>
    ): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PublicProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileCountArgs} args - Arguments to filter PublicProfiles to count.
     * @example
     * // Count the number of PublicProfiles
     * const count = await prisma.publicProfile.count({
     *   where: {
     *     // ... the filter for the PublicProfiles we want to count
     *   }
     * })
    **/
    count<T extends PublicProfileCountArgs>(
      args?: Subset<T, PublicProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicProfileAggregateArgs>(args: Subset<T, PublicProfileAggregateArgs>): Prisma.PrismaPromise<GetPublicProfileAggregateType<T>>

    /**
     * Group by PublicProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicProfileGroupByArgs['orderBy'] }
        : { orderBy?: PublicProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PublicProfileClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    User<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    Game<T extends PublicProfile$GameArgs<ExtArgs> = {}>(args?: Subset<T, PublicProfile$GameArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GamePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PublicProfile base type for findUnique actions
   */
  export type PublicProfileFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where: PublicProfileWhereUniqueInput
  }

  /**
   * PublicProfile findUnique
   */
  export interface PublicProfileFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PublicProfileFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicProfile findUniqueOrThrow
   */
  export type PublicProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile base type for findFirst actions
   */
  export type PublicProfileFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: Enumerable<PublicProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicProfiles.
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicProfiles.
     */
    distinct?: Enumerable<PublicProfileScalarFieldEnum>
  }

  /**
   * PublicProfile findFirst
   */
  export interface PublicProfileFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PublicProfileFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PublicProfile findFirstOrThrow
   */
  export type PublicProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfile to fetch.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: Enumerable<PublicProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicProfiles.
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicProfiles.
     */
    distinct?: Enumerable<PublicProfileScalarFieldEnum>
  }


  /**
   * PublicProfile findMany
   */
  export type PublicProfileFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter, which PublicProfiles to fetch.
     */
    where?: PublicProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicProfiles to fetch.
     */
    orderBy?: Enumerable<PublicProfileOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicProfiles.
     */
    cursor?: PublicProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicProfiles.
     */
    skip?: number
    distinct?: Enumerable<PublicProfileScalarFieldEnum>
  }


  /**
   * PublicProfile create
   */
  export type PublicProfileCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicProfile.
     */
    data: XOR<PublicProfileCreateInput, PublicProfileUncheckedCreateInput>
  }


  /**
   * PublicProfile createMany
   */
  export type PublicProfileCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicProfiles.
     */
    data: Enumerable<PublicProfileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PublicProfile update
   */
  export type PublicProfileUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicProfile.
     */
    data: XOR<PublicProfileUpdateInput, PublicProfileUncheckedUpdateInput>
    /**
     * Choose, which PublicProfile to update.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile updateMany
   */
  export type PublicProfileUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicProfiles.
     */
    data: XOR<PublicProfileUpdateManyMutationInput, PublicProfileUncheckedUpdateManyInput>
    /**
     * Filter which PublicProfiles to update
     */
    where?: PublicProfileWhereInput
  }


  /**
   * PublicProfile upsert
   */
  export type PublicProfileUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicProfile to update in case it exists.
     */
    where: PublicProfileWhereUniqueInput
    /**
     * In case the PublicProfile found by the `where` argument doesn't exist, create a new PublicProfile with this data.
     */
    create: XOR<PublicProfileCreateInput, PublicProfileUncheckedCreateInput>
    /**
     * In case the PublicProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicProfileUpdateInput, PublicProfileUncheckedUpdateInput>
  }


  /**
   * PublicProfile delete
   */
  export type PublicProfileDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
    /**
     * Filter which PublicProfile to delete.
     */
    where: PublicProfileWhereUniqueInput
  }


  /**
   * PublicProfile deleteMany
   */
  export type PublicProfileDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicProfiles to delete
     */
    where?: PublicProfileWhereInput
  }


  /**
   * PublicProfile.Game
   */
  export type PublicProfile$GameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * PublicProfile without action
   */
  export type PublicProfileArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicProfile
     */
    select?: PublicProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PublicProfileInclude<ExtArgs> | null
  }



  /**
   * Model Game
   */


  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    number: number | null
    year: number | null
    currentDay: number | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    publicProfileId: number | null
    score: number | null
    rankId: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    number: number | null
    year: number | null
    currentDay: number | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    publicProfileId: number | null
    score: number | null
    rankId: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    userId: string | null
    number: number | null
    year: number | null
    name: string | null
    playerName: string | null
    currentDay: number | null
    currentDayCompleted: boolean | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    repositoryLink: string | null
    progressSheetLink: string | null
    public: boolean | null
    publicProfileId: number | null
    score: number | null
    rankId: number | null
    dateCompleted: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    userId: string | null
    number: number | null
    year: number | null
    name: string | null
    playerName: string | null
    currentDay: number | null
    currentDayCompleted: boolean | null
    currentRerollTokens: number | null
    rerollTokensSpent: number | null
    repositoryLink: string | null
    progressSheetLink: string | null
    public: boolean | null
    publicProfileId: number | null
    score: number | null
    rankId: number | null
    dateCompleted: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    dateCreated: number
    userId: number
    number: number
    year: number
    name: number
    playerName: number
    currentDay: number
    currentDayCompleted: number
    currentRerollTokens: number
    rerollTokensSpent: number
    repositoryLink: number
    progressSheetLink: number
    public: number
    publicProfileId: number
    score: number
    rankId: number
    dateCompleted: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    number?: true
    year?: true
    currentDay?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    publicProfileId?: true
    score?: true
    rankId?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    number?: true
    year?: true
    currentDay?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    publicProfileId?: true
    score?: true
    rankId?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    dateCreated?: true
    userId?: true
    number?: true
    year?: true
    name?: true
    playerName?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    repositoryLink?: true
    progressSheetLink?: true
    public?: true
    publicProfileId?: true
    score?: true
    rankId?: true
    dateCompleted?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    userId?: true
    number?: true
    year?: true
    name?: true
    playerName?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    repositoryLink?: true
    progressSheetLink?: true
    public?: true
    publicProfileId?: true
    score?: true
    rankId?: true
    dateCompleted?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    dateCreated?: true
    userId?: true
    number?: true
    year?: true
    name?: true
    playerName?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensSpent?: true
    repositoryLink?: true
    progressSheetLink?: true
    public?: true
    publicProfileId?: true
    score?: true
    rankId?: true
    dateCompleted?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithAggregationInput>
    by: GameScalarFieldEnum[]
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }


  export type GameGroupByOutputType = {
    id: number
    dateCreated: Date
    userId: string
    number: number
    year: number
    name: string
    playerName: string | null
    currentDay: number
    currentDayCompleted: boolean
    currentRerollTokens: number
    rerollTokensSpent: number
    repositoryLink: string | null
    progressSheetLink: string | null
    public: boolean
    publicProfileId: number | null
    score: number
    rankId: number | null
    dateCompleted: Date | null
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    userId?: boolean
    number?: boolean
    year?: boolean
    name?: boolean
    playerName?: boolean
    currentDay?: boolean
    currentDayCompleted?: boolean
    currentRerollTokens?: boolean
    rerollTokensSpent?: boolean
    repositoryLink?: boolean
    progressSheetLink?: boolean
    public?: boolean
    publicProfileId?: boolean
    score?: boolean
    rankId?: boolean
    dateCompleted?: boolean
    User?: boolean | UserArgs<ExtArgs>
    Rank?: boolean | RankArgs<ExtArgs>
    Day?: boolean | Game$DayArgs<ExtArgs>
    PublicProfile?: boolean | PublicProfileArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    userId?: boolean
    number?: boolean
    year?: boolean
    name?: boolean
    playerName?: boolean
    currentDay?: boolean
    currentDayCompleted?: boolean
    currentRerollTokens?: boolean
    rerollTokensSpent?: boolean
    repositoryLink?: boolean
    progressSheetLink?: boolean
    public?: boolean
    publicProfileId?: boolean
    score?: boolean
    rankId?: boolean
    dateCompleted?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    User?: boolean | UserArgs<ExtArgs>
    Rank?: boolean | RankArgs<ExtArgs>
    Day?: boolean | Game$DayArgs<ExtArgs>
    PublicProfile?: boolean | PublicProfileArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeArgs<ExtArgs>
  }


  type GameGetPayload<S extends boolean | null | undefined | GameArgs> = $Types.GetResult<GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GameFindManyArgs, 'select' | 'include'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GameFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Game'> extends True ? Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Game that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GameFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Game'> extends True ? Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Game that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GamePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
    **/
    create<T extends GameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GameCreateArgs<ExtArgs>>
    ): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Games.
     *     @param {GameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
    **/
    delete<T extends GameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GameDeleteArgs<ExtArgs>>
    ): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpdateArgs<ExtArgs>>
    ): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
    **/
    upsert<T extends GameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GameUpsertArgs<ExtArgs>>
    ): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    User<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    Rank<T extends RankArgs<ExtArgs> = {}>(args?: Subset<T, RankArgs<ExtArgs>>): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    Day<T extends Game$DayArgs<ExtArgs> = {}>(args?: Subset<T, Game$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    PublicProfile<T extends PublicProfileArgs<ExtArgs> = {}>(args?: Subset<T, PublicProfileArgs<ExtArgs>>): Prisma__PublicProfileClient<$Types.GetResult<PublicProfilePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Game base type for findUnique actions
   */
  export type GameFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUnique
   */
  export interface GameFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GameFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game base type for findFirst actions
   */
  export type GameFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: Enumerable<GameScalarFieldEnum>
  }

  /**
   * Game findFirst
   */
  export interface GameFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GameFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }


  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: Enumerable<GameCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
  }


  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }


  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }


  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
  }


  /**
   * Game.Day
   */
  export type Game$DayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Game without action
   */
  export type GameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
  }



  /**
   * Model Rank
   */


  export type AggregateRank = {
    _count: RankCountAggregateOutputType | null
    _avg: RankAvgAggregateOutputType | null
    _sum: RankSumAggregateOutputType | null
    _min: RankMinAggregateOutputType | null
    _max: RankMaxAggregateOutputType | null
  }

  export type RankAvgAggregateOutputType = {
    id: number | null
    minimumScore: number | null
  }

  export type RankSumAggregateOutputType = {
    id: number | null
    minimumScore: number | null
  }

  export type RankMinAggregateOutputType = {
    id: number | null
    name: string | null
    minimumScore: number | null
  }

  export type RankMaxAggregateOutputType = {
    id: number | null
    name: string | null
    minimumScore: number | null
  }

  export type RankCountAggregateOutputType = {
    id: number
    name: number
    minimumScore: number
    _all: number
  }


  export type RankAvgAggregateInputType = {
    id?: true
    minimumScore?: true
  }

  export type RankSumAggregateInputType = {
    id?: true
    minimumScore?: true
  }

  export type RankMinAggregateInputType = {
    id?: true
    name?: true
    minimumScore?: true
  }

  export type RankMaxAggregateInputType = {
    id?: true
    name?: true
    minimumScore?: true
  }

  export type RankCountAggregateInputType = {
    id?: true
    name?: true
    minimumScore?: true
    _all?: true
  }

  export type RankAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rank to aggregate.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: Enumerable<RankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ranks
    **/
    _count?: true | RankCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankMaxAggregateInputType
  }

  export type GetRankAggregateType<T extends RankAggregateArgs> = {
        [P in keyof T & keyof AggregateRank]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRank[P]>
      : GetScalarType<T[P], AggregateRank[P]>
  }




  export type RankGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RankWhereInput
    orderBy?: Enumerable<RankOrderByWithAggregationInput>
    by: RankScalarFieldEnum[]
    having?: RankScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankCountAggregateInputType | true
    _avg?: RankAvgAggregateInputType
    _sum?: RankSumAggregateInputType
    _min?: RankMinAggregateInputType
    _max?: RankMaxAggregateInputType
  }


  export type RankGroupByOutputType = {
    id: number
    name: string
    minimumScore: number
    _count: RankCountAggregateOutputType | null
    _avg: RankAvgAggregateOutputType | null
    _sum: RankSumAggregateOutputType | null
    _min: RankMinAggregateOutputType | null
    _max: RankMaxAggregateOutputType | null
  }

  type GetRankGroupByPayload<T extends RankGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RankGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankGroupByOutputType[P]>
            : GetScalarType<T[P], RankGroupByOutputType[P]>
        }
      >
    >


  export type RankSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    minimumScore?: boolean
    Game?: boolean | Rank$GameArgs<ExtArgs>
    _count?: boolean | RankCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["rank"]>

  export type RankSelectScalar = {
    id?: boolean
    name?: boolean
    minimumScore?: boolean
  }

  export type RankInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Game?: boolean | Rank$GameArgs<ExtArgs>
    _count?: boolean | RankCountOutputTypeArgs<ExtArgs>
  }


  type RankGetPayload<S extends boolean | null | undefined | RankArgs> = $Types.GetResult<RankPayload, S>

  type RankCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RankFindManyArgs, 'select' | 'include'> & {
      select?: RankCountAggregateInputType | true
    }

  export interface RankDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rank'], meta: { name: 'Rank' } }
    /**
     * Find zero or one Rank that matches the filter.
     * @param {RankFindUniqueArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RankFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RankFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Rank'> extends True ? Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Rank that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RankFindUniqueOrThrowArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RankFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RankFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Rank that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankFindFirstArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RankFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RankFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Rank'> extends True ? Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Rank that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankFindFirstOrThrowArgs} args - Arguments to find a Rank
     * @example
     * // Get one Rank
     * const rank = await prisma.rank.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RankFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RankFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Ranks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ranks
     * const ranks = await prisma.rank.findMany()
     * 
     * // Get first 10 Ranks
     * const ranks = await prisma.rank.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankWithIdOnly = await prisma.rank.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RankFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RankFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RankPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Rank.
     * @param {RankCreateArgs} args - Arguments to create a Rank.
     * @example
     * // Create one Rank
     * const Rank = await prisma.rank.create({
     *   data: {
     *     // ... data to create a Rank
     *   }
     * })
     * 
    **/
    create<T extends RankCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RankCreateArgs<ExtArgs>>
    ): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Ranks.
     *     @param {RankCreateManyArgs} args - Arguments to create many Ranks.
     *     @example
     *     // Create many Ranks
     *     const rank = await prisma.rank.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RankCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RankCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rank.
     * @param {RankDeleteArgs} args - Arguments to delete one Rank.
     * @example
     * // Delete one Rank
     * const Rank = await prisma.rank.delete({
     *   where: {
     *     // ... filter to delete one Rank
     *   }
     * })
     * 
    **/
    delete<T extends RankDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RankDeleteArgs<ExtArgs>>
    ): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Rank.
     * @param {RankUpdateArgs} args - Arguments to update one Rank.
     * @example
     * // Update one Rank
     * const rank = await prisma.rank.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RankUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RankUpdateArgs<ExtArgs>>
    ): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Ranks.
     * @param {RankDeleteManyArgs} args - Arguments to filter Ranks to delete.
     * @example
     * // Delete a few Ranks
     * const { count } = await prisma.rank.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RankDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RankDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ranks
     * const rank = await prisma.rank.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RankUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RankUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rank.
     * @param {RankUpsertArgs} args - Arguments to update or create a Rank.
     * @example
     * // Update or create a Rank
     * const rank = await prisma.rank.upsert({
     *   create: {
     *     // ... data to create a Rank
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rank we want to update
     *   }
     * })
    **/
    upsert<T extends RankUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RankUpsertArgs<ExtArgs>>
    ): Prisma__RankClient<$Types.GetResult<RankPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankCountArgs} args - Arguments to filter Ranks to count.
     * @example
     * // Count the number of Ranks
     * const count = await prisma.rank.count({
     *   where: {
     *     // ... the filter for the Ranks we want to count
     *   }
     * })
    **/
    count<T extends RankCountArgs>(
      args?: Subset<T, RankCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RankAggregateArgs>(args: Subset<T, RankAggregateArgs>): Prisma.PrismaPromise<GetRankAggregateType<T>>

    /**
     * Group by Rank.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RankGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankGroupByArgs['orderBy'] }
        : { orderBy?: RankGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RankGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Rank.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RankClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Game<T extends Rank$GameArgs<ExtArgs> = {}>(args?: Subset<T, Rank$GameArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GamePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Rank base type for findUnique actions
   */
  export type RankFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where: RankWhereUniqueInput
  }

  /**
   * Rank findUnique
   */
  export interface RankFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RankFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rank findUniqueOrThrow
   */
  export type RankFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where: RankWhereUniqueInput
  }


  /**
   * Rank base type for findFirst actions
   */
  export type RankFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: Enumerable<RankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ranks.
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ranks.
     */
    distinct?: Enumerable<RankScalarFieldEnum>
  }

  /**
   * Rank findFirst
   */
  export interface RankFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RankFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Rank findFirstOrThrow
   */
  export type RankFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Rank to fetch.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: Enumerable<RankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ranks.
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ranks.
     */
    distinct?: Enumerable<RankScalarFieldEnum>
  }


  /**
   * Rank findMany
   */
  export type RankFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter, which Ranks to fetch.
     */
    where?: RankWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ranks to fetch.
     */
    orderBy?: Enumerable<RankOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ranks.
     */
    cursor?: RankWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ranks.
     */
    skip?: number
    distinct?: Enumerable<RankScalarFieldEnum>
  }


  /**
   * Rank create
   */
  export type RankCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * The data needed to create a Rank.
     */
    data: XOR<RankCreateInput, RankUncheckedCreateInput>
  }


  /**
   * Rank createMany
   */
  export type RankCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ranks.
     */
    data: Enumerable<RankCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Rank update
   */
  export type RankUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * The data needed to update a Rank.
     */
    data: XOR<RankUpdateInput, RankUncheckedUpdateInput>
    /**
     * Choose, which Rank to update.
     */
    where: RankWhereUniqueInput
  }


  /**
   * Rank updateMany
   */
  export type RankUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ranks.
     */
    data: XOR<RankUpdateManyMutationInput, RankUncheckedUpdateManyInput>
    /**
     * Filter which Ranks to update
     */
    where?: RankWhereInput
  }


  /**
   * Rank upsert
   */
  export type RankUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * The filter to search for the Rank to update in case it exists.
     */
    where: RankWhereUniqueInput
    /**
     * In case the Rank found by the `where` argument doesn't exist, create a new Rank with this data.
     */
    create: XOR<RankCreateInput, RankUncheckedCreateInput>
    /**
     * In case the Rank was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankUpdateInput, RankUncheckedUpdateInput>
  }


  /**
   * Rank delete
   */
  export type RankDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
    /**
     * Filter which Rank to delete.
     */
    where: RankWhereUniqueInput
  }


  /**
   * Rank deleteMany
   */
  export type RankDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ranks to delete
     */
    where?: RankWhereInput
  }


  /**
   * Rank.Game
   */
  export type Rank$GameArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: Enumerable<GameOrderByWithRelationInput>
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GameScalarFieldEnum>
  }


  /**
   * Rank without action
   */
  export type RankArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rank
     */
    select?: RankSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RankInclude<ExtArgs> | null
  }



  /**
   * Model Day
   */


  export type AggregateDay = {
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  export type DayAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    netScore: number | null
  }

  export type DaySumAggregateOutputType = {
    id: number | null
    gameId: number | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    netScore: number | null
  }

  export type DayMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    gameId: number | null
    userId: string | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    netScore: number | null
  }

  export type DayMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    gameId: number | null
    userId: string | null
    gameNumber: number | null
    number: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    rerollTokensSpentDuringPart2: number | null
    netScore: number | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    dateCreated: number
    gameId: number
    userId: number
    gameNumber: number
    number: number
    challengeModifierId: number
    modifierOptionId: number
    dateFirstRolled: number
    part1Completed: number
    modifierWhenPart1CompletedId: number
    optionWhenPart1CompletedId: number
    part2Completed: number
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    rerollTokensSpentDuringPart2: number
    netScore: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    id?: true
    gameId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    netScore?: true
  }

  export type DaySumAggregateInputType = {
    id?: true
    gameId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    netScore?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    dateCreated?: true
    gameId?: true
    userId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    dateFirstRolled?: true
    part1Completed?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    netScore?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    gameId?: true
    userId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    dateFirstRolled?: true
    part1Completed?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    netScore?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    dateCreated?: true
    gameId?: true
    userId?: true
    gameNumber?: true
    number?: true
    challengeModifierId?: true
    modifierOptionId?: true
    dateFirstRolled?: true
    part1Completed?: true
    modifierWhenPart1CompletedId?: true
    optionWhenPart1CompletedId?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    rerollTokensSpentDuringPart2?: true
    netScore?: true
    _all?: true
  }

  export type DayAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Day to aggregate.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Days
    **/
    _count?: true | DayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayMaxAggregateInputType
  }

  export type GetDayAggregateType<T extends DayAggregateArgs> = {
        [P in keyof T & keyof AggregateDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDay[P]>
      : GetScalarType<T[P], AggregateDay[P]>
  }




  export type DayGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithAggregationInput>
    by: DayScalarFieldEnum[]
    having?: DayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayCountAggregateInputType | true
    _avg?: DayAvgAggregateInputType
    _sum?: DaySumAggregateInputType
    _min?: DayMinAggregateInputType
    _max?: DayMaxAggregateInputType
  }


  export type DayGroupByOutputType = {
    id: number
    dateCreated: Date
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId: number | null
    modifierOptionId: number | null
    dateFirstRolled: Date | null
    part1Completed: Date | null
    modifierWhenPart1CompletedId: number | null
    optionWhenPart1CompletedId: number | null
    part2Completed: Date | null
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    rerollTokensSpentDuringPart2: number
    netScore: number
    _count: DayCountAggregateOutputType | null
    _avg: DayAvgAggregateOutputType | null
    _sum: DaySumAggregateOutputType | null
    _min: DayMinAggregateOutputType | null
    _max: DayMaxAggregateOutputType | null
  }

  type GetDayGroupByPayload<T extends DayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayGroupByOutputType[P]>
            : GetScalarType<T[P], DayGroupByOutputType[P]>
        }
      >
    >


  export type DaySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    gameId?: boolean
    userId?: boolean
    gameNumber?: boolean
    number?: boolean
    challengeModifierId?: boolean
    modifierOptionId?: boolean
    dateFirstRolled?: boolean
    part1Completed?: boolean
    modifierWhenPart1CompletedId?: boolean
    optionWhenPart1CompletedId?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: boolean
    modifierOptionRerollsUsed?: boolean
    rerollTokensSpentDuringPart2?: boolean
    netScore?: boolean
    ExcludedChallengeModifiers?: boolean | Day$ExcludedChallengeModifiersArgs<ExtArgs>
    ExcludedModifierOptions?: boolean | Day$ExcludedModifierOptionsArgs<ExtArgs>
    IncludedCustomChallengeModifiers?: boolean | Day$IncludedCustomChallengeModifiersArgs<ExtArgs>
    IncludedCustomModifierOptions?: boolean | Day$IncludedCustomModifierOptionsArgs<ExtArgs>
    Game?: boolean | GameArgs<ExtArgs>
    ModifierWhenPart1Completed?: boolean | ChallengeModifierArgs<ExtArgs>
    OptionWhenPart1Completed?: boolean | ModifierOptionArgs<ExtArgs>
    ChallengeModifier?: boolean | ChallengeModifierArgs<ExtArgs>
    ModifierOption?: boolean | ModifierOptionArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectScalar = {
    id?: boolean
    dateCreated?: boolean
    gameId?: boolean
    userId?: boolean
    gameNumber?: boolean
    number?: boolean
    challengeModifierId?: boolean
    modifierOptionId?: boolean
    dateFirstRolled?: boolean
    part1Completed?: boolean
    modifierWhenPart1CompletedId?: boolean
    optionWhenPart1CompletedId?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: boolean
    modifierOptionRerollsUsed?: boolean
    rerollTokensSpentDuringPart2?: boolean
    netScore?: boolean
  }

  export type DayInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ExcludedChallengeModifiers?: boolean | Day$ExcludedChallengeModifiersArgs<ExtArgs>
    ExcludedModifierOptions?: boolean | Day$ExcludedModifierOptionsArgs<ExtArgs>
    IncludedCustomChallengeModifiers?: boolean | Day$IncludedCustomChallengeModifiersArgs<ExtArgs>
    IncludedCustomModifierOptions?: boolean | Day$IncludedCustomModifierOptionsArgs<ExtArgs>
    Game?: boolean | GameArgs<ExtArgs>
    ModifierWhenPart1Completed?: boolean | ChallengeModifierArgs<ExtArgs>
    OptionWhenPart1Completed?: boolean | ModifierOptionArgs<ExtArgs>
    ChallengeModifier?: boolean | ChallengeModifierArgs<ExtArgs>
    ModifierOption?: boolean | ModifierOptionArgs<ExtArgs>
    _count?: boolean | DayCountOutputTypeArgs<ExtArgs>
  }


  type DayGetPayload<S extends boolean | null | undefined | DayArgs> = $Types.GetResult<DayPayload, S>

  type DayCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DayFindManyArgs, 'select' | 'include'> & {
      select?: DayCountAggregateInputType | true
    }

  export interface DayDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Day'], meta: { name: 'Day' } }
    /**
     * Find zero or one Day that matches the filter.
     * @param {DayFindUniqueArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DayFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DayFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Day'> extends True ? Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Day that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DayFindUniqueOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Day that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DayFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DayFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Day'> extends True ? Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Day that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindFirstOrThrowArgs} args - Arguments to find a Day
     * @example
     * // Get one Day
     * const day = await prisma.day.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.day.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.day.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayWithIdOnly = await prisma.day.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Day.
     * @param {DayCreateArgs} args - Arguments to create a Day.
     * @example
     * // Create one Day
     * const Day = await prisma.day.create({
     *   data: {
     *     // ... data to create a Day
     *   }
     * })
     * 
    **/
    create<T extends DayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DayCreateArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Days.
     *     @param {DayCreateManyArgs} args - Arguments to create many Days.
     *     @example
     *     // Create many Days
     *     const day = await prisma.day.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Day.
     * @param {DayDeleteArgs} args - Arguments to delete one Day.
     * @example
     * // Delete one Day
     * const Day = await prisma.day.delete({
     *   where: {
     *     // ... filter to delete one Day
     *   }
     * })
     * 
    **/
    delete<T extends DayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DayDeleteArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Day.
     * @param {DayUpdateArgs} args - Arguments to update one Day.
     * @example
     * // Update one Day
     * const day = await prisma.day.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Days.
     * @param {DayDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.day.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const day = await prisma.day.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Day.
     * @param {DayUpsertArgs} args - Arguments to update or create a Day.
     * @example
     * // Update or create a Day
     * const day = await prisma.day.upsert({
     *   create: {
     *     // ... data to create a Day
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Day we want to update
     *   }
     * })
    **/
    upsert<T extends DayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DayUpsertArgs<ExtArgs>>
    ): Prisma__DayClient<$Types.GetResult<DayPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.day.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends DayCountArgs>(
      args?: Subset<T, DayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DayAggregateArgs>(args: Subset<T, DayAggregateArgs>): Prisma.PrismaPromise<GetDayAggregateType<T>>

    /**
     * Group by Day.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayGroupByArgs['orderBy'] }
        : { orderBy?: DayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Day.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DayClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExcludedChallengeModifiers<T extends Day$ExcludedChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, Day$ExcludedChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ExcludedModifierOptions<T extends Day$ExcludedModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Day$ExcludedModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    IncludedCustomChallengeModifiers<T extends Day$IncludedCustomChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, Day$IncludedCustomChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    IncludedCustomModifierOptions<T extends Day$IncludedCustomModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, Day$IncludedCustomModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    Game<T extends GameArgs<ExtArgs> = {}>(args?: Subset<T, GameArgs<ExtArgs>>): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    ModifierWhenPart1Completed<T extends ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifierArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    OptionWhenPart1Completed<T extends ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOptionArgs<ExtArgs>>): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    ChallengeModifier<T extends ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifierArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    ModifierOption<T extends ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOptionArgs<ExtArgs>>): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Day base type for findUnique actions
   */
  export type DayFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }

  /**
   * Day findUnique
   */
  export interface DayFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DayFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Day findUniqueOrThrow
   */
  export type DayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day base type for findFirst actions
   */
  export type DayFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: Enumerable<DayScalarFieldEnum>
  }

  /**
   * Day findFirst
   */
  export interface DayFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DayFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Day findFirstOrThrow
   */
  export type DayFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Day to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Days.
     */
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Day findMany
   */
  export type DayFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter, which Days to fetch.
     */
    where?: DayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Days to fetch.
     */
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Days.
     */
    cursor?: DayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Days.
     */
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * Day create
   */
  export type DayCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to create a Day.
     */
    data: XOR<DayCreateInput, DayUncheckedCreateInput>
  }


  /**
   * Day createMany
   */
  export type DayCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Days.
     */
    data: Enumerable<DayCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Day update
   */
  export type DayUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The data needed to update a Day.
     */
    data: XOR<DayUpdateInput, DayUncheckedUpdateInput>
    /**
     * Choose, which Day to update.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day updateMany
   */
  export type DayUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Days.
     */
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyInput>
    /**
     * Filter which Days to update
     */
    where?: DayWhereInput
  }


  /**
   * Day upsert
   */
  export type DayUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * The filter to search for the Day to update in case it exists.
     */
    where: DayWhereUniqueInput
    /**
     * In case the Day found by the `where` argument doesn't exist, create a new Day with this data.
     */
    create: XOR<DayCreateInput, DayUncheckedCreateInput>
    /**
     * In case the Day was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayUpdateInput, DayUncheckedUpdateInput>
  }


  /**
   * Day delete
   */
  export type DayDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    /**
     * Filter which Day to delete.
     */
    where: DayWhereUniqueInput
  }


  /**
   * Day deleteMany
   */
  export type DayDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Days to delete
     */
    where?: DayWhereInput
  }


  /**
   * Day.ExcludedChallengeModifiers
   */
  export type Day$ExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * Day.ExcludedModifierOptions
   */
  export type Day$ExcludedModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * Day.IncludedCustomChallengeModifiers
   */
  export type Day$IncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * Day.IncludedCustomModifierOptions
   */
  export type Day$IncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * Day without action
   */
  export type DayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
  }



  /**
   * Model ChallengeModifier
   */


  export type AggregateChallengeModifier = {
    _count: ChallengeModifierCountAggregateOutputType | null
    _avg: ChallengeModifierAvgAggregateOutputType | null
    _sum: ChallengeModifierSumAggregateOutputType | null
    _min: ChallengeModifierMinAggregateOutputType | null
    _max: ChallengeModifierMaxAggregateOutputType | null
  }

  export type ChallengeModifierAvgAggregateOutputType = {
    id: number | null
  }

  export type ChallengeModifierSumAggregateOutputType = {
    id: number | null
  }

  export type ChallengeModifierMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    text: string | null
    hasOptions: boolean | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    public: boolean | null
  }

  export type ChallengeModifierMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    name: string | null
    text: string | null
    hasOptions: boolean | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    public: boolean | null
  }

  export type ChallengeModifierCountAggregateOutputType = {
    id: number
    dateCreated: number
    name: number
    text: number
    hasOptions: number
    explanatoryUrl: number
    standard: number
    createdById: number
    public: number
    _all: number
  }


  export type ChallengeModifierAvgAggregateInputType = {
    id?: true
  }

  export type ChallengeModifierSumAggregateInputType = {
    id?: true
  }

  export type ChallengeModifierMinAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    text?: true
    hasOptions?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    public?: true
  }

  export type ChallengeModifierMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    text?: true
    hasOptions?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    public?: true
  }

  export type ChallengeModifierCountAggregateInputType = {
    id?: true
    dateCreated?: true
    name?: true
    text?: true
    hasOptions?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    public?: true
    _all?: true
  }

  export type ChallengeModifierAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeModifier to aggregate.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeModifiers
    **/
    _count?: true | ChallengeModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeModifierMaxAggregateInputType
  }

  export type GetChallengeModifierAggregateType<T extends ChallengeModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeModifier[P]>
      : GetScalarType<T[P], AggregateChallengeModifier[P]>
  }




  export type ChallengeModifierGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithAggregationInput>
    by: ChallengeModifierScalarFieldEnum[]
    having?: ChallengeModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeModifierCountAggregateInputType | true
    _avg?: ChallengeModifierAvgAggregateInputType
    _sum?: ChallengeModifierSumAggregateInputType
    _min?: ChallengeModifierMinAggregateInputType
    _max?: ChallengeModifierMaxAggregateInputType
  }


  export type ChallengeModifierGroupByOutputType = {
    id: number
    dateCreated: Date
    name: string
    text: string
    hasOptions: boolean
    explanatoryUrl: string | null
    standard: boolean
    createdById: string | null
    public: boolean
    _count: ChallengeModifierCountAggregateOutputType | null
    _avg: ChallengeModifierAvgAggregateOutputType | null
    _sum: ChallengeModifierSumAggregateOutputType | null
    _min: ChallengeModifierMinAggregateOutputType | null
    _max: ChallengeModifierMaxAggregateOutputType | null
  }

  type GetChallengeModifierGroupByPayload<T extends ChallengeModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChallengeModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeModifierGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeModifierGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeModifierSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    text?: boolean
    hasOptions?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    public?: boolean
    CreatedBy?: boolean | UserArgs<ExtArgs>
    ModifierOption?: boolean | ChallengeModifier$ModifierOptionArgs<ExtArgs>
    Day?: boolean | ChallengeModifier$DayArgs<ExtArgs>
    ModifierPackExcluded?: boolean | ChallengeModifier$ModifierPackExcludedArgs<ExtArgs>
    ModifierPackIncluded?: boolean | ChallengeModifier$ModifierPackIncludedArgs<ExtArgs>
    UserExcluded?: boolean | ChallengeModifier$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ChallengeModifier$UserIncludedArgs<ExtArgs>
    ExcludedFromDay?: boolean | ChallengeModifier$ExcludedFromDayArgs<ExtArgs>
    IncludedInDay?: boolean | ChallengeModifier$IncludedInDayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ChallengeModifier$DayCompletedInPart1Args<ExtArgs>
    _count?: boolean | ChallengeModifierCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["challengeModifier"]>

  export type ChallengeModifierSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    name?: boolean
    text?: boolean
    hasOptions?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    public?: boolean
  }

  export type ChallengeModifierInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    CreatedBy?: boolean | UserArgs<ExtArgs>
    ModifierOption?: boolean | ChallengeModifier$ModifierOptionArgs<ExtArgs>
    Day?: boolean | ChallengeModifier$DayArgs<ExtArgs>
    ModifierPackExcluded?: boolean | ChallengeModifier$ModifierPackExcludedArgs<ExtArgs>
    ModifierPackIncluded?: boolean | ChallengeModifier$ModifierPackIncludedArgs<ExtArgs>
    UserExcluded?: boolean | ChallengeModifier$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ChallengeModifier$UserIncludedArgs<ExtArgs>
    ExcludedFromDay?: boolean | ChallengeModifier$ExcludedFromDayArgs<ExtArgs>
    IncludedInDay?: boolean | ChallengeModifier$IncludedInDayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ChallengeModifier$DayCompletedInPart1Args<ExtArgs>
    _count?: boolean | ChallengeModifierCountOutputTypeArgs<ExtArgs>
  }


  type ChallengeModifierGetPayload<S extends boolean | null | undefined | ChallengeModifierArgs> = $Types.GetResult<ChallengeModifierPayload, S>

  type ChallengeModifierCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ChallengeModifierFindManyArgs, 'select' | 'include'> & {
      select?: ChallengeModifierCountAggregateInputType | true
    }

  export interface ChallengeModifierDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeModifier'], meta: { name: 'ChallengeModifier' } }
    /**
     * Find zero or one ChallengeModifier that matches the filter.
     * @param {ChallengeModifierFindUniqueArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChallengeModifierFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChallengeModifierFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ChallengeModifier'> extends True ? Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ChallengeModifier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChallengeModifierFindUniqueOrThrowArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChallengeModifierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ChallengeModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierFindFirstArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChallengeModifierFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChallengeModifierFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ChallengeModifier'> extends True ? Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ChallengeModifier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierFindFirstOrThrowArgs} args - Arguments to find a ChallengeModifier
     * @example
     * // Get one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChallengeModifierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ChallengeModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeModifiers
     * const challengeModifiers = await prisma.challengeModifier.findMany()
     * 
     * // Get first 10 ChallengeModifiers
     * const challengeModifiers = await prisma.challengeModifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeModifierWithIdOnly = await prisma.challengeModifier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChallengeModifierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ChallengeModifier.
     * @param {ChallengeModifierCreateArgs} args - Arguments to create a ChallengeModifier.
     * @example
     * // Create one ChallengeModifier
     * const ChallengeModifier = await prisma.challengeModifier.create({
     *   data: {
     *     // ... data to create a ChallengeModifier
     *   }
     * })
     * 
    **/
    create<T extends ChallengeModifierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierCreateArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ChallengeModifiers.
     *     @param {ChallengeModifierCreateManyArgs} args - Arguments to create many ChallengeModifiers.
     *     @example
     *     // Create many ChallengeModifiers
     *     const challengeModifier = await prisma.challengeModifier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChallengeModifierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChallengeModifier.
     * @param {ChallengeModifierDeleteArgs} args - Arguments to delete one ChallengeModifier.
     * @example
     * // Delete one ChallengeModifier
     * const ChallengeModifier = await prisma.challengeModifier.delete({
     *   where: {
     *     // ... filter to delete one ChallengeModifier
     *   }
     * })
     * 
    **/
    delete<T extends ChallengeModifierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierDeleteArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ChallengeModifier.
     * @param {ChallengeModifierUpdateArgs} args - Arguments to update one ChallengeModifier.
     * @example
     * // Update one ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChallengeModifierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierUpdateArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ChallengeModifiers.
     * @param {ChallengeModifierDeleteManyArgs} args - Arguments to filter ChallengeModifiers to delete.
     * @example
     * // Delete a few ChallengeModifiers
     * const { count } = await prisma.challengeModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChallengeModifierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChallengeModifierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeModifiers
     * const challengeModifier = await prisma.challengeModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChallengeModifierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChallengeModifier.
     * @param {ChallengeModifierUpsertArgs} args - Arguments to update or create a ChallengeModifier.
     * @example
     * // Update or create a ChallengeModifier
     * const challengeModifier = await prisma.challengeModifier.upsert({
     *   create: {
     *     // ... data to create a ChallengeModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeModifier we want to update
     *   }
     * })
    **/
    upsert<T extends ChallengeModifierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChallengeModifierUpsertArgs<ExtArgs>>
    ): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ChallengeModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierCountArgs} args - Arguments to filter ChallengeModifiers to count.
     * @example
     * // Count the number of ChallengeModifiers
     * const count = await prisma.challengeModifier.count({
     *   where: {
     *     // ... the filter for the ChallengeModifiers we want to count
     *   }
     * })
    **/
    count<T extends ChallengeModifierCountArgs>(
      args?: Subset<T, ChallengeModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengeModifierAggregateArgs>(args: Subset<T, ChallengeModifierAggregateArgs>): Prisma.PrismaPromise<GetChallengeModifierAggregateType<T>>

    /**
     * Group by ChallengeModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeModifierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChallengeModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeModifierGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeModifierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChallengeModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChallengeModifierClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    CreatedBy<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    ModifierOption<T extends ChallengeModifier$ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    Day<T extends ChallengeModifier$DayArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ModifierPackExcluded<T extends ChallengeModifier$ModifierPackExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierPackExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ModifierPackIncluded<T extends ChallengeModifier$ModifierPackIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierPackIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findMany', never>| Null>;

    UserExcluded<T extends ChallengeModifier$UserExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$UserExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    UserIncluded<T extends ChallengeModifier$UserIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$UserIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ExcludedFromDay<T extends ChallengeModifier$ExcludedFromDayArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ExcludedFromDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    IncludedInDay<T extends ChallengeModifier$IncludedInDayArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$IncludedInDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    DayCompletedInPart1<T extends ChallengeModifier$DayCompletedInPart1Args<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$DayCompletedInPart1Args<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ChallengeModifier base type for findUnique actions
   */
  export type ChallengeModifierFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where: ChallengeModifierWhereUniqueInput
  }

  /**
   * ChallengeModifier findUnique
   */
  export interface ChallengeModifierFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ChallengeModifierFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ChallengeModifier findUniqueOrThrow
   */
  export type ChallengeModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier base type for findFirst actions
   */
  export type ChallengeModifierFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeModifiers.
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeModifiers.
     */
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }

  /**
   * ChallengeModifier findFirst
   */
  export interface ChallengeModifierFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ChallengeModifierFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ChallengeModifier findFirstOrThrow
   */
  export type ChallengeModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifier to fetch.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeModifiers.
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeModifiers.
     */
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * ChallengeModifier findMany
   */
  export type ChallengeModifierFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeModifiers to fetch.
     */
    where?: ChallengeModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeModifiers to fetch.
     */
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeModifiers.
     */
    cursor?: ChallengeModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeModifiers.
     */
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * ChallengeModifier create
   */
  export type ChallengeModifierCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeModifier.
     */
    data: XOR<ChallengeModifierCreateInput, ChallengeModifierUncheckedCreateInput>
  }


  /**
   * ChallengeModifier createMany
   */
  export type ChallengeModifierCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeModifiers.
     */
    data: Enumerable<ChallengeModifierCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ChallengeModifier update
   */
  export type ChallengeModifierUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeModifier.
     */
    data: XOR<ChallengeModifierUpdateInput, ChallengeModifierUncheckedUpdateInput>
    /**
     * Choose, which ChallengeModifier to update.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier updateMany
   */
  export type ChallengeModifierUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeModifiers.
     */
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeModifiers to update
     */
    where?: ChallengeModifierWhereInput
  }


  /**
   * ChallengeModifier upsert
   */
  export type ChallengeModifierUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeModifier to update in case it exists.
     */
    where: ChallengeModifierWhereUniqueInput
    /**
     * In case the ChallengeModifier found by the `where` argument doesn't exist, create a new ChallengeModifier with this data.
     */
    create: XOR<ChallengeModifierCreateInput, ChallengeModifierUncheckedCreateInput>
    /**
     * In case the ChallengeModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeModifierUpdateInput, ChallengeModifierUncheckedUpdateInput>
  }


  /**
   * ChallengeModifier delete
   */
  export type ChallengeModifierDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    /**
     * Filter which ChallengeModifier to delete.
     */
    where: ChallengeModifierWhereUniqueInput
  }


  /**
   * ChallengeModifier deleteMany
   */
  export type ChallengeModifierDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeModifiers to delete
     */
    where?: ChallengeModifierWhereInput
  }


  /**
   * ChallengeModifier.ModifierOption
   */
  export type ChallengeModifier$ModifierOptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * ChallengeModifier.Day
   */
  export type ChallengeModifier$DayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ChallengeModifier.ModifierPackExcluded
   */
  export type ChallengeModifier$ModifierPackExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * ChallengeModifier.ModifierPackIncluded
   */
  export type ChallengeModifier$ModifierPackIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * ChallengeModifier.UserExcluded
   */
  export type ChallengeModifier$UserExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * ChallengeModifier.UserIncluded
   */
  export type ChallengeModifier$UserIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * ChallengeModifier.ExcludedFromDay
   */
  export type ChallengeModifier$ExcludedFromDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ChallengeModifier.IncludedInDay
   */
  export type ChallengeModifier$IncludedInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ChallengeModifier.DayCompletedInPart1
   */
  export type ChallengeModifier$DayCompletedInPart1Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ChallengeModifier without action
   */
  export type ChallengeModifierArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
  }



  /**
   * Model ModifierOption
   */


  export type AggregateModifierOption = {
    _count: ModifierOptionCountAggregateOutputType | null
    _avg: ModifierOptionAvgAggregateOutputType | null
    _sum: ModifierOptionSumAggregateOutputType | null
    _min: ModifierOptionMinAggregateOutputType | null
    _max: ModifierOptionMaxAggregateOutputType | null
  }

  export type ModifierOptionAvgAggregateOutputType = {
    id: number | null
    challengeModifierId: number | null
  }

  export type ModifierOptionSumAggregateOutputType = {
    id: number | null
    challengeModifierId: number | null
  }

  export type ModifierOptionMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    challengeModifierId: number | null
    name: string | null
    text: string | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    public: boolean | null
  }

  export type ModifierOptionMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    challengeModifierId: number | null
    name: string | null
    text: string | null
    explanatoryUrl: string | null
    standard: boolean | null
    createdById: string | null
    public: boolean | null
  }

  export type ModifierOptionCountAggregateOutputType = {
    id: number
    dateCreated: number
    challengeModifierId: number
    name: number
    text: number
    explanatoryUrl: number
    standard: number
    createdById: number
    public: number
    _all: number
  }


  export type ModifierOptionAvgAggregateInputType = {
    id?: true
    challengeModifierId?: true
  }

  export type ModifierOptionSumAggregateInputType = {
    id?: true
    challengeModifierId?: true
  }

  export type ModifierOptionMinAggregateInputType = {
    id?: true
    dateCreated?: true
    challengeModifierId?: true
    name?: true
    text?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    public?: true
  }

  export type ModifierOptionMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    challengeModifierId?: true
    name?: true
    text?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    public?: true
  }

  export type ModifierOptionCountAggregateInputType = {
    id?: true
    dateCreated?: true
    challengeModifierId?: true
    name?: true
    text?: true
    explanatoryUrl?: true
    standard?: true
    createdById?: true
    public?: true
    _all?: true
  }

  export type ModifierOptionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierOption to aggregate.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModifierOptions
    **/
    _count?: true | ModifierOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierOptionMaxAggregateInputType
  }

  export type GetModifierOptionAggregateType<T extends ModifierOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateModifierOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifierOption[P]>
      : GetScalarType<T[P], AggregateModifierOption[P]>
  }




  export type ModifierOptionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithAggregationInput>
    by: ModifierOptionScalarFieldEnum[]
    having?: ModifierOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierOptionCountAggregateInputType | true
    _avg?: ModifierOptionAvgAggregateInputType
    _sum?: ModifierOptionSumAggregateInputType
    _min?: ModifierOptionMinAggregateInputType
    _max?: ModifierOptionMaxAggregateInputType
  }


  export type ModifierOptionGroupByOutputType = {
    id: number
    dateCreated: Date
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl: string | null
    standard: boolean
    createdById: string | null
    public: boolean
    _count: ModifierOptionCountAggregateOutputType | null
    _avg: ModifierOptionAvgAggregateOutputType | null
    _sum: ModifierOptionSumAggregateOutputType | null
    _min: ModifierOptionMinAggregateOutputType | null
    _max: ModifierOptionMaxAggregateOutputType | null
  }

  type GetModifierOptionGroupByPayload<T extends ModifierOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ModifierOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierOptionGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierOptionGroupByOutputType[P]>
        }
      >
    >


  export type ModifierOptionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    challengeModifierId?: boolean
    name?: boolean
    text?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    public?: boolean
    ChallengeModifier?: boolean | ChallengeModifierArgs<ExtArgs>
    CreatedBy?: boolean | UserArgs<ExtArgs>
    Day?: boolean | ModifierOption$DayArgs<ExtArgs>
    ModifierPackExcluded?: boolean | ModifierOption$ModifierPackExcludedArgs<ExtArgs>
    ModifierPackIncluded?: boolean | ModifierOption$ModifierPackIncludedArgs<ExtArgs>
    UserExcluded?: boolean | ModifierOption$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ModifierOption$UserIncludedArgs<ExtArgs>
    ExcludedFromDay?: boolean | ModifierOption$ExcludedFromDayArgs<ExtArgs>
    IncludedInDay?: boolean | ModifierOption$IncludedInDayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ModifierOption$DayCompletedInPart1Args<ExtArgs>
    _count?: boolean | ModifierOptionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["modifierOption"]>

  export type ModifierOptionSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    challengeModifierId?: boolean
    name?: boolean
    text?: boolean
    explanatoryUrl?: boolean
    standard?: boolean
    createdById?: boolean
    public?: boolean
  }

  export type ModifierOptionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ChallengeModifier?: boolean | ChallengeModifierArgs<ExtArgs>
    CreatedBy?: boolean | UserArgs<ExtArgs>
    Day?: boolean | ModifierOption$DayArgs<ExtArgs>
    ModifierPackExcluded?: boolean | ModifierOption$ModifierPackExcludedArgs<ExtArgs>
    ModifierPackIncluded?: boolean | ModifierOption$ModifierPackIncludedArgs<ExtArgs>
    UserExcluded?: boolean | ModifierOption$UserExcludedArgs<ExtArgs>
    UserIncluded?: boolean | ModifierOption$UserIncludedArgs<ExtArgs>
    ExcludedFromDay?: boolean | ModifierOption$ExcludedFromDayArgs<ExtArgs>
    IncludedInDay?: boolean | ModifierOption$IncludedInDayArgs<ExtArgs>
    DayCompletedInPart1?: boolean | ModifierOption$DayCompletedInPart1Args<ExtArgs>
    _count?: boolean | ModifierOptionCountOutputTypeArgs<ExtArgs>
  }


  type ModifierOptionGetPayload<S extends boolean | null | undefined | ModifierOptionArgs> = $Types.GetResult<ModifierOptionPayload, S>

  type ModifierOptionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ModifierOptionFindManyArgs, 'select' | 'include'> & {
      select?: ModifierOptionCountAggregateInputType | true
    }

  export interface ModifierOptionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModifierOption'], meta: { name: 'ModifierOption' } }
    /**
     * Find zero or one ModifierOption that matches the filter.
     * @param {ModifierOptionFindUniqueArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModifierOptionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModifierOptionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModifierOption'> extends True ? Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ModifierOption that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModifierOptionFindUniqueOrThrowArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModifierOptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ModifierOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionFindFirstArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModifierOptionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModifierOptionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModifierOption'> extends True ? Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ModifierOption that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionFindFirstOrThrowArgs} args - Arguments to find a ModifierOption
     * @example
     * // Get one ModifierOption
     * const modifierOption = await prisma.modifierOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModifierOptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ModifierOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModifierOptions
     * const modifierOptions = await prisma.modifierOption.findMany()
     * 
     * // Get first 10 ModifierOptions
     * const modifierOptions = await prisma.modifierOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierOptionWithIdOnly = await prisma.modifierOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModifierOptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ModifierOption.
     * @param {ModifierOptionCreateArgs} args - Arguments to create a ModifierOption.
     * @example
     * // Create one ModifierOption
     * const ModifierOption = await prisma.modifierOption.create({
     *   data: {
     *     // ... data to create a ModifierOption
     *   }
     * })
     * 
    **/
    create<T extends ModifierOptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionCreateArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ModifierOptions.
     *     @param {ModifierOptionCreateManyArgs} args - Arguments to create many ModifierOptions.
     *     @example
     *     // Create many ModifierOptions
     *     const modifierOption = await prisma.modifierOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModifierOptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModifierOption.
     * @param {ModifierOptionDeleteArgs} args - Arguments to delete one ModifierOption.
     * @example
     * // Delete one ModifierOption
     * const ModifierOption = await prisma.modifierOption.delete({
     *   where: {
     *     // ... filter to delete one ModifierOption
     *   }
     * })
     * 
    **/
    delete<T extends ModifierOptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionDeleteArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ModifierOption.
     * @param {ModifierOptionUpdateArgs} args - Arguments to update one ModifierOption.
     * @example
     * // Update one ModifierOption
     * const modifierOption = await prisma.modifierOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModifierOptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionUpdateArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ModifierOptions.
     * @param {ModifierOptionDeleteManyArgs} args - Arguments to filter ModifierOptions to delete.
     * @example
     * // Delete a few ModifierOptions
     * const { count } = await prisma.modifierOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModifierOptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierOptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModifierOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModifierOptions
     * const modifierOption = await prisma.modifierOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModifierOptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModifierOption.
     * @param {ModifierOptionUpsertArgs} args - Arguments to update or create a ModifierOption.
     * @example
     * // Update or create a ModifierOption
     * const modifierOption = await prisma.modifierOption.upsert({
     *   create: {
     *     // ... data to create a ModifierOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModifierOption we want to update
     *   }
     * })
    **/
    upsert<T extends ModifierOptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierOptionUpsertArgs<ExtArgs>>
    ): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ModifierOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionCountArgs} args - Arguments to filter ModifierOptions to count.
     * @example
     * // Count the number of ModifierOptions
     * const count = await prisma.modifierOption.count({
     *   where: {
     *     // ... the filter for the ModifierOptions we want to count
     *   }
     * })
    **/
    count<T extends ModifierOptionCountArgs>(
      args?: Subset<T, ModifierOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModifierOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierOptionAggregateArgs>(args: Subset<T, ModifierOptionAggregateArgs>): Prisma.PrismaPromise<GetModifierOptionAggregateType<T>>

    /**
     * Group by ModifierOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierOptionGroupByArgs['orderBy'] }
        : { orderBy?: ModifierOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ModifierOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModifierOptionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ChallengeModifier<T extends ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifierArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    CreatedBy<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    Day<T extends ModifierOption$DayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ModifierPackExcluded<T extends ModifierOption$ModifierPackExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$ModifierPackExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ModifierPackIncluded<T extends ModifierOption$ModifierPackIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$ModifierPackIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findMany', never>| Null>;

    UserExcluded<T extends ModifierOption$UserExcludedArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$UserExcludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    UserIncluded<T extends ModifierOption$UserIncludedArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$UserIncludedArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ExcludedFromDay<T extends ModifierOption$ExcludedFromDayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$ExcludedFromDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    IncludedInDay<T extends ModifierOption$IncludedInDayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$IncludedInDayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    DayCompletedInPart1<T extends ModifierOption$DayCompletedInPart1Args<ExtArgs> = {}>(args?: Subset<T, ModifierOption$DayCompletedInPart1Args<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ModifierOption base type for findUnique actions
   */
  export type ModifierOptionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where: ModifierOptionWhereUniqueInput
  }

  /**
   * ModifierOption findUnique
   */
  export interface ModifierOptionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ModifierOptionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ModifierOption findUniqueOrThrow
   */
  export type ModifierOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption base type for findFirst actions
   */
  export type ModifierOptionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierOptions.
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierOptions.
     */
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }

  /**
   * ModifierOption findFirst
   */
  export interface ModifierOptionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ModifierOptionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ModifierOption findFirstOrThrow
   */
  export type ModifierOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOption to fetch.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierOptions.
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierOptions.
     */
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * ModifierOption findMany
   */
  export type ModifierOptionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter, which ModifierOptions to fetch.
     */
    where?: ModifierOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierOptions to fetch.
     */
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModifierOptions.
     */
    cursor?: ModifierOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierOptions.
     */
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * ModifierOption create
   */
  export type ModifierOptionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ModifierOption.
     */
    data: XOR<ModifierOptionCreateInput, ModifierOptionUncheckedCreateInput>
  }


  /**
   * ModifierOption createMany
   */
  export type ModifierOptionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModifierOptions.
     */
    data: Enumerable<ModifierOptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModifierOption update
   */
  export type ModifierOptionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ModifierOption.
     */
    data: XOR<ModifierOptionUpdateInput, ModifierOptionUncheckedUpdateInput>
    /**
     * Choose, which ModifierOption to update.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption updateMany
   */
  export type ModifierOptionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModifierOptions.
     */
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyInput>
    /**
     * Filter which ModifierOptions to update
     */
    where?: ModifierOptionWhereInput
  }


  /**
   * ModifierOption upsert
   */
  export type ModifierOptionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ModifierOption to update in case it exists.
     */
    where: ModifierOptionWhereUniqueInput
    /**
     * In case the ModifierOption found by the `where` argument doesn't exist, create a new ModifierOption with this data.
     */
    create: XOR<ModifierOptionCreateInput, ModifierOptionUncheckedCreateInput>
    /**
     * In case the ModifierOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierOptionUpdateInput, ModifierOptionUncheckedUpdateInput>
  }


  /**
   * ModifierOption delete
   */
  export type ModifierOptionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    /**
     * Filter which ModifierOption to delete.
     */
    where: ModifierOptionWhereUniqueInput
  }


  /**
   * ModifierOption deleteMany
   */
  export type ModifierOptionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierOptions to delete
     */
    where?: ModifierOptionWhereInput
  }


  /**
   * ModifierOption.Day
   */
  export type ModifierOption$DayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ModifierOption.ModifierPackExcluded
   */
  export type ModifierOption$ModifierPackExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * ModifierOption.ModifierPackIncluded
   */
  export type ModifierOption$ModifierPackIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    where?: ModifierPackWhereInput
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    cursor?: ModifierPackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * ModifierOption.UserExcluded
   */
  export type ModifierOption$UserExcludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * ModifierOption.UserIncluded
   */
  export type ModifierOption$UserIncludedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * ModifierOption.ExcludedFromDay
   */
  export type ModifierOption$ExcludedFromDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ModifierOption.IncludedInDay
   */
  export type ModifierOption$IncludedInDayArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ModifierOption.DayCompletedInPart1
   */
  export type ModifierOption$DayCompletedInPart1Args<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Day
     */
    select?: DaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DayInclude<ExtArgs> | null
    where?: DayWhereInput
    orderBy?: Enumerable<DayOrderByWithRelationInput>
    cursor?: DayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DayScalarFieldEnum>
  }


  /**
   * ModifierOption without action
   */
  export type ModifierOptionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
  }



  /**
   * Model ModifierPack
   */


  export type AggregateModifierPack = {
    _count: ModifierPackCountAggregateOutputType | null
    _avg: ModifierPackAvgAggregateOutputType | null
    _sum: ModifierPackSumAggregateOutputType | null
    _min: ModifierPackMinAggregateOutputType | null
    _max: ModifierPackMaxAggregateOutputType | null
  }

  export type ModifierPackAvgAggregateOutputType = {
    id: number | null
  }

  export type ModifierPackSumAggregateOutputType = {
    id: number | null
  }

  export type ModifierPackMinAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    createdById: string | null
    public: boolean | null
  }

  export type ModifierPackMaxAggregateOutputType = {
    id: number | null
    dateCreated: Date | null
    createdById: string | null
    public: boolean | null
  }

  export type ModifierPackCountAggregateOutputType = {
    id: number
    dateCreated: number
    createdById: number
    public: number
    _all: number
  }


  export type ModifierPackAvgAggregateInputType = {
    id?: true
  }

  export type ModifierPackSumAggregateInputType = {
    id?: true
  }

  export type ModifierPackMinAggregateInputType = {
    id?: true
    dateCreated?: true
    createdById?: true
    public?: true
  }

  export type ModifierPackMaxAggregateInputType = {
    id?: true
    dateCreated?: true
    createdById?: true
    public?: true
  }

  export type ModifierPackCountAggregateInputType = {
    id?: true
    dateCreated?: true
    createdById?: true
    public?: true
    _all?: true
  }

  export type ModifierPackAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierPack to aggregate.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModifierPacks
    **/
    _count?: true | ModifierPackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierPackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierPackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierPackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierPackMaxAggregateInputType
  }

  export type GetModifierPackAggregateType<T extends ModifierPackAggregateArgs> = {
        [P in keyof T & keyof AggregateModifierPack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifierPack[P]>
      : GetScalarType<T[P], AggregateModifierPack[P]>
  }




  export type ModifierPackGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ModifierPackWhereInput
    orderBy?: Enumerable<ModifierPackOrderByWithAggregationInput>
    by: ModifierPackScalarFieldEnum[]
    having?: ModifierPackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierPackCountAggregateInputType | true
    _avg?: ModifierPackAvgAggregateInputType
    _sum?: ModifierPackSumAggregateInputType
    _min?: ModifierPackMinAggregateInputType
    _max?: ModifierPackMaxAggregateInputType
  }


  export type ModifierPackGroupByOutputType = {
    id: number
    dateCreated: Date
    createdById: string | null
    public: boolean
    _count: ModifierPackCountAggregateOutputType | null
    _avg: ModifierPackAvgAggregateOutputType | null
    _sum: ModifierPackSumAggregateOutputType | null
    _min: ModifierPackMinAggregateOutputType | null
    _max: ModifierPackMaxAggregateOutputType | null
  }

  type GetModifierPackGroupByPayload<T extends ModifierPackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ModifierPackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierPackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierPackGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierPackGroupByOutputType[P]>
        }
      >
    >


  export type ModifierPackSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateCreated?: boolean
    createdById?: boolean
    public?: boolean
    ExcludedChallengeModifiers?: boolean | ModifierPack$ExcludedChallengeModifiersArgs<ExtArgs>
    ExcludedModifierOptions?: boolean | ModifierPack$ExcludedModifierOptionsArgs<ExtArgs>
    EncludedCustomChallengeModifiers?: boolean | ModifierPack$EncludedCustomChallengeModifiersArgs<ExtArgs>
    IncludedCustomModifierOptions?: boolean | ModifierPack$IncludedCustomModifierOptionsArgs<ExtArgs>
    CreatedBy?: boolean | UserArgs<ExtArgs>
    _count?: boolean | ModifierPackCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["modifierPack"]>

  export type ModifierPackSelectScalar = {
    id?: boolean
    dateCreated?: boolean
    createdById?: boolean
    public?: boolean
  }

  export type ModifierPackInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ExcludedChallengeModifiers?: boolean | ModifierPack$ExcludedChallengeModifiersArgs<ExtArgs>
    ExcludedModifierOptions?: boolean | ModifierPack$ExcludedModifierOptionsArgs<ExtArgs>
    EncludedCustomChallengeModifiers?: boolean | ModifierPack$EncludedCustomChallengeModifiersArgs<ExtArgs>
    IncludedCustomModifierOptions?: boolean | ModifierPack$IncludedCustomModifierOptionsArgs<ExtArgs>
    CreatedBy?: boolean | UserArgs<ExtArgs>
    _count?: boolean | ModifierPackCountOutputTypeArgs<ExtArgs>
  }


  type ModifierPackGetPayload<S extends boolean | null | undefined | ModifierPackArgs> = $Types.GetResult<ModifierPackPayload, S>

  type ModifierPackCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ModifierPackFindManyArgs, 'select' | 'include'> & {
      select?: ModifierPackCountAggregateInputType | true
    }

  export interface ModifierPackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModifierPack'], meta: { name: 'ModifierPack' } }
    /**
     * Find zero or one ModifierPack that matches the filter.
     * @param {ModifierPackFindUniqueArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModifierPackFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ModifierPackFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ModifierPack'> extends True ? Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ModifierPack that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModifierPackFindUniqueOrThrowArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModifierPackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ModifierPack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackFindFirstArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModifierPackFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ModifierPackFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ModifierPack'> extends True ? Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ModifierPack that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackFindFirstOrThrowArgs} args - Arguments to find a ModifierPack
     * @example
     * // Get one ModifierPack
     * const modifierPack = await prisma.modifierPack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModifierPackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ModifierPacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModifierPacks
     * const modifierPacks = await prisma.modifierPack.findMany()
     * 
     * // Get first 10 ModifierPacks
     * const modifierPacks = await prisma.modifierPack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierPackWithIdOnly = await prisma.modifierPack.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModifierPackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ModifierPack.
     * @param {ModifierPackCreateArgs} args - Arguments to create a ModifierPack.
     * @example
     * // Create one ModifierPack
     * const ModifierPack = await prisma.modifierPack.create({
     *   data: {
     *     // ... data to create a ModifierPack
     *   }
     * })
     * 
    **/
    create<T extends ModifierPackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackCreateArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ModifierPacks.
     *     @param {ModifierPackCreateManyArgs} args - Arguments to create many ModifierPacks.
     *     @example
     *     // Create many ModifierPacks
     *     const modifierPack = await prisma.modifierPack.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModifierPackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModifierPack.
     * @param {ModifierPackDeleteArgs} args - Arguments to delete one ModifierPack.
     * @example
     * // Delete one ModifierPack
     * const ModifierPack = await prisma.modifierPack.delete({
     *   where: {
     *     // ... filter to delete one ModifierPack
     *   }
     * })
     * 
    **/
    delete<T extends ModifierPackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackDeleteArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ModifierPack.
     * @param {ModifierPackUpdateArgs} args - Arguments to update one ModifierPack.
     * @example
     * // Update one ModifierPack
     * const modifierPack = await prisma.modifierPack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModifierPackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackUpdateArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ModifierPacks.
     * @param {ModifierPackDeleteManyArgs} args - Arguments to filter ModifierPacks to delete.
     * @example
     * // Delete a few ModifierPacks
     * const { count } = await prisma.modifierPack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModifierPackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModifierPackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModifierPacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModifierPacks
     * const modifierPack = await prisma.modifierPack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModifierPackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModifierPack.
     * @param {ModifierPackUpsertArgs} args - Arguments to update or create a ModifierPack.
     * @example
     * // Update or create a ModifierPack
     * const modifierPack = await prisma.modifierPack.upsert({
     *   create: {
     *     // ... data to create a ModifierPack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModifierPack we want to update
     *   }
     * })
    **/
    upsert<T extends ModifierPackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModifierPackUpsertArgs<ExtArgs>>
    ): Prisma__ModifierPackClient<$Types.GetResult<ModifierPackPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ModifierPacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackCountArgs} args - Arguments to filter ModifierPacks to count.
     * @example
     * // Count the number of ModifierPacks
     * const count = await prisma.modifierPack.count({
     *   where: {
     *     // ... the filter for the ModifierPacks we want to count
     *   }
     * })
    **/
    count<T extends ModifierPackCountArgs>(
      args?: Subset<T, ModifierPackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierPackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModifierPack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierPackAggregateArgs>(args: Subset<T, ModifierPackAggregateArgs>): Prisma.PrismaPromise<GetModifierPackAggregateType<T>>

    /**
     * Group by ModifierPack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierPackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierPackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierPackGroupByArgs['orderBy'] }
        : { orderBy?: ModifierPackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierPackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ModifierPack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ModifierPackClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    ExcludedChallengeModifiers<T extends ModifierPack$ExcludedChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$ExcludedChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ExcludedModifierOptions<T extends ModifierPack$ExcludedModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$ExcludedModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    EncludedCustomChallengeModifiers<T extends ModifierPack$EncludedCustomChallengeModifiersArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$EncludedCustomChallengeModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

    IncludedCustomModifierOptions<T extends ModifierPack$IncludedCustomModifierOptionsArgs<ExtArgs> = {}>(args?: Subset<T, ModifierPack$IncludedCustomModifierOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    CreatedBy<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ModifierPack base type for findUnique actions
   */
  export type ModifierPackFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where: ModifierPackWhereUniqueInput
  }

  /**
   * ModifierPack findUnique
   */
  export interface ModifierPackFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ModifierPackFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ModifierPack findUniqueOrThrow
   */
  export type ModifierPackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack base type for findFirst actions
   */
  export type ModifierPackFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierPacks.
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierPacks.
     */
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }

  /**
   * ModifierPack findFirst
   */
  export interface ModifierPackFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ModifierPackFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ModifierPack findFirstOrThrow
   */
  export type ModifierPackFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPack to fetch.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierPacks.
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierPacks.
     */
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * ModifierPack findMany
   */
  export type ModifierPackFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter, which ModifierPacks to fetch.
     */
    where?: ModifierPackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierPacks to fetch.
     */
    orderBy?: Enumerable<ModifierPackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModifierPacks.
     */
    cursor?: ModifierPackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierPacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierPacks.
     */
    skip?: number
    distinct?: Enumerable<ModifierPackScalarFieldEnum>
  }


  /**
   * ModifierPack create
   */
  export type ModifierPackCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * The data needed to create a ModifierPack.
     */
    data?: XOR<ModifierPackCreateInput, ModifierPackUncheckedCreateInput>
  }


  /**
   * ModifierPack createMany
   */
  export type ModifierPackCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModifierPacks.
     */
    data: Enumerable<ModifierPackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ModifierPack update
   */
  export type ModifierPackUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * The data needed to update a ModifierPack.
     */
    data: XOR<ModifierPackUpdateInput, ModifierPackUncheckedUpdateInput>
    /**
     * Choose, which ModifierPack to update.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack updateMany
   */
  export type ModifierPackUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModifierPacks.
     */
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyInput>
    /**
     * Filter which ModifierPacks to update
     */
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierPack upsert
   */
  export type ModifierPackUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * The filter to search for the ModifierPack to update in case it exists.
     */
    where: ModifierPackWhereUniqueInput
    /**
     * In case the ModifierPack found by the `where` argument doesn't exist, create a new ModifierPack with this data.
     */
    create: XOR<ModifierPackCreateInput, ModifierPackUncheckedCreateInput>
    /**
     * In case the ModifierPack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierPackUpdateInput, ModifierPackUncheckedUpdateInput>
  }


  /**
   * ModifierPack delete
   */
  export type ModifierPackDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
    /**
     * Filter which ModifierPack to delete.
     */
    where: ModifierPackWhereUniqueInput
  }


  /**
   * ModifierPack deleteMany
   */
  export type ModifierPackDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierPacks to delete
     */
    where?: ModifierPackWhereInput
  }


  /**
   * ModifierPack.ExcludedChallengeModifiers
   */
  export type ModifierPack$ExcludedChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * ModifierPack.ExcludedModifierOptions
   */
  export type ModifierPack$ExcludedModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * ModifierPack.EncludedCustomChallengeModifiers
   */
  export type ModifierPack$EncludedCustomChallengeModifiersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeModifier
     */
    select?: ChallengeModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChallengeModifierInclude<ExtArgs> | null
    where?: ChallengeModifierWhereInput
    orderBy?: Enumerable<ChallengeModifierOrderByWithRelationInput>
    cursor?: ChallengeModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChallengeModifierScalarFieldEnum>
  }


  /**
   * ModifierPack.IncludedCustomModifierOptions
   */
  export type ModifierPack$IncludedCustomModifierOptionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierOption
     */
    select?: ModifierOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierOptionInclude<ExtArgs> | null
    where?: ModifierOptionWhereInput
    orderBy?: Enumerable<ModifierOptionOrderByWithRelationInput>
    cursor?: ModifierOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ModifierOptionScalarFieldEnum>
  }


  /**
   * ModifierPack without action
   */
  export type ModifierPackArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierPack
     */
    select?: ModifierPackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModifierPackInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    serializedId: 'serializedId',
    username: 'username',
    dateCreated: 'dateCreated',
    numberOfGames: 'numberOfGames'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PublicProfileScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    name: 'name',
    userId: 'userId'
  };

  export type PublicProfileScalarFieldEnum = (typeof PublicProfileScalarFieldEnum)[keyof typeof PublicProfileScalarFieldEnum]


  export const GameScalarFieldEnum: {
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
    repositoryLink: 'repositoryLink',
    progressSheetLink: 'progressSheetLink',
    public: 'public',
    publicProfileId: 'publicProfileId',
    score: 'score',
    rankId: 'rankId',
    dateCompleted: 'dateCompleted'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const RankScalarFieldEnum: {
    id: 'id',
    name: 'name',
    minimumScore: 'minimumScore'
  };

  export type RankScalarFieldEnum = (typeof RankScalarFieldEnum)[keyof typeof RankScalarFieldEnum]


  export const DayScalarFieldEnum: {
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

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


  export const ChallengeModifierScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    name: 'name',
    text: 'text',
    hasOptions: 'hasOptions',
    explanatoryUrl: 'explanatoryUrl',
    standard: 'standard',
    createdById: 'createdById',
    public: 'public'
  };

  export type ChallengeModifierScalarFieldEnum = (typeof ChallengeModifierScalarFieldEnum)[keyof typeof ChallengeModifierScalarFieldEnum]


  export const ModifierOptionScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    challengeModifierId: 'challengeModifierId',
    name: 'name',
    text: 'text',
    explanatoryUrl: 'explanatoryUrl',
    standard: 'standard',
    createdById: 'createdById',
    public: 'public'
  };

  export type ModifierOptionScalarFieldEnum = (typeof ModifierOptionScalarFieldEnum)[keyof typeof ModifierOptionScalarFieldEnum]


  export const ModifierPackScalarFieldEnum: {
    id: 'id',
    dateCreated: 'dateCreated',
    createdById: 'createdById',
    public: 'public'
  };

  export type ModifierPackScalarFieldEnum = (typeof ModifierPackScalarFieldEnum)[keyof typeof ModifierPackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    serializedId?: StringNullableFilter | string | null
    username?: StringNullableFilter | string | null
    dateCreated?: DateTimeFilter | Date | string
    numberOfGames?: IntFilter | number
    Game?: GameListRelationFilter
    PublicProfile?: PublicProfileListRelationFilter
    ChallengeModifier?: ChallengeModifierListRelationFilter
    ModifierOption?: ModifierOptionListRelationFilter
    DefaultExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    DefaultExcludedModifierOptions?: ModifierOptionListRelationFilter
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
    DefaultIncludedCustomModifierOptions?: ModifierOptionListRelationFilter
    ModifierPack?: ModifierPackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    serializedId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
    Game?: GameOrderByRelationAggregateInput
    PublicProfile?: PublicProfileOrderByRelationAggregateInput
    ChallengeModifier?: ChallengeModifierOrderByRelationAggregateInput
    ModifierOption?: ModifierOptionOrderByRelationAggregateInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    DefaultExcludedModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    ModifierPack?: ModifierPackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    serializedId?: string
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    serializedId?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    serializedId?: StringNullableWithAggregatesFilter | string | null
    username?: StringNullableWithAggregatesFilter | string | null
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    numberOfGames?: IntWithAggregatesFilter | number
  }

  export type PublicProfileWhereInput = {
    AND?: Enumerable<PublicProfileWhereInput>
    OR?: Enumerable<PublicProfileWhereInput>
    NOT?: Enumerable<PublicProfileWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    name?: StringFilter | string
    userId?: StringFilter | string
    User?: XOR<UserRelationFilter, UserWhereInput>
    Game?: GameListRelationFilter
  }

  export type PublicProfileOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    Game?: GameOrderByRelationAggregateInput
  }

  export type PublicProfileWhereUniqueInput = {
    id?: number
  }

  export type PublicProfileOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: PublicProfileCountOrderByAggregateInput
    _avg?: PublicProfileAvgOrderByAggregateInput
    _max?: PublicProfileMaxOrderByAggregateInput
    _min?: PublicProfileMinOrderByAggregateInput
    _sum?: PublicProfileSumOrderByAggregateInput
  }

  export type PublicProfileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PublicProfileScalarWhereWithAggregatesInput>
    OR?: Enumerable<PublicProfileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PublicProfileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
  }

  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    number?: IntFilter | number
    year?: IntFilter | number
    name?: StringFilter | string
    playerName?: StringNullableFilter | string | null
    currentDay?: IntFilter | number
    currentDayCompleted?: BoolFilter | boolean
    currentRerollTokens?: IntFilter | number
    rerollTokensSpent?: IntFilter | number
    repositoryLink?: StringNullableFilter | string | null
    progressSheetLink?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
    publicProfileId?: IntNullableFilter | number | null
    score?: IntFilter | number
    rankId?: IntNullableFilter | number | null
    dateCompleted?: DateTimeNullableFilter | Date | string | null
    User?: XOR<UserRelationFilter, UserWhereInput>
    Rank?: XOR<RankRelationFilter, RankWhereInput> | null
    Day?: DayListRelationFilter
    PublicProfile?: XOR<PublicProfileRelationFilter, PublicProfileWhereInput> | null
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrderInput | SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrderInput | SortOrder
    progressSheetLink?: SortOrderInput | SortOrder
    public?: SortOrder
    publicProfileId?: SortOrderInput | SortOrder
    score?: SortOrder
    rankId?: SortOrderInput | SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    Rank?: RankOrderByWithRelationInput
    Day?: DayOrderByRelationAggregateInput
    PublicProfile?: PublicProfileOrderByWithRelationInput
  }

  export type GameWhereUniqueInput = {
    id?: number
  }

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrderInput | SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrderInput | SortOrder
    progressSheetLink?: SortOrderInput | SortOrder
    public?: SortOrder
    publicProfileId?: SortOrderInput | SortOrder
    score?: SortOrder
    rankId?: SortOrderInput | SortOrder
    dateCompleted?: SortOrderInput | SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GameScalarWhereWithAggregatesInput>
    OR?: Enumerable<GameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GameScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    userId?: StringWithAggregatesFilter | string
    number?: IntWithAggregatesFilter | number
    year?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    playerName?: StringNullableWithAggregatesFilter | string | null
    currentDay?: IntWithAggregatesFilter | number
    currentDayCompleted?: BoolWithAggregatesFilter | boolean
    currentRerollTokens?: IntWithAggregatesFilter | number
    rerollTokensSpent?: IntWithAggregatesFilter | number
    repositoryLink?: StringNullableWithAggregatesFilter | string | null
    progressSheetLink?: StringNullableWithAggregatesFilter | string | null
    public?: BoolWithAggregatesFilter | boolean
    publicProfileId?: IntNullableWithAggregatesFilter | number | null
    score?: IntWithAggregatesFilter | number
    rankId?: IntNullableWithAggregatesFilter | number | null
    dateCompleted?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type RankWhereInput = {
    AND?: Enumerable<RankWhereInput>
    OR?: Enumerable<RankWhereInput>
    NOT?: Enumerable<RankWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    minimumScore?: IntFilter | number
    Game?: GameListRelationFilter
  }

  export type RankOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
    Game?: GameOrderByRelationAggregateInput
  }

  export type RankWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type RankOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
    _count?: RankCountOrderByAggregateInput
    _avg?: RankAvgOrderByAggregateInput
    _max?: RankMaxOrderByAggregateInput
    _min?: RankMinOrderByAggregateInput
    _sum?: RankSumOrderByAggregateInput
  }

  export type RankScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RankScalarWhereWithAggregatesInput>
    OR?: Enumerable<RankScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RankScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    minimumScore?: IntWithAggregatesFilter | number
  }

  export type DayWhereInput = {
    AND?: Enumerable<DayWhereInput>
    OR?: Enumerable<DayWhereInput>
    NOT?: Enumerable<DayWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    gameId?: IntFilter | number
    userId?: StringFilter | string
    gameNumber?: IntFilter | number
    number?: IntFilter | number
    challengeModifierId?: IntNullableFilter | number | null
    modifierOptionId?: IntNullableFilter | number | null
    dateFirstRolled?: DateTimeNullableFilter | Date | string | null
    part1Completed?: DateTimeNullableFilter | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableFilter | number | null
    optionWhenPart1CompletedId?: IntNullableFilter | number | null
    part2Completed?: DateTimeNullableFilter | Date | string | null
    challengeModifierRerollsUsed?: IntFilter | number
    modifierOptionRerollsUsed?: IntFilter | number
    rerollTokensSpentDuringPart2?: IntFilter | number
    netScore?: IntFilter | number
    ExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    ExcludedModifierOptions?: ModifierOptionListRelationFilter
    IncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
    IncludedCustomModifierOptions?: ModifierOptionListRelationFilter
    Game?: XOR<GameRelationFilter, GameWhereInput>
    ModifierWhenPart1Completed?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput> | null
    OptionWhenPart1Completed?: XOR<ModifierOptionRelationFilter, ModifierOptionWhereInput> | null
    ChallengeModifier?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput> | null
    ModifierOption?: XOR<ModifierOptionRelationFilter, ModifierOptionWhereInput> | null
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    modifierOptionId?: SortOrderInput | SortOrder
    dateFirstRolled?: SortOrderInput | SortOrder
    part1Completed?: SortOrderInput | SortOrder
    modifierWhenPart1CompletedId?: SortOrderInput | SortOrder
    optionWhenPart1CompletedId?: SortOrderInput | SortOrder
    part2Completed?: SortOrderInput | SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
    ExcludedChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    ExcludedModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    IncludedCustomChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    IncludedCustomModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    Game?: GameOrderByWithRelationInput
    ModifierWhenPart1Completed?: ChallengeModifierOrderByWithRelationInput
    OptionWhenPart1Completed?: ModifierOptionOrderByWithRelationInput
    ChallengeModifier?: ChallengeModifierOrderByWithRelationInput
    ModifierOption?: ModifierOptionOrderByWithRelationInput
  }

  export type DayWhereUniqueInput = {
    id?: number
  }

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    modifierOptionId?: SortOrderInput | SortOrder
    dateFirstRolled?: SortOrderInput | SortOrder
    part1Completed?: SortOrderInput | SortOrder
    modifierWhenPart1CompletedId?: SortOrderInput | SortOrder
    optionWhenPart1CompletedId?: SortOrderInput | SortOrder
    part2Completed?: SortOrderInput | SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
    _count?: DayCountOrderByAggregateInput
    _avg?: DayAvgOrderByAggregateInput
    _max?: DayMaxOrderByAggregateInput
    _min?: DayMinOrderByAggregateInput
    _sum?: DaySumOrderByAggregateInput
  }

  export type DayScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DayScalarWhereWithAggregatesInput>
    OR?: Enumerable<DayScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DayScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    gameId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    gameNumber?: IntWithAggregatesFilter | number
    number?: IntWithAggregatesFilter | number
    challengeModifierId?: IntNullableWithAggregatesFilter | number | null
    modifierOptionId?: IntNullableWithAggregatesFilter | number | null
    dateFirstRolled?: DateTimeNullableWithAggregatesFilter | Date | string | null
    part1Completed?: DateTimeNullableWithAggregatesFilter | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableWithAggregatesFilter | number | null
    optionWhenPart1CompletedId?: IntNullableWithAggregatesFilter | number | null
    part2Completed?: DateTimeNullableWithAggregatesFilter | Date | string | null
    challengeModifierRerollsUsed?: IntWithAggregatesFilter | number
    modifierOptionRerollsUsed?: IntWithAggregatesFilter | number
    rerollTokensSpentDuringPart2?: IntWithAggregatesFilter | number
    netScore?: IntWithAggregatesFilter | number
  }

  export type ChallengeModifierWhereInput = {
    AND?: Enumerable<ChallengeModifierWhereInput>
    OR?: Enumerable<ChallengeModifierWhereInput>
    NOT?: Enumerable<ChallengeModifierWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    name?: StringFilter | string
    text?: StringFilter | string
    hasOptions?: BoolFilter | boolean
    explanatoryUrl?: StringNullableFilter | string | null
    standard?: BoolFilter | boolean
    createdById?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput> | null
    ModifierOption?: ModifierOptionListRelationFilter
    Day?: DayListRelationFilter
    ModifierPackExcluded?: ModifierPackListRelationFilter
    ModifierPackIncluded?: ModifierPackListRelationFilter
    UserExcluded?: UserListRelationFilter
    UserIncluded?: UserListRelationFilter
    ExcludedFromDay?: DayListRelationFilter
    IncludedInDay?: DayListRelationFilter
    DayCompletedInPart1?: DayListRelationFilter
  }

  export type ChallengeModifierOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    public?: SortOrder
    CreatedBy?: UserOrderByWithRelationInput
    ModifierOption?: ModifierOptionOrderByRelationAggregateInput
    Day?: DayOrderByRelationAggregateInput
    ModifierPackExcluded?: ModifierPackOrderByRelationAggregateInput
    ModifierPackIncluded?: ModifierPackOrderByRelationAggregateInput
    UserExcluded?: UserOrderByRelationAggregateInput
    UserIncluded?: UserOrderByRelationAggregateInput
    ExcludedFromDay?: DayOrderByRelationAggregateInput
    IncludedInDay?: DayOrderByRelationAggregateInput
    DayCompletedInPart1?: DayOrderByRelationAggregateInput
  }

  export type ChallengeModifierWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ChallengeModifierOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    public?: SortOrder
    _count?: ChallengeModifierCountOrderByAggregateInput
    _avg?: ChallengeModifierAvgOrderByAggregateInput
    _max?: ChallengeModifierMaxOrderByAggregateInput
    _min?: ChallengeModifierMinOrderByAggregateInput
    _sum?: ChallengeModifierSumOrderByAggregateInput
  }

  export type ChallengeModifierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChallengeModifierScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChallengeModifierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChallengeModifierScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    name?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    hasOptions?: BoolWithAggregatesFilter | boolean
    explanatoryUrl?: StringNullableWithAggregatesFilter | string | null
    standard?: BoolWithAggregatesFilter | boolean
    createdById?: StringNullableWithAggregatesFilter | string | null
    public?: BoolWithAggregatesFilter | boolean
  }

  export type ModifierOptionWhereInput = {
    AND?: Enumerable<ModifierOptionWhereInput>
    OR?: Enumerable<ModifierOptionWhereInput>
    NOT?: Enumerable<ModifierOptionWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    challengeModifierId?: IntFilter | number
    name?: StringFilter | string
    text?: StringFilter | string
    explanatoryUrl?: StringNullableFilter | string | null
    standard?: BoolFilter | boolean
    createdById?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
    ChallengeModifier?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput>
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput> | null
    Day?: DayListRelationFilter
    ModifierPackExcluded?: ModifierPackListRelationFilter
    ModifierPackIncluded?: ModifierPackListRelationFilter
    UserExcluded?: UserListRelationFilter
    UserIncluded?: UserListRelationFilter
    ExcludedFromDay?: DayListRelationFilter
    IncludedInDay?: DayListRelationFilter
    DayCompletedInPart1?: DayListRelationFilter
  }

  export type ModifierOptionOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    public?: SortOrder
    ChallengeModifier?: ChallengeModifierOrderByWithRelationInput
    CreatedBy?: UserOrderByWithRelationInput
    Day?: DayOrderByRelationAggregateInput
    ModifierPackExcluded?: ModifierPackOrderByRelationAggregateInput
    ModifierPackIncluded?: ModifierPackOrderByRelationAggregateInput
    UserExcluded?: UserOrderByRelationAggregateInput
    UserIncluded?: UserOrderByRelationAggregateInput
    ExcludedFromDay?: DayOrderByRelationAggregateInput
    IncludedInDay?: DayOrderByRelationAggregateInput
    DayCompletedInPart1?: DayOrderByRelationAggregateInput
  }

  export type ModifierOptionWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ModifierOptionOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    explanatoryUrl?: SortOrderInput | SortOrder
    standard?: SortOrder
    createdById?: SortOrderInput | SortOrder
    public?: SortOrder
    _count?: ModifierOptionCountOrderByAggregateInput
    _avg?: ModifierOptionAvgOrderByAggregateInput
    _max?: ModifierOptionMaxOrderByAggregateInput
    _min?: ModifierOptionMinOrderByAggregateInput
    _sum?: ModifierOptionSumOrderByAggregateInput
  }

  export type ModifierOptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModifierOptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModifierOptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModifierOptionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    challengeModifierId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    explanatoryUrl?: StringNullableWithAggregatesFilter | string | null
    standard?: BoolWithAggregatesFilter | boolean
    createdById?: StringNullableWithAggregatesFilter | string | null
    public?: BoolWithAggregatesFilter | boolean
  }

  export type ModifierPackWhereInput = {
    AND?: Enumerable<ModifierPackWhereInput>
    OR?: Enumerable<ModifierPackWhereInput>
    NOT?: Enumerable<ModifierPackWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    createdById?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
    ExcludedChallengeModifiers?: ChallengeModifierListRelationFilter
    ExcludedModifierOptions?: ModifierOptionListRelationFilter
    EncludedCustomChallengeModifiers?: ChallengeModifierListRelationFilter
    IncludedCustomModifierOptions?: ModifierOptionListRelationFilter
    CreatedBy?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type ModifierPackOrderByWithRelationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrderInput | SortOrder
    public?: SortOrder
    ExcludedChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    ExcludedModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    EncludedCustomChallengeModifiers?: ChallengeModifierOrderByRelationAggregateInput
    IncludedCustomModifierOptions?: ModifierOptionOrderByRelationAggregateInput
    CreatedBy?: UserOrderByWithRelationInput
  }

  export type ModifierPackWhereUniqueInput = {
    id?: number
  }

  export type ModifierPackOrderByWithAggregationInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrderInput | SortOrder
    public?: SortOrder
    _count?: ModifierPackCountOrderByAggregateInput
    _avg?: ModifierPackAvgOrderByAggregateInput
    _max?: ModifierPackMaxOrderByAggregateInput
    _min?: ModifierPackMinOrderByAggregateInput
    _sum?: ModifierPackSumOrderByAggregateInput
  }

  export type ModifierPackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ModifierPackScalarWhereWithAggregatesInput>
    OR?: Enumerable<ModifierPackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ModifierPackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dateCreated?: DateTimeWithAggregatesFilter | Date | string
    createdById?: StringNullableWithAggregatesFilter | string | null
    public?: BoolWithAggregatesFilter | boolean
  }

  export type UserCreateInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type PublicProfileCreateInput = {
    dateCreated?: Date | string
    name: string
    User: UserCreateNestedOneWithoutPublicProfileInput
    Game?: GameCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    userId: string
    Game?: GameUncheckedCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutPublicProfileNestedInput
    Game?: GameUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    Game?: GameUncheckedUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    userId: string
  }

  export type PublicProfileUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublicProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    dateCompleted?: Date | string | null
    User: UserCreateNestedOneWithoutGameInput
    Rank?: RankCreateNestedOneWithoutGameInput
    Day?: DayCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Rank?: RankUpdateOneWithoutGameNestedInput
    Day?: DayUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    rankId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
  }

  export type GameUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    rankId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RankCreateInput = {
    name: string
    minimumScore: number
    Game?: GameCreateNestedManyWithoutRankInput
  }

  export type RankUncheckedCreateInput = {
    id?: number
    name: string
    minimumScore: number
    Game?: GameUncheckedCreateNestedManyWithoutRankInput
  }

  export type RankUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutRankNestedInput
  }

  export type RankUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutRankNestedInput
  }

  export type RankCreateManyInput = {
    id?: number
    name: string
    minimumScore: number
  }

  export type RankUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type RankUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
  }

  export type DayUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeModifierCreateInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
  }

  export type ChallengeModifierUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionCreateInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
  }

  export type ModifierOptionUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackCreateInput = {
    dateCreated?: Date | string
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackIncludedInput
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
  }

  export type ModifierPackUncheckedCreateInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackUpdateInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackIncludedNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
  }

  export type ModifierPackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type ModifierPackCreateManyInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    public?: boolean
  }

  export type ModifierPackUpdateManyMutationInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type PublicProfileListRelationFilter = {
    every?: PublicProfileWhereInput
    some?: PublicProfileWhereInput
    none?: PublicProfileWhereInput
  }

  export type ChallengeModifierListRelationFilter = {
    every?: ChallengeModifierWhereInput
    some?: ChallengeModifierWhereInput
    none?: ChallengeModifierWhereInput
  }

  export type ModifierOptionListRelationFilter = {
    every?: ModifierOptionWhereInput
    some?: ModifierOptionWhereInput
    none?: ModifierOptionWhereInput
  }

  export type ModifierPackListRelationFilter = {
    every?: ModifierPackWhereInput
    some?: ModifierPackWhereInput
    none?: ModifierPackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierPackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    serializedId?: SortOrder
    username?: SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    numberOfGames?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    serializedId?: SortOrder
    username?: SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    serializedId?: SortOrder
    username?: SortOrder
    dateCreated?: SortOrder
    numberOfGames?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    numberOfGames?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PublicProfileCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PublicProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PublicProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PublicProfileMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type PublicProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type RankRelationFilter = {
    is?: RankWhereInput | null
    isNot?: RankWhereInput | null
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type PublicProfileRelationFilter = {
    is?: PublicProfileWhereInput | null
    isNot?: PublicProfileWhereInput | null
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
    public?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    rankId?: SortOrder
    dateCompleted?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    rankId?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
    public?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    rankId?: SortOrder
    dateCompleted?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    userId?: SortOrder
    number?: SortOrder
    year?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
    public?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    rankId?: SortOrder
    dateCompleted?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensSpent?: SortOrder
    publicProfileId?: SortOrder
    score?: SortOrder
    rankId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type RankCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
  }

  export type RankAvgOrderByAggregateInput = {
    id?: SortOrder
    minimumScore?: SortOrder
  }

  export type RankMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
  }

  export type RankMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    minimumScore?: SortOrder
  }

  export type RankSumOrderByAggregateInput = {
    id?: SortOrder
    minimumScore?: SortOrder
  }

  export type GameRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type ChallengeModifierRelationFilter = {
    is?: ChallengeModifierWhereInput | null
    isNot?: ChallengeModifierWhereInput | null
  }

  export type ModifierOptionRelationFilter = {
    is?: ModifierOptionWhereInput | null
    isNot?: ModifierOptionWhereInput | null
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    dateFirstRolled?: SortOrder
    part1Completed?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    dateFirstRolled?: SortOrder
    part1Completed?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    dateFirstRolled?: SortOrder
    part1Completed?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    gameNumber?: SortOrder
    number?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    modifierWhenPart1CompletedId?: SortOrder
    optionWhenPart1CompletedId?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    rerollTokensSpentDuringPart2?: SortOrder
    netScore?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeModifierCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ChallengeModifierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChallengeModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ChallengeModifierMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ChallengeModifierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModifierOptionCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ModifierOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ModifierOptionMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    challengeModifierId?: SortOrder
    name?: SortOrder
    text?: SortOrder
    explanatoryUrl?: SortOrder
    standard?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ModifierOptionSumOrderByAggregateInput = {
    id?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierPackCountOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ModifierPackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModifierPackMaxOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ModifierPackMinOrderByAggregateInput = {
    id?: SortOrder
    dateCreated?: SortOrder
    createdById?: SortOrder
    public?: SortOrder
  }

  export type ModifierPackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GameCreateWithoutUserInput>, Enumerable<GameUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutUserInput>
    createMany?: GameCreateManyUserInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type PublicProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PublicProfileCreateWithoutUserInput>, Enumerable<PublicProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicProfileCreateOrConnectWithoutUserInput>
    createMany?: PublicProfileCreateManyUserInputEnvelope
    connect?: Enumerable<PublicProfileWhereUniqueInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutCreatedByInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutCreatedByInput>
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutCreatedByInput>, Enumerable<ModifierOptionUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutCreatedByInput>
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserExcludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserExcludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserIncludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserIncludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ModifierPackCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutCreatedByInput>, Enumerable<ModifierPackUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutCreatedByInput>
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type GameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GameCreateWithoutUserInput>, Enumerable<GameUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutUserInput>
    createMany?: GameCreateManyUserInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type PublicProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PublicProfileCreateWithoutUserInput>, Enumerable<PublicProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicProfileCreateOrConnectWithoutUserInput>
    createMany?: PublicProfileCreateManyUserInputEnvelope
    connect?: Enumerable<PublicProfileWhereUniqueInput>
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutCreatedByInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutCreatedByInput>
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutCreatedByInput>, Enumerable<ModifierOptionUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutCreatedByInput>
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserExcludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserExcludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserIncludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserIncludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutCreatedByInput>, Enumerable<ModifierPackUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutCreatedByInput>
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutUserInput>, Enumerable<GameUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GameCreateManyUserInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type PublicProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PublicProfileCreateWithoutUserInput>, Enumerable<PublicProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PublicProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PublicProfileCreateManyUserInputEnvelope
    set?: Enumerable<PublicProfileWhereUniqueInput>
    disconnect?: Enumerable<PublicProfileWhereUniqueInput>
    delete?: Enumerable<PublicProfileWhereUniqueInput>
    connect?: Enumerable<PublicProfileWhereUniqueInput>
    update?: Enumerable<PublicProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PublicProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PublicProfileScalarWhereInput>
  }

  export type ChallengeModifierUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutCreatedByInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutCreatedByInput>, Enumerable<ModifierOptionUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserExcludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserExcludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserIncludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserIncludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ModifierPackUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutCreatedByInput>, Enumerable<ModifierPackUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type GameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutUserInput>, Enumerable<GameUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GameCreateManyUserInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type PublicProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PublicProfileCreateWithoutUserInput>, Enumerable<PublicProfileUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PublicProfileCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PublicProfileUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PublicProfileCreateManyUserInputEnvelope
    set?: Enumerable<PublicProfileWhereUniqueInput>
    disconnect?: Enumerable<PublicProfileWhereUniqueInput>
    delete?: Enumerable<PublicProfileWhereUniqueInput>
    connect?: Enumerable<PublicProfileWhereUniqueInput>
    update?: Enumerable<PublicProfileUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PublicProfileUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PublicProfileScalarWhereInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutCreatedByInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: ChallengeModifierCreateManyCreatedByInputEnvelope
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutCreatedByInput>, Enumerable<ModifierOptionUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: ModifierOptionCreateManyCreatedByInputEnvelope
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserExcludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserExcludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutUserIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutUserIncludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutUserIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutUserIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutUserIncludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutCreatedByInput>, Enumerable<ModifierPackUncheckedCreateWithoutCreatedByInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutCreatedByInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput>
    createMany?: ModifierPackCreateManyCreatedByInputEnvelope
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutCreatedByInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPublicProfileInput = {
    create?: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicProfileInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedManyWithoutPublicProfileInput = {
    create?: XOR<Enumerable<GameCreateWithoutPublicProfileInput>, Enumerable<GameUncheckedCreateWithoutPublicProfileInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutPublicProfileInput>
    createMany?: GameCreateManyPublicProfileInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type GameUncheckedCreateNestedManyWithoutPublicProfileInput = {
    create?: XOR<Enumerable<GameCreateWithoutPublicProfileInput>, Enumerable<GameUncheckedCreateWithoutPublicProfileInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutPublicProfileInput>
    createMany?: GameCreateManyPublicProfileInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutPublicProfileNestedInput = {
    create?: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPublicProfileInput
    upsert?: UserUpsertWithoutPublicProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPublicProfileInput, UserUncheckedUpdateWithoutPublicProfileInput>
  }

  export type GameUpdateManyWithoutPublicProfileNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutPublicProfileInput>, Enumerable<GameUncheckedCreateWithoutPublicProfileInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutPublicProfileInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutPublicProfileInput>
    createMany?: GameCreateManyPublicProfileInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutPublicProfileInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutPublicProfileInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type GameUncheckedUpdateManyWithoutPublicProfileNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutPublicProfileInput>, Enumerable<GameUncheckedCreateWithoutPublicProfileInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutPublicProfileInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutPublicProfileInput>
    createMany?: GameCreateManyPublicProfileInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutPublicProfileInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutPublicProfileInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutGameInput = {
    create?: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameInput
    connect?: UserWhereUniqueInput
  }

  export type RankCreateNestedOneWithoutGameInput = {
    create?: XOR<RankCreateWithoutGameInput, RankUncheckedCreateWithoutGameInput>
    connectOrCreate?: RankCreateOrConnectWithoutGameInput
    connect?: RankWhereUniqueInput
  }

  export type DayCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<DayCreateWithoutGameInput>, Enumerable<DayUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutGameInput>
    createMany?: DayCreateManyGameInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type PublicProfileCreateNestedOneWithoutGameInput = {
    create?: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
    connectOrCreate?: PublicProfileCreateOrConnectWithoutGameInput
    connect?: PublicProfileWhereUniqueInput
  }

  export type DayUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<DayCreateWithoutGameInput>, Enumerable<DayUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutGameInput>
    createMany?: DayCreateManyGameInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutGameNestedInput = {
    create?: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
    connectOrCreate?: UserCreateOrConnectWithoutGameInput
    upsert?: UserUpsertWithoutGameInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGameInput, UserUncheckedUpdateWithoutGameInput>
  }

  export type RankUpdateOneWithoutGameNestedInput = {
    create?: XOR<RankCreateWithoutGameInput, RankUncheckedCreateWithoutGameInput>
    connectOrCreate?: RankCreateOrConnectWithoutGameInput
    upsert?: RankUpsertWithoutGameInput
    disconnect?: boolean
    delete?: boolean
    connect?: RankWhereUniqueInput
    update?: XOR<RankUpdateWithoutGameInput, RankUncheckedUpdateWithoutGameInput>
  }

  export type DayUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutGameInput>, Enumerable<DayUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutGameInput>
    createMany?: DayCreateManyGameInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type PublicProfileUpdateOneWithoutGameNestedInput = {
    create?: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
    connectOrCreate?: PublicProfileCreateOrConnectWithoutGameInput
    upsert?: PublicProfileUpsertWithoutGameInput
    disconnect?: boolean
    delete?: boolean
    connect?: PublicProfileWhereUniqueInput
    update?: XOR<PublicProfileUpdateWithoutGameInput, PublicProfileUncheckedUpdateWithoutGameInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DayUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutGameInput>, Enumerable<DayUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutGameInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutGameInput>
    createMany?: DayCreateManyGameInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutGameInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutGameInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type GameCreateNestedManyWithoutRankInput = {
    create?: XOR<Enumerable<GameCreateWithoutRankInput>, Enumerable<GameUncheckedCreateWithoutRankInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutRankInput>
    createMany?: GameCreateManyRankInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type GameUncheckedCreateNestedManyWithoutRankInput = {
    create?: XOR<Enumerable<GameCreateWithoutRankInput>, Enumerable<GameUncheckedCreateWithoutRankInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutRankInput>
    createMany?: GameCreateManyRankInputEnvelope
    connect?: Enumerable<GameWhereUniqueInput>
  }

  export type GameUpdateManyWithoutRankNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutRankInput>, Enumerable<GameUncheckedCreateWithoutRankInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutRankInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutRankInput>
    createMany?: GameCreateManyRankInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutRankInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutRankInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type GameUncheckedUpdateManyWithoutRankNestedInput = {
    create?: XOR<Enumerable<GameCreateWithoutRankInput>, Enumerable<GameUncheckedCreateWithoutRankInput>>
    connectOrCreate?: Enumerable<GameCreateOrConnectWithoutRankInput>
    upsert?: Enumerable<GameUpsertWithWhereUniqueWithoutRankInput>
    createMany?: GameCreateManyRankInputEnvelope
    set?: Enumerable<GameWhereUniqueInput>
    disconnect?: Enumerable<GameWhereUniqueInput>
    delete?: Enumerable<GameWhereUniqueInput>
    connect?: Enumerable<GameWhereUniqueInput>
    update?: Enumerable<GameUpdateWithWhereUniqueWithoutRankInput>
    updateMany?: Enumerable<GameUpdateManyWithWhereWithoutRankInput>
    deleteMany?: Enumerable<GameScalarWhereInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutExcludedFromDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutExcludedFromDayInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutExcludedFromDayInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutExcludedFromDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutExcludedFromDayInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutIncludedInDayInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutIncludedInDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutIncludedInDayInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutIncludedInDayInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutIncludedInDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutIncludedInDayInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type GameCreateNestedOneWithoutDayInput = {
    create?: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    connectOrCreate?: GameCreateOrConnectWithoutDayInput
    connect?: GameWhereUniqueInput
  }

  export type ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input = {
    create?: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayCompletedInPart1Input
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input = {
    create?: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayCompletedInPart1Input
    connect?: ModifierOptionWhereUniqueInput
  }

  export type ChallengeModifierCreateNestedOneWithoutDayInput = {
    create?: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayInput
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type ModifierOptionCreateNestedOneWithoutDayInput = {
    create?: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayInput
    connect?: ModifierOptionWhereUniqueInput
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutExcludedFromDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutExcludedFromDayInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutExcludedFromDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutExcludedFromDayInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutIncludedInDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutIncludedInDayInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutIncludedInDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutIncludedInDayInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutExcludedFromDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutExcludedFromDayInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutExcludedFromDayInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutExcludedFromDayInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutExcludedFromDayInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutExcludedFromDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutExcludedFromDayInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutExcludedFromDayInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutExcludedFromDayInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutExcludedFromDayInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutIncludedInDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutIncludedInDayInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutIncludedInDayInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutIncludedInDayInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutIncludedInDayInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutIncludedInDayNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutIncludedInDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutIncludedInDayInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutIncludedInDayInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutIncludedInDayInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutIncludedInDayInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type GameUpdateOneRequiredWithoutDayNestedInput = {
    create?: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    connectOrCreate?: GameCreateOrConnectWithoutDayInput
    upsert?: GameUpsertWithoutDayInput
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutDayInput, GameUncheckedUpdateWithoutDayInput>
  }

  export type ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayCompletedInPart1Input
    upsert?: ChallengeModifierUpsertWithoutDayCompletedInPart1Input
    disconnect?: boolean
    delete?: boolean
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<ChallengeModifierUpdateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input>
  }

  export type ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput = {
    create?: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayCompletedInPart1Input
    upsert?: ModifierOptionUpsertWithoutDayCompletedInPart1Input
    disconnect?: boolean
    delete?: boolean
    connect?: ModifierOptionWhereUniqueInput
    update?: XOR<ModifierOptionUpdateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierUpdateOneWithoutDayNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutDayInput
    upsert?: ChallengeModifierUpsertWithoutDayInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<ChallengeModifierUpdateWithoutDayInput, ChallengeModifierUncheckedUpdateWithoutDayInput>
  }

  export type ModifierOptionUpdateOneWithoutDayNestedInput = {
    create?: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
    connectOrCreate?: ModifierOptionCreateOrConnectWithoutDayInput
    upsert?: ModifierOptionUpsertWithoutDayInput
    disconnect?: boolean
    delete?: boolean
    connect?: ModifierOptionWhereUniqueInput
    update?: XOR<ModifierOptionUpdateWithoutDayInput, ModifierOptionUncheckedUpdateWithoutDayInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutExcludedFromDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutExcludedFromDayInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutExcludedFromDayInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutExcludedFromDayInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutExcludedFromDayInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutExcludedFromDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutExcludedFromDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutExcludedFromDayInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutExcludedFromDayInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutExcludedFromDayInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutExcludedFromDayInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutIncludedInDayInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutIncludedInDayInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutIncludedInDayInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutIncludedInDayInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutIncludedInDayInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutIncludedInDayInput>, Enumerable<ModifierOptionUncheckedCreateWithoutIncludedInDayInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutIncludedInDayInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutIncludedInDayInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutIncludedInDayInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutIncludedInDayInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutChallengeModifierInput = {
    create?: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeModifierInput
    connect?: UserWhereUniqueInput
  }

  export type ModifierOptionCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutChallengeModifierInput>, Enumerable<ModifierOptionUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutChallengeModifierInput>
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<Enumerable<DayCreateWithoutChallengeModifierInput>, Enumerable<DayUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutChallengeModifierInput>
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedChallengeModifiersInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutEncludedCustomChallengeModifiersInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutExcludedChallengeModifiersInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedChallengeModifiersInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomChallengeModifiersInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutModifierWhenPart1CompletedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierWhenPart1CompletedInput>
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutChallengeModifierInput>, Enumerable<ModifierOptionUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutChallengeModifierInput>
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<Enumerable<DayCreateWithoutChallengeModifierInput>, Enumerable<DayUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutChallengeModifierInput>
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedChallengeModifiersInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutEncludedCustomChallengeModifiersInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedChallengeModifiersInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomChallengeModifiersInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierWhenPart1CompletedInput>
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type UserUpdateOneWithoutChallengeModifierNestedInput = {
    create?: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengeModifierInput
    upsert?: UserUpsertWithoutChallengeModifierInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutChallengeModifierInput, UserUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type ModifierOptionUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutChallengeModifierInput>, Enumerable<ModifierOptionUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutChallengeModifierInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput>
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type DayUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutChallengeModifierInput>, Enumerable<DayUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutChallengeModifierInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutChallengeModifierInput>
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutChallengeModifierInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutChallengeModifierInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedChallengeModifiersInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutExcludedChallengeModifiersInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutEncludedCustomChallengeModifiersInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DayUpdateManyWithoutExcludedChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedChallengeModifiersInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomChallengeModifiersInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutIncludedCustomChallengeModifiersInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutIncludedCustomChallengeModifiersInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutIncludedCustomChallengeModifiersInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierWhenPart1CompletedInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput>
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutChallengeModifierInput>, Enumerable<ModifierOptionUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutChallengeModifierInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput>
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutChallengeModifierNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutChallengeModifierInput>, Enumerable<DayUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutChallengeModifierInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutChallengeModifierInput>
    createMany?: DayCreateManyChallengeModifierInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutChallengeModifierInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutChallengeModifierInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedChallengeModifiersInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutExcludedChallengeModifiersInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput>, Enumerable<ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutEncludedCustomChallengeModifiersInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutExcludedChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedChallengeModifiersInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomChallengeModifiersInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomChallengeModifiersInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutIncludedCustomChallengeModifiersInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutIncludedCustomChallengeModifiersInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutIncludedCustomChallengeModifiersInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierWhenPart1CompletedInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput>
    createMany?: DayCreateManyModifierWhenPart1CompletedInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ChallengeModifierCreateNestedOneWithoutModifierOptionInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierOptionInput
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutModifierOptionInput = {
    create?: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierOptionInput
    connect?: UserWhereUniqueInput
  }

  export type DayCreateNestedManyWithoutModifierOptionInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierOptionInput>, Enumerable<DayUncheckedCreateWithoutModifierOptionInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierOptionInput>
    createMany?: DayCreateManyModifierOptionInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedModifierOptionsInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutExcludedModifierOptionsInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedModifierOptionsInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutOptionWhenPart1CompletedInput = {
    create?: XOR<Enumerable<DayCreateWithoutOptionWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutOptionWhenPart1CompletedInput>
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutModifierOptionInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierOptionInput>, Enumerable<DayUncheckedCreateWithoutModifierOptionInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierOptionInput>
    createMany?: DayCreateManyModifierOptionInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedModifierOptionsInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedModifierOptionsInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput = {
    create?: XOR<Enumerable<DayCreateWithoutOptionWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutOptionWhenPart1CompletedInput>
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierOptionInput
    upsert?: ChallengeModifierUpsertWithoutModifierOptionInput
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<ChallengeModifierUpdateWithoutModifierOptionInput, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
  }

  export type UserUpdateOneWithoutModifierOptionNestedInput = {
    create?: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierOptionInput
    upsert?: UserUpsertWithoutModifierOptionInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModifierOptionInput, UserUncheckedUpdateWithoutModifierOptionInput>
  }

  export type DayUpdateManyWithoutModifierOptionNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierOptionInput>, Enumerable<DayUncheckedCreateWithoutModifierOptionInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierOptionInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutModifierOptionInput>
    createMany?: DayCreateManyModifierOptionInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutModifierOptionInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutModifierOptionInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedModifierOptionsInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutExcludedModifierOptionsInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DayUpdateManyWithoutExcludedModifierOptionsNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedModifierOptionsInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutExcludedModifierOptionsInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutOptionWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutOptionWhenPart1CompletedInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput>
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutModifierOptionNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierOptionInput>, Enumerable<DayUncheckedCreateWithoutModifierOptionInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierOptionInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutModifierOptionInput>
    createMany?: DayCreateManyModifierOptionInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutModifierOptionInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutModifierOptionInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutExcludedModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutExcludedModifierOptionsInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutExcludedModifierOptionsInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<Enumerable<ModifierPackCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<ModifierPackCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    upsert?: Enumerable<ModifierPackUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    set?: Enumerable<ModifierPackWhereUniqueInput>
    disconnect?: Enumerable<ModifierPackWhereUniqueInput>
    delete?: Enumerable<ModifierPackWhereUniqueInput>
    connect?: Enumerable<ModifierPackWhereUniqueInput>
    update?: Enumerable<ModifierPackUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    updateMany?: Enumerable<ModifierPackUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput>
    deleteMany?: Enumerable<ModifierPackScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultExcludedModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput>, Enumerable<UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutExcludedModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutExcludedModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutExcludedModifierOptionsInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutExcludedModifierOptionsInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutIncludedCustomModifierOptionsInput>, Enumerable<DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutIncludedCustomModifierOptionsInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutOptionWhenPart1CompletedInput>, Enumerable<DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutOptionWhenPart1CompletedInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput>
    createMany?: DayCreateManyOptionWhenPart1CompletedInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutModifierPackExcludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackExcludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionCreateNestedManyWithoutModifierPackIncludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackIncludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutModifierPackInput = {
    create?: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierPackInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutModifierPackExcludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackExcludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutModifierPackIncludedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackIncludedInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutModifierPackExcludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackExcludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutModifierPackExcludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutModifierPackExcludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutModifierPackExcludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUpdateManyWithoutModifierPackIncludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackIncludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutModifierPackIncludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutModifierPackIncludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutModifierPackIncludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type UserUpdateOneWithoutModifierPackNestedInput = {
    create?: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
    connectOrCreate?: UserCreateOrConnectWithoutModifierPackInput
    upsert?: UserUpsertWithoutModifierPackInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutModifierPackInput, UserUncheckedUpdateWithoutModifierPackInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackExcludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutModifierPackExcludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackExcludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackExcludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutModifierPackExcludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutModifierPackExcludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutModifierPackExcludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutModifierPackIncludedInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput>
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ModifierOptionUncheckedUpdateManyWithoutModifierPackIncludedNestedInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutModifierPackIncludedInput>, Enumerable<ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutModifierPackIncludedInput>
    upsert?: Enumerable<ModifierOptionUpsertWithWhereUniqueWithoutModifierPackIncludedInput>
    set?: Enumerable<ModifierOptionWhereUniqueInput>
    disconnect?: Enumerable<ModifierOptionWhereUniqueInput>
    delete?: Enumerable<ModifierOptionWhereUniqueInput>
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
    update?: Enumerable<ModifierOptionUpdateWithWhereUniqueWithoutModifierPackIncludedInput>
    updateMany?: Enumerable<ModifierOptionUpdateManyWithWhereWithoutModifierPackIncludedInput>
    deleteMany?: Enumerable<ModifierOptionScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type GameCreateWithoutUserInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    dateCompleted?: Date | string | null
    Rank?: RankCreateNestedOneWithoutGameInput
    Day?: DayCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserInput = {
    id?: number
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameCreateManyUserInputEnvelope = {
    data: Enumerable<GameCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PublicProfileCreateWithoutUserInput = {
    dateCreated?: Date | string
    name: string
    Game?: GameCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileUncheckedCreateWithoutUserInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    Game?: GameUncheckedCreateNestedManyWithoutPublicProfileInput
  }

  export type PublicProfileCreateOrConnectWithoutUserInput = {
    where: PublicProfileWhereUniqueInput
    create: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput>
  }

  export type PublicProfileCreateManyUserInputEnvelope = {
    data: Enumerable<PublicProfileCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ChallengeModifierCreateWithoutCreatedByInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutCreatedByInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallengeModifierCreateManyCreatedByInputEnvelope = {
    data: Enumerable<ChallengeModifierCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type ModifierOptionCreateWithoutCreatedByInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutCreatedByInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierOptionCreateManyCreatedByInputEnvelope = {
    data: Enumerable<ModifierOptionCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type ChallengeModifierCreateWithoutUserExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutUserExcludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutUserExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput>
  }

  export type ModifierOptionCreateWithoutUserExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutUserExcludedInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutUserExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput>
  }

  export type ChallengeModifierCreateWithoutUserIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutUserIncludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutUserIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput>
  }

  export type ModifierOptionCreateWithoutUserIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutUserIncludedInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutUserIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput>
  }

  export type ModifierPackCreateWithoutCreatedByInput = {
    dateCreated?: Date | string
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackUncheckedCreateWithoutCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackCreateOrConnectWithoutCreatedByInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierPackCreateManyCreatedByInputEnvelope = {
    data: Enumerable<ModifierPackCreateManyCreatedByInput>
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
    create: XOR<GameCreateWithoutUserInput, GameUncheckedCreateWithoutUserInput>
  }

  export type GameUpdateWithWhereUniqueWithoutUserInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutUserInput, GameUncheckedUpdateWithoutUserInput>
  }

  export type GameUpdateManyWithWhereWithoutUserInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGameInput>
  }

  export type GameScalarWhereInput = {
    AND?: Enumerable<GameScalarWhereInput>
    OR?: Enumerable<GameScalarWhereInput>
    NOT?: Enumerable<GameScalarWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    userId?: StringFilter | string
    number?: IntFilter | number
    year?: IntFilter | number
    name?: StringFilter | string
    playerName?: StringNullableFilter | string | null
    currentDay?: IntFilter | number
    currentDayCompleted?: BoolFilter | boolean
    currentRerollTokens?: IntFilter | number
    rerollTokensSpent?: IntFilter | number
    repositoryLink?: StringNullableFilter | string | null
    progressSheetLink?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
    publicProfileId?: IntNullableFilter | number | null
    score?: IntFilter | number
    rankId?: IntNullableFilter | number | null
    dateCompleted?: DateTimeNullableFilter | Date | string | null
  }

  export type PublicProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: PublicProfileWhereUniqueInput
    update: XOR<PublicProfileUpdateWithoutUserInput, PublicProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PublicProfileCreateWithoutUserInput, PublicProfileUncheckedCreateWithoutUserInput>
  }

  export type PublicProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: PublicProfileWhereUniqueInput
    data: XOR<PublicProfileUpdateWithoutUserInput, PublicProfileUncheckedUpdateWithoutUserInput>
  }

  export type PublicProfileUpdateManyWithWhereWithoutUserInput = {
    where: PublicProfileScalarWhereInput
    data: XOR<PublicProfileUpdateManyMutationInput, PublicProfileUncheckedUpdateManyWithoutPublicProfileInput>
  }

  export type PublicProfileScalarWhereInput = {
    AND?: Enumerable<PublicProfileScalarWhereInput>
    OR?: Enumerable<PublicProfileScalarWhereInput>
    NOT?: Enumerable<PublicProfileScalarWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    name?: StringFilter | string
    userId?: StringFilter | string
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutCreatedByInput, ChallengeModifierUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChallengeModifierCreateWithoutCreatedByInput, ChallengeModifierUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutCreatedByInput, ChallengeModifierUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutChallengeModifierInput>
  }

  export type ChallengeModifierScalarWhereInput = {
    AND?: Enumerable<ChallengeModifierScalarWhereInput>
    OR?: Enumerable<ChallengeModifierScalarWhereInput>
    NOT?: Enumerable<ChallengeModifierScalarWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    name?: StringFilter | string
    text?: StringFilter | string
    hasOptions?: BoolFilter | boolean
    explanatoryUrl?: StringNullableFilter | string | null
    standard?: BoolFilter | boolean
    createdById?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutCreatedByInput, ModifierOptionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ModifierOptionCreateWithoutCreatedByInput, ModifierOptionUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutCreatedByInput, ModifierOptionUncheckedUpdateWithoutCreatedByInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutCreatedByInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutModifierOptionInput>
  }

  export type ModifierOptionScalarWhereInput = {
    AND?: Enumerable<ModifierOptionScalarWhereInput>
    OR?: Enumerable<ModifierOptionScalarWhereInput>
    NOT?: Enumerable<ModifierOptionScalarWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    challengeModifierId?: IntFilter | number
    name?: StringFilter | string
    text?: StringFilter | string
    explanatoryUrl?: StringNullableFilter | string | null
    standard?: BoolFilter | boolean
    createdById?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutUserExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutUserExcludedInput, ChallengeModifierUncheckedUpdateWithoutUserExcludedInput>
    create: XOR<ChallengeModifierCreateWithoutUserExcludedInput, ChallengeModifierUncheckedCreateWithoutUserExcludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutUserExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutUserExcludedInput, ChallengeModifierUncheckedUpdateWithoutUserExcludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutUserExcludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutUserExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutUserExcludedInput, ModifierOptionUncheckedUpdateWithoutUserExcludedInput>
    create: XOR<ModifierOptionCreateWithoutUserExcludedInput, ModifierOptionUncheckedCreateWithoutUserExcludedInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutUserExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutUserExcludedInput, ModifierOptionUncheckedUpdateWithoutUserExcludedInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutUserExcludedInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutUserIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutUserIncludedInput, ChallengeModifierUncheckedUpdateWithoutUserIncludedInput>
    create: XOR<ChallengeModifierCreateWithoutUserIncludedInput, ChallengeModifierUncheckedCreateWithoutUserIncludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutUserIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutUserIncludedInput, ChallengeModifierUncheckedUpdateWithoutUserIncludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutUserIncludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutUserIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutUserIncludedInput, ModifierOptionUncheckedUpdateWithoutUserIncludedInput>
    create: XOR<ModifierOptionCreateWithoutUserIncludedInput, ModifierOptionUncheckedCreateWithoutUserIncludedInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutUserIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutUserIncludedInput, ModifierOptionUncheckedUpdateWithoutUserIncludedInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutUserIncludedInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutCreatedByInput, ModifierPackUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ModifierPackCreateWithoutCreatedByInput, ModifierPackUncheckedCreateWithoutCreatedByInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutCreatedByInput, ModifierPackUncheckedUpdateWithoutCreatedByInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutCreatedByInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutModifierPackInput>
  }

  export type ModifierPackScalarWhereInput = {
    AND?: Enumerable<ModifierPackScalarWhereInput>
    OR?: Enumerable<ModifierPackScalarWhereInput>
    NOT?: Enumerable<ModifierPackScalarWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    createdById?: StringNullableFilter | string | null
    public?: BoolFilter | boolean
  }

  export type UserCreateWithoutPublicProfileInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPublicProfileInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPublicProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
  }

  export type GameCreateWithoutPublicProfileInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    dateCompleted?: Date | string | null
    User: UserCreateNestedOneWithoutGameInput
    Rank?: RankCreateNestedOneWithoutGameInput
    Day?: DayCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPublicProfileInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPublicProfileInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput>
  }

  export type GameCreateManyPublicProfileInputEnvelope = {
    data: Enumerable<GameCreateManyPublicProfileInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPublicProfileInput = {
    update: XOR<UserUpdateWithoutPublicProfileInput, UserUncheckedUpdateWithoutPublicProfileInput>
    create: XOR<UserCreateWithoutPublicProfileInput, UserUncheckedCreateWithoutPublicProfileInput>
  }

  export type UserUpdateWithoutPublicProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPublicProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type GameUpsertWithWhereUniqueWithoutPublicProfileInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPublicProfileInput, GameUncheckedUpdateWithoutPublicProfileInput>
    create: XOR<GameCreateWithoutPublicProfileInput, GameUncheckedCreateWithoutPublicProfileInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPublicProfileInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPublicProfileInput, GameUncheckedUpdateWithoutPublicProfileInput>
  }

  export type GameUpdateManyWithWhereWithoutPublicProfileInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGameInput>
  }

  export type UserCreateWithoutGameInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutGameInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
  }

  export type RankCreateWithoutGameInput = {
    name: string
    minimumScore: number
  }

  export type RankUncheckedCreateWithoutGameInput = {
    id?: number
    name: string
    minimumScore: number
  }

  export type RankCreateOrConnectWithoutGameInput = {
    where: RankWhereUniqueInput
    create: XOR<RankCreateWithoutGameInput, RankUncheckedCreateWithoutGameInput>
  }

  export type DayCreateWithoutGameInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutGameInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutGameInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput>
  }

  export type DayCreateManyGameInputEnvelope = {
    data: Enumerable<DayCreateManyGameInput>
    skipDuplicates?: boolean
  }

  export type PublicProfileCreateWithoutGameInput = {
    dateCreated?: Date | string
    name: string
    User: UserCreateNestedOneWithoutPublicProfileInput
  }

  export type PublicProfileUncheckedCreateWithoutGameInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    userId: string
  }

  export type PublicProfileCreateOrConnectWithoutGameInput = {
    where: PublicProfileWhereUniqueInput
    create: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
  }

  export type UserUpsertWithoutGameInput = {
    update: XOR<UserUpdateWithoutGameInput, UserUncheckedUpdateWithoutGameInput>
    create: XOR<UserCreateWithoutGameInput, UserUncheckedCreateWithoutGameInput>
  }

  export type UserUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type RankUpsertWithoutGameInput = {
    update: XOR<RankUpdateWithoutGameInput, RankUncheckedUpdateWithoutGameInput>
    create: XOR<RankCreateWithoutGameInput, RankUncheckedCreateWithoutGameInput>
  }

  export type RankUpdateWithoutGameInput = {
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type RankUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    minimumScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpsertWithWhereUniqueWithoutGameInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutGameInput, DayUncheckedUpdateWithoutGameInput>
    create: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput>
  }

  export type DayUpdateWithWhereUniqueWithoutGameInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutGameInput, DayUncheckedUpdateWithoutGameInput>
  }

  export type DayUpdateManyWithWhereWithoutGameInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDayInput>
  }

  export type DayScalarWhereInput = {
    AND?: Enumerable<DayScalarWhereInput>
    OR?: Enumerable<DayScalarWhereInput>
    NOT?: Enumerable<DayScalarWhereInput>
    id?: IntFilter | number
    dateCreated?: DateTimeFilter | Date | string
    gameId?: IntFilter | number
    userId?: StringFilter | string
    gameNumber?: IntFilter | number
    number?: IntFilter | number
    challengeModifierId?: IntNullableFilter | number | null
    modifierOptionId?: IntNullableFilter | number | null
    dateFirstRolled?: DateTimeNullableFilter | Date | string | null
    part1Completed?: DateTimeNullableFilter | Date | string | null
    modifierWhenPart1CompletedId?: IntNullableFilter | number | null
    optionWhenPart1CompletedId?: IntNullableFilter | number | null
    part2Completed?: DateTimeNullableFilter | Date | string | null
    challengeModifierRerollsUsed?: IntFilter | number
    modifierOptionRerollsUsed?: IntFilter | number
    rerollTokensSpentDuringPart2?: IntFilter | number
    netScore?: IntFilter | number
  }

  export type PublicProfileUpsertWithoutGameInput = {
    update: XOR<PublicProfileUpdateWithoutGameInput, PublicProfileUncheckedUpdateWithoutGameInput>
    create: XOR<PublicProfileCreateWithoutGameInput, PublicProfileUncheckedCreateWithoutGameInput>
  }

  export type PublicProfileUpdateWithoutGameInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneRequiredWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateWithoutRankInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    dateCompleted?: Date | string | null
    User: UserCreateNestedOneWithoutGameInput
    Day?: DayCreateNestedManyWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
  }

  export type GameUncheckedCreateWithoutRankInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    dateCompleted?: Date | string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutRankInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutRankInput, GameUncheckedCreateWithoutRankInput>
  }

  export type GameCreateManyRankInputEnvelope = {
    data: Enumerable<GameCreateManyRankInput>
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutRankInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutRankInput, GameUncheckedUpdateWithoutRankInput>
    create: XOR<GameCreateWithoutRankInput, GameUncheckedCreateWithoutRankInput>
  }

  export type GameUpdateWithWhereUniqueWithoutRankInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutRankInput, GameUncheckedUpdateWithoutRankInput>
  }

  export type GameUpdateManyWithWhereWithoutRankInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutGameInput>
  }

  export type ChallengeModifierCreateWithoutExcludedFromDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutExcludedFromDayInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutExcludedFromDayInput, ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput>
  }

  export type ModifierOptionCreateWithoutExcludedFromDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutExcludedFromDayInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutExcludedFromDayInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutExcludedFromDayInput, ModifierOptionUncheckedCreateWithoutExcludedFromDayInput>
  }

  export type ChallengeModifierCreateWithoutIncludedInDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutIncludedInDayInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutIncludedInDayInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutIncludedInDayInput, ChallengeModifierUncheckedCreateWithoutIncludedInDayInput>
  }

  export type ModifierOptionCreateWithoutIncludedInDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutIncludedInDayInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutIncludedInDayInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutIncludedInDayInput, ModifierOptionUncheckedCreateWithoutIncludedInDayInput>
  }

  export type GameCreateWithoutDayInput = {
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    dateCompleted?: Date | string | null
    User: UserCreateNestedOneWithoutGameInput
    Rank?: RankCreateNestedOneWithoutGameInput
    PublicProfile?: PublicProfileCreateNestedOneWithoutGameInput
  }

  export type GameUncheckedCreateWithoutDayInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
  }

  export type GameCreateOrConnectWithoutDayInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
  }

  export type ChallengeModifierCreateWithoutDayCompletedInPart1Input = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
  }

  export type ChallengeModifierCreateOrConnectWithoutDayCompletedInPart1Input = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
  }

  export type ModifierOptionCreateWithoutDayCompletedInPart1Input = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
  }

  export type ModifierOptionCreateOrConnectWithoutDayCompletedInPart1Input = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierCreateWithoutDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutDayInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutDayInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
  }

  export type ModifierOptionCreateWithoutDayInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutDayInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutDayInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutExcludedFromDayInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutExcludedFromDayInput, ChallengeModifierUncheckedUpdateWithoutExcludedFromDayInput>
    create: XOR<ChallengeModifierCreateWithoutExcludedFromDayInput, ChallengeModifierUncheckedCreateWithoutExcludedFromDayInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutExcludedFromDayInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutExcludedFromDayInput, ChallengeModifierUncheckedUpdateWithoutExcludedFromDayInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutExcludedFromDayInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutExcludedChallengeModifiersInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutExcludedFromDayInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutExcludedFromDayInput, ModifierOptionUncheckedUpdateWithoutExcludedFromDayInput>
    create: XOR<ModifierOptionCreateWithoutExcludedFromDayInput, ModifierOptionUncheckedCreateWithoutExcludedFromDayInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutExcludedFromDayInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutExcludedFromDayInput, ModifierOptionUncheckedUpdateWithoutExcludedFromDayInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutExcludedFromDayInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutIncludedInDayInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutIncludedInDayInput, ChallengeModifierUncheckedUpdateWithoutIncludedInDayInput>
    create: XOR<ChallengeModifierCreateWithoutIncludedInDayInput, ChallengeModifierUncheckedCreateWithoutIncludedInDayInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutIncludedInDayInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutIncludedInDayInput, ChallengeModifierUncheckedUpdateWithoutIncludedInDayInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutIncludedInDayInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutIncludedInDayInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutIncludedInDayInput, ModifierOptionUncheckedUpdateWithoutIncludedInDayInput>
    create: XOR<ModifierOptionCreateWithoutIncludedInDayInput, ModifierOptionUncheckedCreateWithoutIncludedInDayInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutIncludedInDayInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutIncludedInDayInput, ModifierOptionUncheckedUpdateWithoutIncludedInDayInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutIncludedInDayInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsInput>
  }

  export type GameUpsertWithoutDayInput = {
    update: XOR<GameUpdateWithoutDayInput, GameUncheckedUpdateWithoutDayInput>
    create: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
  }

  export type GameUpdateWithoutDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Rank?: RankUpdateOneWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    rankId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChallengeModifierUpsertWithoutDayCompletedInPart1Input = {
    update: XOR<ChallengeModifierUpdateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input>
    create: XOR<ChallengeModifierCreateWithoutDayCompletedInPart1Input, ChallengeModifierUncheckedCreateWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierUpdateWithoutDayCompletedInPart1Input = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutDayCompletedInPart1Input = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
  }

  export type ModifierOptionUpsertWithoutDayCompletedInPart1Input = {
    update: XOR<ModifierOptionUpdateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input>
    create: XOR<ModifierOptionCreateWithoutDayCompletedInPart1Input, ModifierOptionUncheckedCreateWithoutDayCompletedInPart1Input>
  }

  export type ModifierOptionUpdateWithoutDayCompletedInPart1Input = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutDayCompletedInPart1Input = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
  }

  export type ChallengeModifierUpsertWithoutDayInput = {
    update: XOR<ChallengeModifierUpdateWithoutDayInput, ChallengeModifierUncheckedUpdateWithoutDayInput>
    create: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
  }

  export type ChallengeModifierUpdateWithoutDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUpsertWithoutDayInput = {
    update: XOR<ModifierOptionUpdateWithoutDayInput, ModifierOptionUncheckedUpdateWithoutDayInput>
    create: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
  }

  export type ModifierOptionUpdateWithoutDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type UserCreateWithoutChallengeModifierInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutChallengeModifierInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutChallengeModifierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
  }

  export type ModifierOptionCreateWithoutChallengeModifierInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput>
  }

  export type ModifierOptionCreateManyChallengeModifierInputEnvelope = {
    data: Enumerable<ModifierOptionCreateManyChallengeModifierInput>
    skipDuplicates?: boolean
  }

  export type DayCreateWithoutChallengeModifierInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutChallengeModifierInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput>
  }

  export type DayCreateManyChallengeModifierInputEnvelope = {
    data: Enumerable<DayCreateManyChallengeModifierInput>
    skipDuplicates?: boolean
  }

  export type ModifierPackCreateWithoutExcludedChallengeModifiersInput = {
    dateCreated?: Date | string
    public?: boolean
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackIncludedInput
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
  }

  export type ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    public?: boolean
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackCreateOrConnectWithoutExcludedChallengeModifiersInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutExcludedChallengeModifiersInput, ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput>
  }

  export type ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput = {
    dateCreated?: Date | string
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackExcludedInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackIncludedInput
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
  }

  export type ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackCreateOrConnectWithoutEncludedCustomChallengeModifiersInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput, ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>
  }

  export type UserCreateWithoutDefaultExcludedChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type DayCreateWithoutExcludedChallengeModifiersInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutExcludedChallengeModifiersInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutExcludedChallengeModifiersInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput>
  }

  export type DayCreateWithoutIncludedCustomChallengeModifiersInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutIncludedCustomChallengeModifiersInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutIncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput>
  }

  export type DayCreateWithoutModifierWhenPart1CompletedInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutModifierWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutModifierWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>
  }

  export type DayCreateManyModifierWhenPart1CompletedInputEnvelope = {
    data: Enumerable<DayCreateManyModifierWhenPart1CompletedInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChallengeModifierInput = {
    update: XOR<UserUpdateWithoutChallengeModifierInput, UserUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<UserCreateWithoutChallengeModifierInput, UserUncheckedCreateWithoutChallengeModifierInput>
  }

  export type UserUpdateWithoutChallengeModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengeModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutChallengeModifierInput, ModifierOptionUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutChallengeModifierInput, ModifierOptionUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutChallengeModifierInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutModifierOptionInput>
  }

  export type DayUpsertWithWhereUniqueWithoutChallengeModifierInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutChallengeModifierInput, DayUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<DayCreateWithoutChallengeModifierInput, DayUncheckedCreateWithoutChallengeModifierInput>
  }

  export type DayUpdateWithWhereUniqueWithoutChallengeModifierInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutChallengeModifierInput, DayUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type DayUpdateManyWithWhereWithoutChallengeModifierInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDayInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutExcludedChallengeModifiersInput, ModifierPackUncheckedUpdateWithoutExcludedChallengeModifiersInput>
    create: XOR<ModifierPackCreateWithoutExcludedChallengeModifiersInput, ModifierPackUncheckedCreateWithoutExcludedChallengeModifiersInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutExcludedChallengeModifiersInput, ModifierPackUncheckedUpdateWithoutExcludedChallengeModifiersInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutExcludedChallengeModifiersInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutModifierPackExcludedInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutEncludedCustomChallengeModifiersInput, ModifierPackUncheckedUpdateWithoutEncludedCustomChallengeModifiersInput>
    create: XOR<ModifierPackCreateWithoutEncludedCustomChallengeModifiersInput, ModifierPackUncheckedCreateWithoutEncludedCustomChallengeModifiersInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutEncludedCustomChallengeModifiersInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutEncludedCustomChallengeModifiersInput, ModifierPackUncheckedUpdateWithoutEncludedCustomChallengeModifiersInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutEncludedCustomChallengeModifiersInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutModifierPackIncludedInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultExcludedChallengeModifiersInput>
    create: XOR<UserCreateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedCreateWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultExcludedChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultExcludedChallengeModifiersInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultExcludedChallengeModifiersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserExcludedInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    serializedId?: StringNullableFilter | string | null
    username?: StringNullableFilter | string | null
    dateCreated?: DateTimeFilter | Date | string
    numberOfGames?: IntFilter | number
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultIncludedCustomChallengeModifiersInput>
    create: XOR<UserCreateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedCreateWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultIncludedCustomChallengeModifiersInput, UserUncheckedUpdateWithoutDefaultIncludedCustomChallengeModifiersInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultIncludedCustomChallengeModifiersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserIncludedInput>
  }

  export type DayUpsertWithWhereUniqueWithoutExcludedChallengeModifiersInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutExcludedChallengeModifiersInput, DayUncheckedUpdateWithoutExcludedChallengeModifiersInput>
    create: XOR<DayCreateWithoutExcludedChallengeModifiersInput, DayUncheckedCreateWithoutExcludedChallengeModifiersInput>
  }

  export type DayUpdateWithWhereUniqueWithoutExcludedChallengeModifiersInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutExcludedChallengeModifiersInput, DayUncheckedUpdateWithoutExcludedChallengeModifiersInput>
  }

  export type DayUpdateManyWithWhereWithoutExcludedChallengeModifiersInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutExcludedFromDayInput>
  }

  export type DayUpsertWithWhereUniqueWithoutIncludedCustomChallengeModifiersInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutIncludedCustomChallengeModifiersInput, DayUncheckedUpdateWithoutIncludedCustomChallengeModifiersInput>
    create: XOR<DayCreateWithoutIncludedCustomChallengeModifiersInput, DayUncheckedCreateWithoutIncludedCustomChallengeModifiersInput>
  }

  export type DayUpdateWithWhereUniqueWithoutIncludedCustomChallengeModifiersInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutIncludedCustomChallengeModifiersInput, DayUncheckedUpdateWithoutIncludedCustomChallengeModifiersInput>
  }

  export type DayUpdateManyWithWhereWithoutIncludedCustomChallengeModifiersInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutIncludedInDayInput>
  }

  export type DayUpsertWithWhereUniqueWithoutModifierWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutModifierWhenPart1CompletedInput, DayUncheckedUpdateWithoutModifierWhenPart1CompletedInput>
    create: XOR<DayCreateWithoutModifierWhenPart1CompletedInput, DayUncheckedCreateWithoutModifierWhenPart1CompletedInput>
  }

  export type DayUpdateWithWhereUniqueWithoutModifierWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutModifierWhenPart1CompletedInput, DayUncheckedUpdateWithoutModifierWhenPart1CompletedInput>
  }

  export type DayUpdateManyWithWhereWithoutModifierWhenPart1CompletedInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierCreateWithoutModifierOptionInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierOptionInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierOptionInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
  }

  export type UserCreateWithoutModifierOptionInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutModifierOptionInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutModifierOptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
  }

  export type DayCreateWithoutModifierOptionInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutModifierOptionInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput>
  }

  export type DayCreateManyModifierOptionInputEnvelope = {
    data: Enumerable<DayCreateManyModifierOptionInput>
    skipDuplicates?: boolean
  }

  export type ModifierPackCreateWithoutExcludedModifierOptionsInput = {
    dateCreated?: Date | string
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackIncludedInput
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
  }

  export type ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackCreateOrConnectWithoutExcludedModifierOptionsInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutExcludedModifierOptionsInput, ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput>
  }

  export type ModifierPackCreateWithoutIncludedCustomModifierOptionsInput = {
    dateCreated?: Date | string
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutModifierPackIncludedInput
    CreatedBy?: UserCreateNestedOneWithoutModifierPackInput
  }

  export type ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput = {
    id?: number
    dateCreated?: Date | string
    createdById?: string | null
    public?: boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutModifierPackExcludedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutModifierPackIncludedInput
  }

  export type ModifierPackCreateOrConnectWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierPackWhereUniqueInput
    create: XOR<ModifierPackCreateWithoutIncludedCustomModifierOptionsInput, ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput>
  }

  export type UserCreateWithoutDefaultExcludedModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDefaultExcludedModifierOptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserCreateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    ModifierPack?: ModifierPackUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type DayCreateWithoutExcludedModifierOptionsInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutExcludedModifierOptionsInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutExcludedModifierOptionsInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutExcludedModifierOptionsInput, DayUncheckedCreateWithoutExcludedModifierOptionsInput>
  }

  export type DayCreateWithoutIncludedCustomModifierOptionsInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    OptionWhenPart1Completed?: ModifierOptionCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutIncludedCustomModifierOptionsInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutIncludedCustomModifierOptionsInput, DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput>
  }

  export type DayCreateWithoutOptionWhenPart1CompletedInput = {
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutIncludedInDayInput
    Game: GameCreateNestedOneWithoutDayInput
    ModifierWhenPart1Completed?: ChallengeModifierCreateNestedOneWithoutDayCompletedInPart1Input
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    ModifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutOptionWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutExcludedFromDayInput
    ExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutExcludedFromDayInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutIncludedInDayInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutIncludedInDayInput
  }

  export type DayCreateOrConnectWithoutOptionWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>
  }

  export type DayCreateManyOptionWhenPart1CompletedInputEnvelope = {
    data: Enumerable<DayCreateManyOptionWhenPart1CompletedInput>
    skipDuplicates?: boolean
  }

  export type ChallengeModifierUpsertWithoutModifierOptionInput = {
    update: XOR<ChallengeModifierUpdateWithoutModifierOptionInput, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
  }

  export type ChallengeModifierUpdateWithoutModifierOptionInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type UserUpsertWithoutModifierOptionInput = {
    update: XOR<UserUpdateWithoutModifierOptionInput, UserUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<UserCreateWithoutModifierOptionInput, UserUncheckedCreateWithoutModifierOptionInput>
  }

  export type UserUpdateWithoutModifierOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutModifierOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DayUpsertWithWhereUniqueWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutModifierOptionInput, DayUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput>
  }

  export type DayUpdateWithWhereUniqueWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutModifierOptionInput, DayUncheckedUpdateWithoutModifierOptionInput>
  }

  export type DayUpdateManyWithWhereWithoutModifierOptionInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDayInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutExcludedModifierOptionsInput, ModifierPackUncheckedUpdateWithoutExcludedModifierOptionsInput>
    create: XOR<ModifierPackCreateWithoutExcludedModifierOptionsInput, ModifierPackUncheckedCreateWithoutExcludedModifierOptionsInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutExcludedModifierOptionsInput, ModifierPackUncheckedUpdateWithoutExcludedModifierOptionsInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutExcludedModifierOptionsInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutModifierPackExcludedInput>
  }

  export type ModifierPackUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierPackWhereUniqueInput
    update: XOR<ModifierPackUpdateWithoutIncludedCustomModifierOptionsInput, ModifierPackUncheckedUpdateWithoutIncludedCustomModifierOptionsInput>
    create: XOR<ModifierPackCreateWithoutIncludedCustomModifierOptionsInput, ModifierPackUncheckedCreateWithoutIncludedCustomModifierOptionsInput>
  }

  export type ModifierPackUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierPackWhereUniqueInput
    data: XOR<ModifierPackUpdateWithoutIncludedCustomModifierOptionsInput, ModifierPackUncheckedUpdateWithoutIncludedCustomModifierOptionsInput>
  }

  export type ModifierPackUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput = {
    where: ModifierPackScalarWhereInput
    data: XOR<ModifierPackUpdateManyMutationInput, ModifierPackUncheckedUpdateManyWithoutModifierPackIncludedInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedUpdateWithoutDefaultExcludedModifierOptionsInput>
    create: XOR<UserCreateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedCreateWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultExcludedModifierOptionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultExcludedModifierOptionsInput, UserUncheckedUpdateWithoutDefaultExcludedModifierOptionsInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultExcludedModifierOptionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserExcludedInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedUpdateWithoutDefaultIncludedCustomModifierOptionsInput>
    create: XOR<UserCreateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedCreateWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDefaultIncludedCustomModifierOptionsInput, UserUncheckedUpdateWithoutDefaultIncludedCustomModifierOptionsInput>
  }

  export type UserUpdateManyWithWhereWithoutDefaultIncludedCustomModifierOptionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserIncludedInput>
  }

  export type DayUpsertWithWhereUniqueWithoutExcludedModifierOptionsInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutExcludedModifierOptionsInput, DayUncheckedUpdateWithoutExcludedModifierOptionsInput>
    create: XOR<DayCreateWithoutExcludedModifierOptionsInput, DayUncheckedCreateWithoutExcludedModifierOptionsInput>
  }

  export type DayUpdateWithWhereUniqueWithoutExcludedModifierOptionsInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutExcludedModifierOptionsInput, DayUncheckedUpdateWithoutExcludedModifierOptionsInput>
  }

  export type DayUpdateManyWithWhereWithoutExcludedModifierOptionsInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutExcludedFromDayInput>
  }

  export type DayUpsertWithWhereUniqueWithoutIncludedCustomModifierOptionsInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutIncludedCustomModifierOptionsInput, DayUncheckedUpdateWithoutIncludedCustomModifierOptionsInput>
    create: XOR<DayCreateWithoutIncludedCustomModifierOptionsInput, DayUncheckedCreateWithoutIncludedCustomModifierOptionsInput>
  }

  export type DayUpdateWithWhereUniqueWithoutIncludedCustomModifierOptionsInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutIncludedCustomModifierOptionsInput, DayUncheckedUpdateWithoutIncludedCustomModifierOptionsInput>
  }

  export type DayUpdateManyWithWhereWithoutIncludedCustomModifierOptionsInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutIncludedInDayInput>
  }

  export type DayUpsertWithWhereUniqueWithoutOptionWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutOptionWhenPart1CompletedInput, DayUncheckedUpdateWithoutOptionWhenPart1CompletedInput>
    create: XOR<DayCreateWithoutOptionWhenPart1CompletedInput, DayUncheckedCreateWithoutOptionWhenPart1CompletedInput>
  }

  export type DayUpdateWithWhereUniqueWithoutOptionWhenPart1CompletedInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutOptionWhenPart1CompletedInput, DayUncheckedUpdateWithoutOptionWhenPart1CompletedInput>
  }

  export type DayUpdateManyWithWhereWithoutOptionWhenPart1CompletedInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDayCompletedInPart1Input>
  }

  export type ChallengeModifierCreateWithoutModifierPackExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutEncludedCustomChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierPackExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>
  }

  export type ModifierOptionCreateWithoutModifierPackExcludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackIncluded?: ModifierPackCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackIncluded?: ModifierPackUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutModifierPackExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutModifierPackExcludedInput, ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierCreateWithoutModifierPackIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    CreatedBy?: UserCreateNestedOneWithoutChallengeModifierInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedChallengeModifiersInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutChallengeModifierInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedChallengeModifiersInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomChallengeModifiersInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedChallengeModifiersInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomChallengeModifiersInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutModifierWhenPart1CompletedInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierPackIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>
  }

  export type ModifierOptionCreateWithoutModifierPackIncludedInput = {
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
    ChallengeModifier: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
    CreatedBy?: UserCreateNestedOneWithoutModifierOptionInput
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackCreateNestedManyWithoutExcludedModifierOptionsInput
    UserExcluded?: UserCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
    ModifierPackExcluded?: ModifierPackUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    UserExcluded?: UserUncheckedCreateNestedManyWithoutDefaultExcludedModifierOptionsInput
    UserIncluded?: UserUncheckedCreateNestedManyWithoutDefaultIncludedCustomModifierOptionsInput
    ExcludedFromDay?: DayUncheckedCreateNestedManyWithoutExcludedModifierOptionsInput
    IncludedInDay?: DayUncheckedCreateNestedManyWithoutIncludedCustomModifierOptionsInput
    DayCompletedInPart1?: DayUncheckedCreateNestedManyWithoutOptionWhenPart1CompletedInput
  }

  export type ModifierOptionCreateOrConnectWithoutModifierPackIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutModifierPackIncludedInput, ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput>
  }

  export type UserCreateWithoutModifierPackInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionCreateNestedManyWithoutUserIncludedInput
  }

  export type UserUncheckedCreateWithoutModifierPackInput = {
    id: string
    serializedId?: string | null
    username?: string | null
    dateCreated?: Date | string
    numberOfGames?: number
    Game?: GameUncheckedCreateNestedManyWithoutUserInput
    PublicProfile?: PublicProfileUncheckedCreateNestedManyWithoutUserInput
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutCreatedByInput
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutCreatedByInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserExcludedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedCreateNestedManyWithoutUserIncludedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedCreateNestedManyWithoutUserIncludedInput
  }

  export type UserCreateOrConnectWithoutModifierPackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackExcludedInput>
    create: XOR<ChallengeModifierCreateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackExcludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutModifierPackExcludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackExcludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutModifierPackExcludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutExcludedChallengeModifiersInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutModifierPackExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutModifierPackExcludedInput, ModifierOptionUncheckedUpdateWithoutModifierPackExcludedInput>
    create: XOR<ModifierOptionCreateWithoutModifierPackExcludedInput, ModifierOptionUncheckedCreateWithoutModifierPackExcludedInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutModifierPackExcludedInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutModifierPackExcludedInput, ModifierOptionUncheckedUpdateWithoutModifierPackExcludedInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutModifierPackExcludedInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsInput>
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutModifierPackIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackIncludedInput>
    create: XOR<ChallengeModifierCreateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedCreateWithoutModifierPackIncludedInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutModifierPackIncludedInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutModifierPackIncludedInput, ChallengeModifierUncheckedUpdateWithoutModifierPackIncludedInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutModifierPackIncludedInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersInput>
  }

  export type ModifierOptionUpsertWithWhereUniqueWithoutModifierPackIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    update: XOR<ModifierOptionUpdateWithoutModifierPackIncludedInput, ModifierOptionUncheckedUpdateWithoutModifierPackIncludedInput>
    create: XOR<ModifierOptionCreateWithoutModifierPackIncludedInput, ModifierOptionUncheckedCreateWithoutModifierPackIncludedInput>
  }

  export type ModifierOptionUpdateWithWhereUniqueWithoutModifierPackIncludedInput = {
    where: ModifierOptionWhereUniqueInput
    data: XOR<ModifierOptionUpdateWithoutModifierPackIncludedInput, ModifierOptionUncheckedUpdateWithoutModifierPackIncludedInput>
  }

  export type ModifierOptionUpdateManyWithWhereWithoutModifierPackIncludedInput = {
    where: ModifierOptionScalarWhereInput
    data: XOR<ModifierOptionUpdateManyMutationInput, ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsInput>
  }

  export type UserUpsertWithoutModifierPackInput = {
    update: XOR<UserUpdateWithoutModifierPackInput, UserUncheckedUpdateWithoutModifierPackInput>
    create: XOR<UserCreateWithoutModifierPackInput, UserUncheckedCreateWithoutModifierPackInput>
  }

  export type UserUpdateWithoutModifierPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
  }

  export type UserUncheckedUpdateWithoutModifierPackInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
  }

  export type GameCreateManyUserInput = {
    id?: number
    dateCreated?: Date | string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
  }

  export type PublicProfileCreateManyUserInput = {
    id?: number
    dateCreated?: Date | string
    name: string
  }

  export type ChallengeModifierCreateManyCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    hasOptions?: boolean
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
  }

  export type ModifierOptionCreateManyCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    challengeModifierId: number
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    public?: boolean
  }

  export type ModifierPackCreateManyCreatedByInput = {
    id?: number
    dateCreated?: Date | string
    public?: boolean
  }

  export type GameUpdateWithoutUserInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Rank?: RankUpdateOneWithoutGameNestedInput
    Day?: DayUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    rankId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    rankId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PublicProfileUpdateWithoutUserInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Game?: GameUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    Game?: GameUncheckedUpdateManyWithoutPublicProfileNestedInput
  }

  export type PublicProfileUncheckedUpdateManyWithoutPublicProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeModifierUpdateWithoutCreatedByInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutCreatedByInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUpdateWithoutUserExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutUserExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutUserExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutUserExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUpdateWithoutUserIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutUserIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutUserIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutUserIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackUpdateWithoutCreatedByInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type ModifierPackUncheckedUpdateManyWithoutModifierPackInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameCreateManyPublicProfileInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    score?: number
    rankId?: number | null
    dateCompleted?: Date | string | null
  }

  export type GameUpdateWithoutPublicProfileInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Rank?: RankUpdateOneWithoutGameNestedInput
    Day?: DayUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPublicProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    rankId?: NullableIntFieldUpdateOperationsInput | number | null
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
  }

  export type DayCreateManyGameInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
  }

  export type DayUpdateWithoutGameInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
  }

  export type GameCreateManyRankInput = {
    id?: number
    dateCreated?: Date | string
    userId: string
    number: number
    year: number
    name: string
    playerName?: string | null
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    public?: boolean
    publicProfileId?: number | null
    score?: number
    dateCompleted?: Date | string | null
  }

  export type GameUpdateWithoutRankInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutGameNestedInput
    Day?: DayUpdateManyWithoutGameNestedInput
    PublicProfile?: PublicProfileUpdateOneWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutRankInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    publicProfileId?: NullableIntFieldUpdateOperationsInput | number | null
    score?: IntFieldUpdateOperationsInput | number
    dateCompleted?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
  }

  export type ChallengeModifierUpdateWithoutExcludedFromDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutExcludedFromDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutExcludedChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutExcludedFromDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutExcludedFromDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutExcludedModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUpdateWithoutIncludedInDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutIncludedInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutIncludedInDayInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutIncludedInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutIncludedCustomModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionCreateManyChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    name: string
    text: string
    explanatoryUrl?: string | null
    standard?: boolean
    createdById?: string | null
    public?: boolean
  }

  export type DayCreateManyChallengeModifierInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
  }

  export type DayCreateManyModifierWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
  }

  export type ModifierOptionUpdateWithoutChallengeModifierInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type DayUpdateWithoutChallengeModifierInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierPackUpdateWithoutExcludedChallengeModifiersInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackIncludedNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutExcludedChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type ModifierPackUncheckedUpdateManyWithoutModifierPackExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierPackUpdateWithoutEncludedCustomChallengeModifiersInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackExcludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackIncludedNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutEncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type ModifierPackUncheckedUpdateManyWithoutModifierPackIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutDefaultExcludedChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultExcludedChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserExcludedInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpdateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultIncludedCustomChallengeModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserIncludedInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutExcludedChallengeModifiersInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutExcludedChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutExcludedFromDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutIncludedCustomChallengeModifiersInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutIncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutIncludedInDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayUpdateWithoutModifierWhenPart1CompletedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutModifierWhenPart1CompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayUncheckedUpdateManyWithoutDayCompletedInPart1Input = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateManyModifierOptionInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    optionWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
  }

  export type DayCreateManyOptionWhenPart1CompletedInput = {
    id?: number
    dateCreated?: Date | string
    gameId: number
    userId: string
    gameNumber: number
    number: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    dateFirstRolled?: Date | string | null
    part1Completed?: Date | string | null
    modifierWhenPart1CompletedId?: number | null
    part2Completed?: Date | string | null
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    rerollTokensSpentDuringPart2?: number
    netScore?: number
  }

  export type DayUpdateWithoutModifierOptionInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ModifierPackUpdateWithoutExcludedModifierOptionsInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackIncludedNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutExcludedModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type ModifierPackUpdateWithoutIncludedCustomModifierOptionsInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutModifierPackIncludedNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierPackNestedInput
  }

  export type ModifierPackUncheckedUpdateWithoutIncludedCustomModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutModifierPackExcludedNestedInput
    EncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutModifierPackIncludedNestedInput
  }

  export type UserUpdateWithoutDefaultExcludedModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultExcludedModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    DefaultIncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpdateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDefaultIncludedCustomModifierOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    serializedId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    numberOfGames?: IntFieldUpdateOperationsInput | number
    Game?: GameUncheckedUpdateManyWithoutUserNestedInput
    PublicProfile?: PublicProfileUncheckedUpdateManyWithoutUserNestedInput
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutCreatedByNestedInput
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutCreatedByNestedInput
    DefaultExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutUserExcludedNestedInput
    DefaultIncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutUserIncludedNestedInput
    ModifierPack?: ModifierPackUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DayUpdateWithoutExcludedModifierOptionsInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutExcludedModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayUpdateWithoutIncludedCustomModifierOptionsInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    OptionWhenPart1Completed?: ModifierOptionUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutIncludedCustomModifierOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    optionWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type DayUpdateWithoutOptionWhenPart1CompletedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUpdateManyWithoutIncludedInDayNestedInput
    Game?: GameUpdateOneRequiredWithoutDayNestedInput
    ModifierWhenPart1Completed?: ChallengeModifierUpdateOneWithoutDayCompletedInPart1NestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    ModifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutOptionWhenPart1CompletedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    gameNumber?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    dateFirstRolled?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    part1Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modifierWhenPart1CompletedId?: NullableIntFieldUpdateOperationsInput | number | null
    part2Completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    rerollTokensSpentDuringPart2?: IntFieldUpdateOperationsInput | number
    netScore?: IntFieldUpdateOperationsInput | number
    ExcludedChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    ExcludedModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutExcludedFromDayNestedInput
    IncludedCustomChallengeModifiers?: ChallengeModifierUncheckedUpdateManyWithoutIncludedInDayNestedInput
    IncludedCustomModifierOptions?: ModifierOptionUncheckedUpdateManyWithoutIncludedInDayNestedInput
  }

  export type ChallengeModifierUpdateWithoutModifierPackExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierPackExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUpdateWithoutModifierPackExcludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackIncluded?: ModifierPackUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutModifierPackExcludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackIncluded?: ModifierPackUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUpdateWithoutModifierPackIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    CreatedBy?: UserUpdateOneWithoutChallengeModifierNestedInput
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedChallengeModifiersNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierPackIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutChallengeModifierNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedChallengeModifiersNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomChallengeModifiersNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedChallengeModifiersNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomChallengeModifiersNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutModifierWhenPart1CompletedNestedInput
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutEncludedCustomChallengeModifiersInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionUpdateWithoutModifierPackIncludedInput = {
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    public?: BoolFieldUpdateOperationsInput | boolean
    ChallengeModifier?: ChallengeModifierUpdateOneRequiredWithoutModifierOptionNestedInput
    CreatedBy?: UserUpdateOneWithoutModifierOptionNestedInput
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUpdateManyWithoutExcludedModifierOptionsNestedInput
    UserExcluded?: UserUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutModifierPackIncludedInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string
    challengeModifierId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    explanatoryUrl?: NullableStringFieldUpdateOperationsInput | string | null
    standard?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    public?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
    ModifierPackExcluded?: ModifierPackUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    UserExcluded?: UserUncheckedUpdateManyWithoutDefaultExcludedModifierOptionsNestedInput
    UserIncluded?: UserUncheckedUpdateManyWithoutDefaultIncludedCustomModifierOptionsNestedInput
    ExcludedFromDay?: DayUncheckedUpdateManyWithoutExcludedModifierOptionsNestedInput
    IncludedInDay?: DayUncheckedUpdateManyWithoutIncludedCustomModifierOptionsNestedInput
    DayCompletedInPart1?: DayUncheckedUpdateManyWithoutOptionWhenPart1CompletedNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}