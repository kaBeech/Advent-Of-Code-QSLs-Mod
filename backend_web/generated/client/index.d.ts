
/**
 * Client
**/

import * as runtime from './runtime/data-proxy';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type ChallengeModifierPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ChallengeModifier"
  objects: {
    ModifierOption: ModifierOptionPayload<ExtArgs>[]
    Day: DayPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    text: string
    hasOptions: boolean
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
    Day: DayPayload<ExtArgs>[]
    ChallengeModifier: ChallengeModifierPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    text: string
    challengeModifierId: number | null
  }, ExtArgs["result"]["modifierOption"]>
  composites: {}
}

/**
 * Model ModifierOption
 * 
 */
export type ModifierOption = runtime.Types.DefaultSelection<ModifierOptionPayload>
export type GamePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Game"
  objects: {
    Day: DayPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    playerName: string
    year: number
    currentDay: number
    currentDayCompleted: boolean
    currentRerollTokens: number
    rerollTokensGained: number
    rerollTokensSpent: number
    repositoryLink: string | null
    progressSheetLink: string | null
  }, ExtArgs["result"]["game"]>
  composites: {}
}

/**
 * Model Game
 * 
 */
export type Game = runtime.Types.DefaultSelection<GamePayload>
export type DayPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Day"
  objects: {
    game: GamePayload<ExtArgs>
    modifier: ChallengeModifierPayload<ExtArgs> | null
    modifierOption: ModifierOptionPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    number: number
    part1Completed: boolean
    part2Completed: boolean
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    challengeModifierId: number | null
    modifierOptionId: number | null
    gameId: number
  }, ExtArgs["result"]["day"]>
  composites: {}
}

/**
 * Model Day
 * 
 */
export type Day = runtime.Types.DefaultSelection<DayPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ChallengeModifiers
 * const challengeModifiers = await prisma.challengeModifier.findMany()
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
   * // Fetch zero or more ChallengeModifiers
   * const challengeModifiers = await prisma.challengeModifier.findMany()
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
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.day`: Exposes CRUD operations for the **Day** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.day.findMany()
    * ```
    */
  get day(): Prisma.DayDelegate<GlobalReject, ExtArgs>;
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
    ChallengeModifier: 'ChallengeModifier',
    ModifierOption: 'ModifierOption',
    Game: 'Game',
    Day: 'Day'
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
      modelProps: 'challengeModifier' | 'modifierOption' | 'game' | 'day'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
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
   * Count Type ChallengeModifierCountOutputType
   */


  export type ChallengeModifierCountOutputType = {
    ModifierOption: number
    Day: number
  }

  export type ChallengeModifierCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ModifierOption?: boolean | ChallengeModifierCountOutputTypeCountModifierOptionArgs
    Day?: boolean | ChallengeModifierCountOutputTypeCountDayArgs
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
   * Count Type ModifierOptionCountOutputType
   */


  export type ModifierOptionCountOutputType = {
    Day: number
  }

  export type ModifierOptionCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Day?: boolean | ModifierOptionCountOutputTypeCountDayArgs
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
   * Models
   */

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
    name: string | null
    text: string | null
    hasOptions: boolean | null
  }

  export type ChallengeModifierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
    hasOptions: boolean | null
  }

  export type ChallengeModifierCountAggregateOutputType = {
    id: number
    name: number
    text: number
    hasOptions: number
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
    name?: true
    text?: true
    hasOptions?: true
  }

  export type ChallengeModifierMaxAggregateInputType = {
    id?: true
    name?: true
    text?: true
    hasOptions?: true
  }

  export type ChallengeModifierCountAggregateInputType = {
    id?: true
    name?: true
    text?: true
    hasOptions?: true
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
    name: string
    text: string
    hasOptions: boolean
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
    name?: boolean
    text?: boolean
    hasOptions?: boolean
    ModifierOption?: boolean | ChallengeModifier$ModifierOptionArgs<ExtArgs>
    Day?: boolean | ChallengeModifier$DayArgs<ExtArgs>
    _count?: boolean | ChallengeModifierCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["challengeModifier"]>

  export type ChallengeModifierSelectScalar = {
    id?: boolean
    name?: boolean
    text?: boolean
    hasOptions?: boolean
  }

  export type ChallengeModifierInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ModifierOption?: boolean | ChallengeModifier$ModifierOptionArgs<ExtArgs>
    Day?: boolean | ChallengeModifier$DayArgs<ExtArgs>
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

    ModifierOption<T extends ChallengeModifier$ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$ModifierOptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    Day<T extends ChallengeModifier$DayArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifier$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
    name: string | null
    text: string | null
    challengeModifierId: number | null
  }

  export type ModifierOptionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
    challengeModifierId: number | null
  }

  export type ModifierOptionCountAggregateOutputType = {
    id: number
    name: number
    text: number
    challengeModifierId: number
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
    name?: true
    text?: true
    challengeModifierId?: true
  }

  export type ModifierOptionMaxAggregateInputType = {
    id?: true
    name?: true
    text?: true
    challengeModifierId?: true
  }

  export type ModifierOptionCountAggregateInputType = {
    id?: true
    name?: true
    text?: true
    challengeModifierId?: true
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
    name: string
    text: string
    challengeModifierId: number | null
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
    name?: boolean
    text?: boolean
    challengeModifierId?: boolean
    Day?: boolean | ModifierOption$DayArgs<ExtArgs>
    ChallengeModifier?: boolean | ChallengeModifierArgs<ExtArgs>
    _count?: boolean | ModifierOptionCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["modifierOption"]>

  export type ModifierOptionSelectScalar = {
    id?: boolean
    name?: boolean
    text?: boolean
    challengeModifierId?: boolean
  }

  export type ModifierOptionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Day?: boolean | ModifierOption$DayArgs<ExtArgs>
    ChallengeModifier?: boolean | ChallengeModifierArgs<ExtArgs>
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

    Day<T extends ModifierOption$DayArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOption$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

    ChallengeModifier<T extends ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifierArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

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
    year: number | null
    currentDay: number | null
    currentRerollTokens: number | null
    rerollTokensGained: number | null
    rerollTokensSpent: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    year: number | null
    currentDay: number | null
    currentRerollTokens: number | null
    rerollTokensGained: number | null
    rerollTokensSpent: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    playerName: string | null
    year: number | null
    currentDay: number | null
    currentDayCompleted: boolean | null
    currentRerollTokens: number | null
    rerollTokensGained: number | null
    rerollTokensSpent: number | null
    repositoryLink: string | null
    progressSheetLink: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    playerName: string | null
    year: number | null
    currentDay: number | null
    currentDayCompleted: boolean | null
    currentRerollTokens: number | null
    rerollTokensGained: number | null
    rerollTokensSpent: number | null
    repositoryLink: string | null
    progressSheetLink: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    playerName: number
    year: number
    currentDay: number
    currentDayCompleted: number
    currentRerollTokens: number
    rerollTokensGained: number
    rerollTokensSpent: number
    repositoryLink: number
    progressSheetLink: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    year?: true
    currentDay?: true
    currentRerollTokens?: true
    rerollTokensGained?: true
    rerollTokensSpent?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    year?: true
    currentDay?: true
    currentRerollTokens?: true
    rerollTokensGained?: true
    rerollTokensSpent?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    playerName?: true
    year?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensGained?: true
    rerollTokensSpent?: true
    repositoryLink?: true
    progressSheetLink?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    playerName?: true
    year?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensGained?: true
    rerollTokensSpent?: true
    repositoryLink?: true
    progressSheetLink?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    playerName?: true
    year?: true
    currentDay?: true
    currentDayCompleted?: true
    currentRerollTokens?: true
    rerollTokensGained?: true
    rerollTokensSpent?: true
    repositoryLink?: true
    progressSheetLink?: true
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
    name: string
    playerName: string
    year: number
    currentDay: number
    currentDayCompleted: boolean
    currentRerollTokens: number
    rerollTokensGained: number
    rerollTokensSpent: number
    repositoryLink: string | null
    progressSheetLink: string | null
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
    name?: boolean
    playerName?: boolean
    year?: boolean
    currentDay?: boolean
    currentDayCompleted?: boolean
    currentRerollTokens?: boolean
    rerollTokensGained?: boolean
    rerollTokensSpent?: boolean
    repositoryLink?: boolean
    progressSheetLink?: boolean
    Day?: boolean | Game$DayArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    playerName?: boolean
    year?: boolean
    currentDay?: boolean
    currentDayCompleted?: boolean
    currentRerollTokens?: boolean
    rerollTokensGained?: boolean
    rerollTokensSpent?: boolean
    repositoryLink?: boolean
    progressSheetLink?: boolean
  }

  export type GameInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Day?: boolean | Game$DayArgs<ExtArgs>
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

    Day<T extends Game$DayArgs<ExtArgs> = {}>(args?: Subset<T, Game$DayArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DayPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
    number: number | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    gameId: number | null
  }

  export type DaySumAggregateOutputType = {
    id: number | null
    number: number | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    gameId: number | null
  }

  export type DayMinAggregateOutputType = {
    id: number | null
    number: number | null
    part1Completed: boolean | null
    part2Completed: boolean | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    gameId: number | null
  }

  export type DayMaxAggregateOutputType = {
    id: number | null
    number: number | null
    part1Completed: boolean | null
    part2Completed: boolean | null
    challengeModifierRerollsUsed: number | null
    modifierOptionRerollsUsed: number | null
    challengeModifierId: number | null
    modifierOptionId: number | null
    gameId: number | null
  }

  export type DayCountAggregateOutputType = {
    id: number
    number: number
    part1Completed: number
    part2Completed: number
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    challengeModifierId: number
    modifierOptionId: number
    gameId: number
    _all: number
  }


  export type DayAvgAggregateInputType = {
    id?: true
    number?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    challengeModifierId?: true
    modifierOptionId?: true
    gameId?: true
  }

  export type DaySumAggregateInputType = {
    id?: true
    number?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    challengeModifierId?: true
    modifierOptionId?: true
    gameId?: true
  }

  export type DayMinAggregateInputType = {
    id?: true
    number?: true
    part1Completed?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    challengeModifierId?: true
    modifierOptionId?: true
    gameId?: true
  }

  export type DayMaxAggregateInputType = {
    id?: true
    number?: true
    part1Completed?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    challengeModifierId?: true
    modifierOptionId?: true
    gameId?: true
  }

  export type DayCountAggregateInputType = {
    id?: true
    number?: true
    part1Completed?: true
    part2Completed?: true
    challengeModifierRerollsUsed?: true
    modifierOptionRerollsUsed?: true
    challengeModifierId?: true
    modifierOptionId?: true
    gameId?: true
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
    number: number
    part1Completed: boolean
    part2Completed: boolean
    challengeModifierRerollsUsed: number
    modifierOptionRerollsUsed: number
    challengeModifierId: number | null
    modifierOptionId: number | null
    gameId: number
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
    number?: boolean
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: boolean
    modifierOptionRerollsUsed?: boolean
    challengeModifierId?: boolean
    modifierOptionId?: boolean
    gameId?: boolean
    game?: boolean | GameArgs<ExtArgs>
    modifier?: boolean | ChallengeModifierArgs<ExtArgs>
    modifierOption?: boolean | ModifierOptionArgs<ExtArgs>
  }, ExtArgs["result"]["day"]>

  export type DaySelectScalar = {
    id?: boolean
    number?: boolean
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: boolean
    modifierOptionRerollsUsed?: boolean
    challengeModifierId?: boolean
    modifierOptionId?: boolean
    gameId?: boolean
  }

  export type DayInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    game?: boolean | GameArgs<ExtArgs>
    modifier?: boolean | ChallengeModifierArgs<ExtArgs>
    modifierOption?: boolean | ModifierOptionArgs<ExtArgs>
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

    game<T extends GameArgs<ExtArgs> = {}>(args?: Subset<T, GameArgs<ExtArgs>>): Prisma__GameClient<$Types.GetResult<GamePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    modifier<T extends ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, ChallengeModifierArgs<ExtArgs>>): Prisma__ChallengeModifierClient<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    modifierOption<T extends ModifierOptionArgs<ExtArgs> = {}>(args?: Subset<T, ModifierOptionArgs<ExtArgs>>): Prisma__ModifierOptionClient<$Types.GetResult<ModifierOptionPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChallengeModifierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    text: 'text',
    hasOptions: 'hasOptions'
  };

  export type ChallengeModifierScalarFieldEnum = (typeof ChallengeModifierScalarFieldEnum)[keyof typeof ChallengeModifierScalarFieldEnum]


  export const ModifierOptionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    text: 'text',
    challengeModifierId: 'challengeModifierId'
  };

  export type ModifierOptionScalarFieldEnum = (typeof ModifierOptionScalarFieldEnum)[keyof typeof ModifierOptionScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    playerName: 'playerName',
    year: 'year',
    currentDay: 'currentDay',
    currentDayCompleted: 'currentDayCompleted',
    currentRerollTokens: 'currentRerollTokens',
    rerollTokensGained: 'rerollTokensGained',
    rerollTokensSpent: 'rerollTokensSpent',
    repositoryLink: 'repositoryLink',
    progressSheetLink: 'progressSheetLink'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const DayScalarFieldEnum: {
    id: 'id',
    number: 'number',
    part1Completed: 'part1Completed',
    part2Completed: 'part2Completed',
    challengeModifierRerollsUsed: 'challengeModifierRerollsUsed',
    modifierOptionRerollsUsed: 'modifierOptionRerollsUsed',
    challengeModifierId: 'challengeModifierId',
    modifierOptionId: 'modifierOptionId',
    gameId: 'gameId'
  };

  export type DayScalarFieldEnum = (typeof DayScalarFieldEnum)[keyof typeof DayScalarFieldEnum]


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


  export type ChallengeModifierWhereInput = {
    AND?: Enumerable<ChallengeModifierWhereInput>
    OR?: Enumerable<ChallengeModifierWhereInput>
    NOT?: Enumerable<ChallengeModifierWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    text?: StringFilter | string
    hasOptions?: BoolFilter | boolean
    ModifierOption?: ModifierOptionListRelationFilter
    Day?: DayListRelationFilter
  }

  export type ChallengeModifierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
    ModifierOption?: ModifierOptionOrderByRelationAggregateInput
    Day?: DayOrderByRelationAggregateInput
  }

  export type ChallengeModifierWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ChallengeModifierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    hasOptions?: BoolWithAggregatesFilter | boolean
  }

  export type ModifierOptionWhereInput = {
    AND?: Enumerable<ModifierOptionWhereInput>
    OR?: Enumerable<ModifierOptionWhereInput>
    NOT?: Enumerable<ModifierOptionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    text?: StringFilter | string
    challengeModifierId?: IntNullableFilter | number | null
    Day?: DayListRelationFilter
    ChallengeModifier?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput> | null
  }

  export type ModifierOptionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    Day?: DayOrderByRelationAggregateInput
    ChallengeModifier?: ChallengeModifierOrderByWithRelationInput
  }

  export type ModifierOptionWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ModifierOptionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter | string
    text?: StringWithAggregatesFilter | string
    challengeModifierId?: IntNullableWithAggregatesFilter | number | null
  }

  export type GameWhereInput = {
    AND?: Enumerable<GameWhereInput>
    OR?: Enumerable<GameWhereInput>
    NOT?: Enumerable<GameWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    playerName?: StringFilter | string
    year?: IntFilter | number
    currentDay?: IntFilter | number
    currentDayCompleted?: BoolFilter | boolean
    currentRerollTokens?: IntFilter | number
    rerollTokensGained?: IntFilter | number
    rerollTokensSpent?: IntFilter | number
    repositoryLink?: StringNullableFilter | string | null
    progressSheetLink?: StringNullableFilter | string | null
    Day?: DayListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrderInput | SortOrder
    progressSheetLink?: SortOrderInput | SortOrder
    Day?: DayOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = {
    id?: number
  }

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrderInput | SortOrder
    progressSheetLink?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter | string
    playerName?: StringWithAggregatesFilter | string
    year?: IntWithAggregatesFilter | number
    currentDay?: IntWithAggregatesFilter | number
    currentDayCompleted?: BoolWithAggregatesFilter | boolean
    currentRerollTokens?: IntWithAggregatesFilter | number
    rerollTokensGained?: IntWithAggregatesFilter | number
    rerollTokensSpent?: IntWithAggregatesFilter | number
    repositoryLink?: StringNullableWithAggregatesFilter | string | null
    progressSheetLink?: StringNullableWithAggregatesFilter | string | null
  }

  export type DayWhereInput = {
    AND?: Enumerable<DayWhereInput>
    OR?: Enumerable<DayWhereInput>
    NOT?: Enumerable<DayWhereInput>
    id?: IntFilter | number
    number?: IntFilter | number
    part1Completed?: BoolFilter | boolean
    part2Completed?: BoolFilter | boolean
    challengeModifierRerollsUsed?: IntFilter | number
    modifierOptionRerollsUsed?: IntFilter | number
    challengeModifierId?: IntNullableFilter | number | null
    modifierOptionId?: IntNullableFilter | number | null
    gameId?: IntFilter | number
    game?: XOR<GameRelationFilter, GameWhereInput>
    modifier?: XOR<ChallengeModifierRelationFilter, ChallengeModifierWhereInput> | null
    modifierOption?: XOR<ModifierOptionRelationFilter, ModifierOptionWhereInput> | null
  }

  export type DayOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    part1Completed?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    modifierOptionId?: SortOrderInput | SortOrder
    gameId?: SortOrder
    game?: GameOrderByWithRelationInput
    modifier?: ChallengeModifierOrderByWithRelationInput
    modifierOption?: ModifierOptionOrderByWithRelationInput
  }

  export type DayWhereUniqueInput = {
    id?: number
  }

  export type DayOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    part1Completed?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrderInput | SortOrder
    modifierOptionId?: SortOrderInput | SortOrder
    gameId?: SortOrder
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
    number?: IntWithAggregatesFilter | number
    part1Completed?: BoolWithAggregatesFilter | boolean
    part2Completed?: BoolWithAggregatesFilter | boolean
    challengeModifierRerollsUsed?: IntWithAggregatesFilter | number
    modifierOptionRerollsUsed?: IntWithAggregatesFilter | number
    challengeModifierId?: IntNullableWithAggregatesFilter | number | null
    modifierOptionId?: IntNullableWithAggregatesFilter | number | null
    gameId?: IntWithAggregatesFilter | number
  }

  export type ChallengeModifierCreateInput = {
    name: string
    text: string
    hasOptions?: boolean
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
    Day?: DayCreateNestedManyWithoutModifierInput
  }

  export type ChallengeModifierUncheckedCreateInput = {
    id?: number
    name: string
    text: string
    hasOptions?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
    Day?: DayUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ChallengeModifierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUpdateManyWithoutModifierNestedInput
  }

  export type ChallengeModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
    Day?: DayUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type ChallengeModifierCreateManyInput = {
    id?: number
    name: string
    text: string
    hasOptions?: boolean
  }

  export type ChallengeModifierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChallengeModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ModifierOptionCreateInput = {
    name: string
    text: string
    Day?: DayCreateNestedManyWithoutModifierOptionInput
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
  }

  export type ModifierOptionUncheckedCreateInput = {
    id?: number
    name: string
    text: string
    challengeModifierId?: number | null
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
  }

  export type ModifierOptionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutModifierOptionNestedInput
  }

  export type ModifierOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
  }

  export type ModifierOptionCreateManyInput = {
    id?: number
    name: string
    text: string
    challengeModifierId?: number | null
  }

  export type ModifierOptionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ModifierOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GameCreateInput = {
    name: string
    playerName: string
    year: number
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensGained?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    Day?: DayCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    playerName: string
    year: number
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensGained?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
    Day?: DayUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensGained?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    Day?: DayUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensGained?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
    Day?: DayUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    name: string
    playerName: string
    year: number
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensGained?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensGained?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensGained?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DayCreateInput = {
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    game: GameCreateNestedOneWithoutDayInput
    modifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    modifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    gameId: number
  }

  export type DayUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutDayNestedInput
    modifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    modifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateManyInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
    gameId: number
  }

  export type DayUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
  }

  export type DayUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ModifierOptionListRelationFilter = {
    every?: ModifierOptionWhereInput
    some?: ModifierOptionWhereInput
    none?: ModifierOptionWhereInput
  }

  export type DayListRelationFilter = {
    every?: DayWhereInput
    some?: DayWhereInput
    none?: DayWhereInput
  }

  export type ModifierOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeModifierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
  }

  export type ChallengeModifierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChallengeModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
  }

  export type ChallengeModifierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    hasOptions?: SortOrder
  }

  export type ChallengeModifierSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type ChallengeModifierRelationFilter = {
    is?: ChallengeModifierWhereInput | null
    isNot?: ChallengeModifierWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModifierOptionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierOptionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    challengeModifierId?: SortOrder
  }

  export type ModifierOptionSumOrderByAggregateInput = {
    id?: SortOrder
    challengeModifierId?: SortOrder
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

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    playerName?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentDayCompleted?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
    repositoryLink?: SortOrder
    progressSheetLink?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    currentDay?: SortOrder
    currentRerollTokens?: SortOrder
    rerollTokensGained?: SortOrder
    rerollTokensSpent?: SortOrder
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

  export type GameRelationFilter = {
    is?: GameWhereInput | null
    isNot?: GameWhereInput | null
  }

  export type ModifierOptionRelationFilter = {
    is?: ModifierOptionWhereInput | null
    isNot?: ModifierOptionWhereInput | null
  }

  export type DayCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    part1Completed?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    gameId?: SortOrder
  }

  export type DayAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    gameId?: SortOrder
  }

  export type DayMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    part1Completed?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    gameId?: SortOrder
  }

  export type DayMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    part1Completed?: SortOrder
    part2Completed?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    gameId?: SortOrder
  }

  export type DaySumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    challengeModifierRerollsUsed?: SortOrder
    modifierOptionRerollsUsed?: SortOrder
    challengeModifierId?: SortOrder
    modifierOptionId?: SortOrder
    gameId?: SortOrder
  }

  export type ModifierOptionCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutChallengeModifierInput>, Enumerable<ModifierOptionUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutChallengeModifierInput>
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type DayCreateNestedManyWithoutModifierInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierInput>, Enumerable<DayUncheckedCreateWithoutModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierInput>
    createMany?: DayCreateManyModifierInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput = {
    create?: XOR<Enumerable<ModifierOptionCreateWithoutChallengeModifierInput>, Enumerable<ModifierOptionUncheckedCreateWithoutChallengeModifierInput>>
    connectOrCreate?: Enumerable<ModifierOptionCreateOrConnectWithoutChallengeModifierInput>
    createMany?: ModifierOptionCreateManyChallengeModifierInputEnvelope
    connect?: Enumerable<ModifierOptionWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutModifierInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierInput>, Enumerable<DayUncheckedCreateWithoutModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierInput>
    createMany?: DayCreateManyModifierInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type DayUpdateManyWithoutModifierNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierInput>, Enumerable<DayUncheckedCreateWithoutModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutModifierInput>
    createMany?: DayCreateManyModifierInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutModifierInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutModifierInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DayUncheckedUpdateManyWithoutModifierNestedInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierInput>, Enumerable<DayUncheckedCreateWithoutModifierInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierInput>
    upsert?: Enumerable<DayUpsertWithWhereUniqueWithoutModifierInput>
    createMany?: DayCreateManyModifierInputEnvelope
    set?: Enumerable<DayWhereUniqueInput>
    disconnect?: Enumerable<DayWhereUniqueInput>
    delete?: Enumerable<DayWhereUniqueInput>
    connect?: Enumerable<DayWhereUniqueInput>
    update?: Enumerable<DayUpdateWithWhereUniqueWithoutModifierInput>
    updateMany?: Enumerable<DayUpdateManyWithWhereWithoutModifierInput>
    deleteMany?: Enumerable<DayScalarWhereInput>
  }

  export type DayCreateNestedManyWithoutModifierOptionInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierOptionInput>, Enumerable<DayUncheckedCreateWithoutModifierOptionInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierOptionInput>
    createMany?: DayCreateManyModifierOptionInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type ChallengeModifierCreateNestedOneWithoutModifierOptionInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierOptionInput
    connect?: ChallengeModifierWhereUniqueInput
  }

  export type DayUncheckedCreateNestedManyWithoutModifierOptionInput = {
    create?: XOR<Enumerable<DayCreateWithoutModifierOptionInput>, Enumerable<DayUncheckedCreateWithoutModifierOptionInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutModifierOptionInput>
    createMany?: DayCreateManyModifierOptionInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
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

  export type ChallengeModifierUpdateOneWithoutModifierOptionNestedInput = {
    create?: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
    connectOrCreate?: ChallengeModifierCreateOrConnectWithoutModifierOptionInput
    upsert?: ChallengeModifierUpsertWithoutModifierOptionInput
    disconnect?: boolean
    delete?: boolean
    connect?: ChallengeModifierWhereUniqueInput
    update?: XOR<ChallengeModifierUpdateWithoutModifierOptionInput, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DayCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<DayCreateWithoutGameInput>, Enumerable<DayUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutGameInput>
    createMany?: DayCreateManyGameInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type DayUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<Enumerable<DayCreateWithoutGameInput>, Enumerable<DayUncheckedCreateWithoutGameInput>>
    connectOrCreate?: Enumerable<DayCreateOrConnectWithoutGameInput>
    createMany?: DayCreateManyGameInputEnvelope
    connect?: Enumerable<DayWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type GameCreateNestedOneWithoutDayInput = {
    create?: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    connectOrCreate?: GameCreateOrConnectWithoutDayInput
    connect?: GameWhereUniqueInput
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

  export type GameUpdateOneRequiredWithoutDayNestedInput = {
    create?: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
    connectOrCreate?: GameCreateOrConnectWithoutDayInput
    upsert?: GameUpsertWithoutDayInput
    connect?: GameWhereUniqueInput
    update?: XOR<GameUpdateWithoutDayInput, GameUncheckedUpdateWithoutDayInput>
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
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

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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

  export type ModifierOptionCreateWithoutChallengeModifierInput = {
    name: string
    text: string
    Day?: DayCreateNestedManyWithoutModifierOptionInput
  }

  export type ModifierOptionUncheckedCreateWithoutChallengeModifierInput = {
    id?: number
    name: string
    text: string
    Day?: DayUncheckedCreateNestedManyWithoutModifierOptionInput
  }

  export type ModifierOptionCreateOrConnectWithoutChallengeModifierInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutChallengeModifierInput, ModifierOptionUncheckedCreateWithoutChallengeModifierInput>
  }

  export type ModifierOptionCreateManyChallengeModifierInputEnvelope = {
    data: Enumerable<ModifierOptionCreateManyChallengeModifierInput>
    skipDuplicates?: boolean
  }

  export type DayCreateWithoutModifierInput = {
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    game: GameCreateNestedOneWithoutDayInput
    modifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutModifierInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    modifierOptionId?: number | null
    gameId: number
  }

  export type DayCreateOrConnectWithoutModifierInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutModifierInput, DayUncheckedCreateWithoutModifierInput>
  }

  export type DayCreateManyModifierInputEnvelope = {
    data: Enumerable<DayCreateManyModifierInput>
    skipDuplicates?: boolean
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

  export type ModifierOptionScalarWhereInput = {
    AND?: Enumerable<ModifierOptionScalarWhereInput>
    OR?: Enumerable<ModifierOptionScalarWhereInput>
    NOT?: Enumerable<ModifierOptionScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    text?: StringFilter | string
    challengeModifierId?: IntNullableFilter | number | null
  }

  export type DayUpsertWithWhereUniqueWithoutModifierInput = {
    where: DayWhereUniqueInput
    update: XOR<DayUpdateWithoutModifierInput, DayUncheckedUpdateWithoutModifierInput>
    create: XOR<DayCreateWithoutModifierInput, DayUncheckedCreateWithoutModifierInput>
  }

  export type DayUpdateWithWhereUniqueWithoutModifierInput = {
    where: DayWhereUniqueInput
    data: XOR<DayUpdateWithoutModifierInput, DayUncheckedUpdateWithoutModifierInput>
  }

  export type DayUpdateManyWithWhereWithoutModifierInput = {
    where: DayScalarWhereInput
    data: XOR<DayUpdateManyMutationInput, DayUncheckedUpdateManyWithoutDayInput>
  }

  export type DayScalarWhereInput = {
    AND?: Enumerable<DayScalarWhereInput>
    OR?: Enumerable<DayScalarWhereInput>
    NOT?: Enumerable<DayScalarWhereInput>
    id?: IntFilter | number
    number?: IntFilter | number
    part1Completed?: BoolFilter | boolean
    part2Completed?: BoolFilter | boolean
    challengeModifierRerollsUsed?: IntFilter | number
    modifierOptionRerollsUsed?: IntFilter | number
    challengeModifierId?: IntNullableFilter | number | null
    modifierOptionId?: IntNullableFilter | number | null
    gameId?: IntFilter | number
  }

  export type DayCreateWithoutModifierOptionInput = {
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    game: GameCreateNestedOneWithoutDayInput
    modifier?: ChallengeModifierCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutModifierOptionInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    challengeModifierId?: number | null
    gameId: number
  }

  export type DayCreateOrConnectWithoutModifierOptionInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutModifierOptionInput, DayUncheckedCreateWithoutModifierOptionInput>
  }

  export type DayCreateManyModifierOptionInputEnvelope = {
    data: Enumerable<DayCreateManyModifierOptionInput>
    skipDuplicates?: boolean
  }

  export type ChallengeModifierCreateWithoutModifierOptionInput = {
    name: string
    text: string
    hasOptions?: boolean
    Day?: DayCreateNestedManyWithoutModifierInput
  }

  export type ChallengeModifierUncheckedCreateWithoutModifierOptionInput = {
    id?: number
    name: string
    text: string
    hasOptions?: boolean
    Day?: DayUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ChallengeModifierCreateOrConnectWithoutModifierOptionInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
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

  export type ChallengeModifierUpsertWithoutModifierOptionInput = {
    update: XOR<ChallengeModifierUpdateWithoutModifierOptionInput, ChallengeModifierUncheckedUpdateWithoutModifierOptionInput>
    create: XOR<ChallengeModifierCreateWithoutModifierOptionInput, ChallengeModifierUncheckedCreateWithoutModifierOptionInput>
  }

  export type ChallengeModifierUpdateWithoutModifierOptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUpdateManyWithoutModifierNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    Day?: DayUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type DayCreateWithoutGameInput = {
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    modifier?: ChallengeModifierCreateNestedOneWithoutDayInput
    modifierOption?: ModifierOptionCreateNestedOneWithoutDayInput
  }

  export type DayUncheckedCreateWithoutGameInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
  }

  export type DayCreateOrConnectWithoutGameInput = {
    where: DayWhereUniqueInput
    create: XOR<DayCreateWithoutGameInput, DayUncheckedCreateWithoutGameInput>
  }

  export type DayCreateManyGameInputEnvelope = {
    data: Enumerable<DayCreateManyGameInput>
    skipDuplicates?: boolean
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

  export type GameCreateWithoutDayInput = {
    name: string
    playerName: string
    year: number
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensGained?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
  }

  export type GameUncheckedCreateWithoutDayInput = {
    id?: number
    name: string
    playerName: string
    year: number
    currentDay?: number
    currentDayCompleted?: boolean
    currentRerollTokens?: number
    rerollTokensGained?: number
    rerollTokensSpent?: number
    repositoryLink?: string | null
    progressSheetLink?: string | null
  }

  export type GameCreateOrConnectWithoutDayInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
  }

  export type ChallengeModifierCreateWithoutDayInput = {
    name: string
    text: string
    hasOptions?: boolean
    ModifierOption?: ModifierOptionCreateNestedManyWithoutChallengeModifierInput
  }

  export type ChallengeModifierUncheckedCreateWithoutDayInput = {
    id?: number
    name: string
    text: string
    hasOptions?: boolean
    ModifierOption?: ModifierOptionUncheckedCreateNestedManyWithoutChallengeModifierInput
  }

  export type ChallengeModifierCreateOrConnectWithoutDayInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
  }

  export type ModifierOptionCreateWithoutDayInput = {
    name: string
    text: string
    ChallengeModifier?: ChallengeModifierCreateNestedOneWithoutModifierOptionInput
  }

  export type ModifierOptionUncheckedCreateWithoutDayInput = {
    id?: number
    name: string
    text: string
    challengeModifierId?: number | null
  }

  export type ModifierOptionCreateOrConnectWithoutDayInput = {
    where: ModifierOptionWhereUniqueInput
    create: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
  }

  export type GameUpsertWithoutDayInput = {
    update: XOR<GameUpdateWithoutDayInput, GameUncheckedUpdateWithoutDayInput>
    create: XOR<GameCreateWithoutDayInput, GameUncheckedCreateWithoutDayInput>
  }

  export type GameUpdateWithoutDayInput = {
    name?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensGained?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GameUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    currentDay?: IntFieldUpdateOperationsInput | number
    currentDayCompleted?: BoolFieldUpdateOperationsInput | boolean
    currentRerollTokens?: IntFieldUpdateOperationsInput | number
    rerollTokensGained?: IntFieldUpdateOperationsInput | number
    rerollTokensSpent?: IntFieldUpdateOperationsInput | number
    repositoryLink?: NullableStringFieldUpdateOperationsInput | string | null
    progressSheetLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChallengeModifierUpsertWithoutDayInput = {
    update: XOR<ChallengeModifierUpdateWithoutDayInput, ChallengeModifierUncheckedUpdateWithoutDayInput>
    create: XOR<ChallengeModifierCreateWithoutDayInput, ChallengeModifierUncheckedCreateWithoutDayInput>
  }

  export type ChallengeModifierUpdateWithoutDayInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUpdateManyWithoutChallengeModifierNestedInput
  }

  export type ChallengeModifierUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    hasOptions?: BoolFieldUpdateOperationsInput | boolean
    ModifierOption?: ModifierOptionUncheckedUpdateManyWithoutChallengeModifierNestedInput
  }

  export type ModifierOptionUpsertWithoutDayInput = {
    update: XOR<ModifierOptionUpdateWithoutDayInput, ModifierOptionUncheckedUpdateWithoutDayInput>
    create: XOR<ModifierOptionCreateWithoutDayInput, ModifierOptionUncheckedCreateWithoutDayInput>
  }

  export type ModifierOptionUpdateWithoutDayInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    ChallengeModifier?: ChallengeModifierUpdateOneWithoutModifierOptionNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ModifierOptionCreateManyChallengeModifierInput = {
    id?: number
    name: string
    text: string
  }

  export type DayCreateManyModifierInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    modifierOptionId?: number | null
    gameId: number
  }

  export type ModifierOptionUpdateWithoutChallengeModifierInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    Day?: DayUpdateManyWithoutModifierOptionNestedInput
  }

  export type ModifierOptionUncheckedUpdateWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    Day?: DayUncheckedUpdateManyWithoutModifierOptionNestedInput
  }

  export type ModifierOptionUncheckedUpdateManyWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type DayUpdateWithoutModifierInput = {
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutDayNestedInput
    modifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type DayUncheckedUpdateManyWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateManyModifierOptionInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    challengeModifierId?: number | null
    gameId: number
  }

  export type DayUpdateWithoutModifierOptionInput = {
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    game?: GameUpdateOneRequiredWithoutDayNestedInput
    modifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutModifierOptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type DayCreateManyGameInput = {
    id?: number
    number: number
    part1Completed?: boolean
    part2Completed?: boolean
    challengeModifierRerollsUsed?: number
    modifierOptionRerollsUsed?: number
    challengeModifierId?: number | null
    modifierOptionId?: number | null
  }

  export type DayUpdateWithoutGameInput = {
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifier?: ChallengeModifierUpdateOneWithoutDayNestedInput
    modifierOption?: ModifierOptionUpdateOneWithoutDayNestedInput
  }

  export type DayUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    part1Completed?: BoolFieldUpdateOperationsInput | boolean
    part2Completed?: BoolFieldUpdateOperationsInput | boolean
    challengeModifierRerollsUsed?: IntFieldUpdateOperationsInput | number
    modifierOptionRerollsUsed?: IntFieldUpdateOperationsInput | number
    challengeModifierId?: NullableIntFieldUpdateOperationsInput | number | null
    modifierOptionId?: NullableIntFieldUpdateOperationsInput | number | null
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