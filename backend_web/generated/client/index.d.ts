
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
    secondaryModifier: SecondaryModifierPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    text: string
    secondaryModifierId: number | null
  }, ExtArgs["result"]["challengeModifier"]>
  composites: {}
}

/**
 * Model ChallengeModifier
 * 
 */
export type ChallengeModifier = runtime.Types.DefaultSelection<ChallengeModifierPayload>
export type SecondaryModifierPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SecondaryModifier"
  objects: {
    ChallengeModifier: ChallengeModifierPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: number
    name: string
    values: string[]
  }, ExtArgs["result"]["secondaryModifier"]>
  composites: {}
}

/**
 * Model SecondaryModifier
 * 
 */
export type SecondaryModifier = runtime.Types.DefaultSelection<SecondaryModifierPayload>

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
   * `prisma.secondaryModifier`: Exposes CRUD operations for the **SecondaryModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecondaryModifiers
    * const secondaryModifiers = await prisma.secondaryModifier.findMany()
    * ```
    */
  get secondaryModifier(): Prisma.SecondaryModifierDelegate<GlobalReject, ExtArgs>;
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
    SecondaryModifier: 'SecondaryModifier'
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
      modelProps: 'challengeModifier' | 'secondaryModifier'
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
      SecondaryModifier: {
        payload: SecondaryModifierPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SecondaryModifierFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecondaryModifierFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>
          }
          findFirst: {
            args: Prisma.SecondaryModifierFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecondaryModifierFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>
          }
          findMany: {
            args: Prisma.SecondaryModifierFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>[]
          }
          create: {
            args: Prisma.SecondaryModifierCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>
          }
          createMany: {
            args: Prisma.SecondaryModifierCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SecondaryModifierDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>
          }
          update: {
            args: Prisma.SecondaryModifierUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>
          }
          deleteMany: {
            args: Prisma.SecondaryModifierDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SecondaryModifierUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SecondaryModifierUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SecondaryModifierPayload>
          }
          aggregate: {
            args: Prisma.SecondaryModifierAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSecondaryModifier>
          }
          groupBy: {
            args: Prisma.SecondaryModifierGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SecondaryModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecondaryModifierCountArgs<ExtArgs>,
            result: $Utils.Optional<SecondaryModifierCountAggregateOutputType> | number
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
   * Count Type SecondaryModifierCountOutputType
   */


  export type SecondaryModifierCountOutputType = {
    ChallengeModifier: number
  }

  export type SecondaryModifierCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ChallengeModifier?: boolean | SecondaryModifierCountOutputTypeCountChallengeModifierArgs
  }

  // Custom InputTypes

  /**
   * SecondaryModifierCountOutputType without action
   */
  export type SecondaryModifierCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifierCountOutputType
     */
    select?: SecondaryModifierCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SecondaryModifierCountOutputType without action
   */
  export type SecondaryModifierCountOutputTypeCountChallengeModifierArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChallengeModifierWhereInput
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
    secondaryModifierId: number | null
  }

  export type ChallengeModifierSumAggregateOutputType = {
    id: number | null
    secondaryModifierId: number | null
  }

  export type ChallengeModifierMinAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
    secondaryModifierId: number | null
  }

  export type ChallengeModifierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    text: string | null
    secondaryModifierId: number | null
  }

  export type ChallengeModifierCountAggregateOutputType = {
    id: number
    name: number
    text: number
    secondaryModifierId: number
    _all: number
  }


  export type ChallengeModifierAvgAggregateInputType = {
    id?: true
    secondaryModifierId?: true
  }

  export type ChallengeModifierSumAggregateInputType = {
    id?: true
    secondaryModifierId?: true
  }

  export type ChallengeModifierMinAggregateInputType = {
    id?: true
    name?: true
    text?: true
    secondaryModifierId?: true
  }

  export type ChallengeModifierMaxAggregateInputType = {
    id?: true
    name?: true
    text?: true
    secondaryModifierId?: true
  }

  export type ChallengeModifierCountAggregateInputType = {
    id?: true
    name?: true
    text?: true
    secondaryModifierId?: true
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
    secondaryModifierId: number | null
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
    secondaryModifierId?: boolean
    secondaryModifier?: boolean | SecondaryModifierArgs<ExtArgs>
  }, ExtArgs["result"]["challengeModifier"]>

  export type ChallengeModifierSelectScalar = {
    id?: boolean
    name?: boolean
    text?: boolean
    secondaryModifierId?: boolean
  }

  export type ChallengeModifierInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    secondaryModifier?: boolean | SecondaryModifierArgs<ExtArgs>
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

    secondaryModifier<T extends SecondaryModifierArgs<ExtArgs> = {}>(args?: Subset<T, SecondaryModifierArgs<ExtArgs>>): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

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
   * Model SecondaryModifier
   */


  export type AggregateSecondaryModifier = {
    _count: SecondaryModifierCountAggregateOutputType | null
    _avg: SecondaryModifierAvgAggregateOutputType | null
    _sum: SecondaryModifierSumAggregateOutputType | null
    _min: SecondaryModifierMinAggregateOutputType | null
    _max: SecondaryModifierMaxAggregateOutputType | null
  }

  export type SecondaryModifierAvgAggregateOutputType = {
    id: number | null
  }

  export type SecondaryModifierSumAggregateOutputType = {
    id: number | null
  }

  export type SecondaryModifierMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SecondaryModifierMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SecondaryModifierCountAggregateOutputType = {
    id: number
    name: number
    values: number
    _all: number
  }


  export type SecondaryModifierAvgAggregateInputType = {
    id?: true
  }

  export type SecondaryModifierSumAggregateInputType = {
    id?: true
  }

  export type SecondaryModifierMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SecondaryModifierMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SecondaryModifierCountAggregateInputType = {
    id?: true
    name?: true
    values?: true
    _all?: true
  }

  export type SecondaryModifierAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryModifier to aggregate.
     */
    where?: SecondaryModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryModifiers to fetch.
     */
    orderBy?: Enumerable<SecondaryModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecondaryModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecondaryModifiers
    **/
    _count?: true | SecondaryModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecondaryModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecondaryModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecondaryModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecondaryModifierMaxAggregateInputType
  }

  export type GetSecondaryModifierAggregateType<T extends SecondaryModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateSecondaryModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecondaryModifier[P]>
      : GetScalarType<T[P], AggregateSecondaryModifier[P]>
  }




  export type SecondaryModifierGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SecondaryModifierWhereInput
    orderBy?: Enumerable<SecondaryModifierOrderByWithAggregationInput>
    by: SecondaryModifierScalarFieldEnum[]
    having?: SecondaryModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecondaryModifierCountAggregateInputType | true
    _avg?: SecondaryModifierAvgAggregateInputType
    _sum?: SecondaryModifierSumAggregateInputType
    _min?: SecondaryModifierMinAggregateInputType
    _max?: SecondaryModifierMaxAggregateInputType
  }


  export type SecondaryModifierGroupByOutputType = {
    id: number
    name: string
    values: string[]
    _count: SecondaryModifierCountAggregateOutputType | null
    _avg: SecondaryModifierAvgAggregateOutputType | null
    _sum: SecondaryModifierSumAggregateOutputType | null
    _min: SecondaryModifierMinAggregateOutputType | null
    _max: SecondaryModifierMaxAggregateOutputType | null
  }

  type GetSecondaryModifierGroupByPayload<T extends SecondaryModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SecondaryModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecondaryModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecondaryModifierGroupByOutputType[P]>
            : GetScalarType<T[P], SecondaryModifierGroupByOutputType[P]>
        }
      >
    >


  export type SecondaryModifierSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    values?: boolean
    ChallengeModifier?: boolean | SecondaryModifier$ChallengeModifierArgs<ExtArgs>
    _count?: boolean | SecondaryModifierCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["secondaryModifier"]>

  export type SecondaryModifierSelectScalar = {
    id?: boolean
    name?: boolean
    values?: boolean
  }

  export type SecondaryModifierInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ChallengeModifier?: boolean | SecondaryModifier$ChallengeModifierArgs<ExtArgs>
    _count?: boolean | SecondaryModifierCountOutputTypeArgs<ExtArgs>
  }


  type SecondaryModifierGetPayload<S extends boolean | null | undefined | SecondaryModifierArgs> = $Types.GetResult<SecondaryModifierPayload, S>

  type SecondaryModifierCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SecondaryModifierFindManyArgs, 'select' | 'include'> & {
      select?: SecondaryModifierCountAggregateInputType | true
    }

  export interface SecondaryModifierDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecondaryModifier'], meta: { name: 'SecondaryModifier' } }
    /**
     * Find zero or one SecondaryModifier that matches the filter.
     * @param {SecondaryModifierFindUniqueArgs} args - Arguments to find a SecondaryModifier
     * @example
     * // Get one SecondaryModifier
     * const secondaryModifier = await prisma.secondaryModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SecondaryModifierFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SecondaryModifierFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SecondaryModifier'> extends True ? Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SecondaryModifier that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SecondaryModifierFindUniqueOrThrowArgs} args - Arguments to find a SecondaryModifier
     * @example
     * // Get one SecondaryModifier
     * const secondaryModifier = await prisma.secondaryModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SecondaryModifierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SecondaryModifierFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SecondaryModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierFindFirstArgs} args - Arguments to find a SecondaryModifier
     * @example
     * // Get one SecondaryModifier
     * const secondaryModifier = await prisma.secondaryModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SecondaryModifierFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SecondaryModifierFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SecondaryModifier'> extends True ? Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SecondaryModifier that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierFindFirstOrThrowArgs} args - Arguments to find a SecondaryModifier
     * @example
     * // Get one SecondaryModifier
     * const secondaryModifier = await prisma.secondaryModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SecondaryModifierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SecondaryModifierFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SecondaryModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecondaryModifiers
     * const secondaryModifiers = await prisma.secondaryModifier.findMany()
     * 
     * // Get first 10 SecondaryModifiers
     * const secondaryModifiers = await prisma.secondaryModifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secondaryModifierWithIdOnly = await prisma.secondaryModifier.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SecondaryModifierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SecondaryModifierFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SecondaryModifier.
     * @param {SecondaryModifierCreateArgs} args - Arguments to create a SecondaryModifier.
     * @example
     * // Create one SecondaryModifier
     * const SecondaryModifier = await prisma.secondaryModifier.create({
     *   data: {
     *     // ... data to create a SecondaryModifier
     *   }
     * })
     * 
    **/
    create<T extends SecondaryModifierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SecondaryModifierCreateArgs<ExtArgs>>
    ): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SecondaryModifiers.
     *     @param {SecondaryModifierCreateManyArgs} args - Arguments to create many SecondaryModifiers.
     *     @example
     *     // Create many SecondaryModifiers
     *     const secondaryModifier = await prisma.secondaryModifier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SecondaryModifierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SecondaryModifierCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SecondaryModifier.
     * @param {SecondaryModifierDeleteArgs} args - Arguments to delete one SecondaryModifier.
     * @example
     * // Delete one SecondaryModifier
     * const SecondaryModifier = await prisma.secondaryModifier.delete({
     *   where: {
     *     // ... filter to delete one SecondaryModifier
     *   }
     * })
     * 
    **/
    delete<T extends SecondaryModifierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SecondaryModifierDeleteArgs<ExtArgs>>
    ): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SecondaryModifier.
     * @param {SecondaryModifierUpdateArgs} args - Arguments to update one SecondaryModifier.
     * @example
     * // Update one SecondaryModifier
     * const secondaryModifier = await prisma.secondaryModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SecondaryModifierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SecondaryModifierUpdateArgs<ExtArgs>>
    ): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SecondaryModifiers.
     * @param {SecondaryModifierDeleteManyArgs} args - Arguments to filter SecondaryModifiers to delete.
     * @example
     * // Delete a few SecondaryModifiers
     * const { count } = await prisma.secondaryModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SecondaryModifierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SecondaryModifierDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecondaryModifiers
     * const secondaryModifier = await prisma.secondaryModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SecondaryModifierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SecondaryModifierUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SecondaryModifier.
     * @param {SecondaryModifierUpsertArgs} args - Arguments to update or create a SecondaryModifier.
     * @example
     * // Update or create a SecondaryModifier
     * const secondaryModifier = await prisma.secondaryModifier.upsert({
     *   create: {
     *     // ... data to create a SecondaryModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecondaryModifier we want to update
     *   }
     * })
    **/
    upsert<T extends SecondaryModifierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SecondaryModifierUpsertArgs<ExtArgs>>
    ): Prisma__SecondaryModifierClient<$Types.GetResult<SecondaryModifierPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SecondaryModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierCountArgs} args - Arguments to filter SecondaryModifiers to count.
     * @example
     * // Count the number of SecondaryModifiers
     * const count = await prisma.secondaryModifier.count({
     *   where: {
     *     // ... the filter for the SecondaryModifiers we want to count
     *   }
     * })
    **/
    count<T extends SecondaryModifierCountArgs>(
      args?: Subset<T, SecondaryModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecondaryModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecondaryModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecondaryModifierAggregateArgs>(args: Subset<T, SecondaryModifierAggregateArgs>): Prisma.PrismaPromise<GetSecondaryModifierAggregateType<T>>

    /**
     * Group by SecondaryModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryModifierGroupByArgs} args - Group by arguments.
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
      T extends SecondaryModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecondaryModifierGroupByArgs['orderBy'] }
        : { orderBy?: SecondaryModifierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecondaryModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecondaryModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SecondaryModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SecondaryModifierClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
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

    ChallengeModifier<T extends SecondaryModifier$ChallengeModifierArgs<ExtArgs> = {}>(args?: Subset<T, SecondaryModifier$ChallengeModifierArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ChallengeModifierPayload<ExtArgs>, T, 'findMany', never>| Null>;

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
   * SecondaryModifier base type for findUnique actions
   */
  export type SecondaryModifierFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryModifier to fetch.
     */
    where: SecondaryModifierWhereUniqueInput
  }

  /**
   * SecondaryModifier findUnique
   */
  export interface SecondaryModifierFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SecondaryModifierFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SecondaryModifier findUniqueOrThrow
   */
  export type SecondaryModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryModifier to fetch.
     */
    where: SecondaryModifierWhereUniqueInput
  }


  /**
   * SecondaryModifier base type for findFirst actions
   */
  export type SecondaryModifierFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryModifier to fetch.
     */
    where?: SecondaryModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryModifiers to fetch.
     */
    orderBy?: Enumerable<SecondaryModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryModifiers.
     */
    cursor?: SecondaryModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryModifiers.
     */
    distinct?: Enumerable<SecondaryModifierScalarFieldEnum>
  }

  /**
   * SecondaryModifier findFirst
   */
  export interface SecondaryModifierFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SecondaryModifierFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SecondaryModifier findFirstOrThrow
   */
  export type SecondaryModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryModifier to fetch.
     */
    where?: SecondaryModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryModifiers to fetch.
     */
    orderBy?: Enumerable<SecondaryModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryModifiers.
     */
    cursor?: SecondaryModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryModifiers.
     */
    distinct?: Enumerable<SecondaryModifierScalarFieldEnum>
  }


  /**
   * SecondaryModifier findMany
   */
  export type SecondaryModifierFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * Filter, which SecondaryModifiers to fetch.
     */
    where?: SecondaryModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryModifiers to fetch.
     */
    orderBy?: Enumerable<SecondaryModifierOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecondaryModifiers.
     */
    cursor?: SecondaryModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryModifiers.
     */
    skip?: number
    distinct?: Enumerable<SecondaryModifierScalarFieldEnum>
  }


  /**
   * SecondaryModifier create
   */
  export type SecondaryModifierCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a SecondaryModifier.
     */
    data: XOR<SecondaryModifierCreateInput, SecondaryModifierUncheckedCreateInput>
  }


  /**
   * SecondaryModifier createMany
   */
  export type SecondaryModifierCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecondaryModifiers.
     */
    data: Enumerable<SecondaryModifierCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SecondaryModifier update
   */
  export type SecondaryModifierUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a SecondaryModifier.
     */
    data: XOR<SecondaryModifierUpdateInput, SecondaryModifierUncheckedUpdateInput>
    /**
     * Choose, which SecondaryModifier to update.
     */
    where: SecondaryModifierWhereUniqueInput
  }


  /**
   * SecondaryModifier updateMany
   */
  export type SecondaryModifierUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecondaryModifiers.
     */
    data: XOR<SecondaryModifierUpdateManyMutationInput, SecondaryModifierUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryModifiers to update
     */
    where?: SecondaryModifierWhereInput
  }


  /**
   * SecondaryModifier upsert
   */
  export type SecondaryModifierUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the SecondaryModifier to update in case it exists.
     */
    where: SecondaryModifierWhereUniqueInput
    /**
     * In case the SecondaryModifier found by the `where` argument doesn't exist, create a new SecondaryModifier with this data.
     */
    create: XOR<SecondaryModifierCreateInput, SecondaryModifierUncheckedCreateInput>
    /**
     * In case the SecondaryModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecondaryModifierUpdateInput, SecondaryModifierUncheckedUpdateInput>
  }


  /**
   * SecondaryModifier delete
   */
  export type SecondaryModifierDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
    /**
     * Filter which SecondaryModifier to delete.
     */
    where: SecondaryModifierWhereUniqueInput
  }


  /**
   * SecondaryModifier deleteMany
   */
  export type SecondaryModifierDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryModifiers to delete
     */
    where?: SecondaryModifierWhereInput
  }


  /**
   * SecondaryModifier.ChallengeModifier
   */
  export type SecondaryModifier$ChallengeModifierArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * SecondaryModifier without action
   */
  export type SecondaryModifierArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryModifier
     */
    select?: SecondaryModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SecondaryModifierInclude<ExtArgs> | null
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
    secondaryModifierId: 'secondaryModifierId'
  };

  export type ChallengeModifierScalarFieldEnum = (typeof ChallengeModifierScalarFieldEnum)[keyof typeof ChallengeModifierScalarFieldEnum]


  export const SecondaryModifierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    values: 'values'
  };

  export type SecondaryModifierScalarFieldEnum = (typeof SecondaryModifierScalarFieldEnum)[keyof typeof SecondaryModifierScalarFieldEnum]


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
    secondaryModifierId?: IntNullableFilter | number | null
    secondaryModifier?: XOR<SecondaryModifierRelationFilter, SecondaryModifierWhereInput> | null
  }

  export type ChallengeModifierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    secondaryModifierId?: SortOrderInput | SortOrder
    secondaryModifier?: SecondaryModifierOrderByWithRelationInput
  }

  export type ChallengeModifierWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type ChallengeModifierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    secondaryModifierId?: SortOrderInput | SortOrder
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
    secondaryModifierId?: IntNullableWithAggregatesFilter | number | null
  }

  export type SecondaryModifierWhereInput = {
    AND?: Enumerable<SecondaryModifierWhereInput>
    OR?: Enumerable<SecondaryModifierWhereInput>
    NOT?: Enumerable<SecondaryModifierWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    values?: StringNullableListFilter
    ChallengeModifier?: ChallengeModifierListRelationFilter
  }

  export type SecondaryModifierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    values?: SortOrder
    ChallengeModifier?: ChallengeModifierOrderByRelationAggregateInput
  }

  export type SecondaryModifierWhereUniqueInput = {
    id?: number
    name?: string
  }

  export type SecondaryModifierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    values?: SortOrder
    _count?: SecondaryModifierCountOrderByAggregateInput
    _avg?: SecondaryModifierAvgOrderByAggregateInput
    _max?: SecondaryModifierMaxOrderByAggregateInput
    _min?: SecondaryModifierMinOrderByAggregateInput
    _sum?: SecondaryModifierSumOrderByAggregateInput
  }

  export type SecondaryModifierScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SecondaryModifierScalarWhereWithAggregatesInput>
    OR?: Enumerable<SecondaryModifierScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SecondaryModifierScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    values?: StringNullableListFilter
  }

  export type ChallengeModifierCreateInput = {
    name: string
    text: string
    secondaryModifier?: SecondaryModifierCreateNestedOneWithoutChallengeModifierInput
  }

  export type ChallengeModifierUncheckedCreateInput = {
    id?: number
    name: string
    text: string
    secondaryModifierId?: number | null
  }

  export type ChallengeModifierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    secondaryModifier?: SecondaryModifierUpdateOneWithoutChallengeModifierNestedInput
  }

  export type ChallengeModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    secondaryModifierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChallengeModifierCreateManyInput = {
    id?: number
    name: string
    text: string
    secondaryModifierId?: number | null
  }

  export type ChallengeModifierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    secondaryModifierId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SecondaryModifierCreateInput = {
    name: string
    values?: SecondaryModifierCreatevaluesInput | Enumerable<string>
    ChallengeModifier?: ChallengeModifierCreateNestedManyWithoutSecondaryModifierInput
  }

  export type SecondaryModifierUncheckedCreateInput = {
    id?: number
    name: string
    values?: SecondaryModifierCreatevaluesInput | Enumerable<string>
    ChallengeModifier?: ChallengeModifierUncheckedCreateNestedManyWithoutSecondaryModifierInput
  }

  export type SecondaryModifierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    values?: SecondaryModifierUpdatevaluesInput | Enumerable<string>
    ChallengeModifier?: ChallengeModifierUpdateManyWithoutSecondaryModifierNestedInput
  }

  export type SecondaryModifierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    values?: SecondaryModifierUpdatevaluesInput | Enumerable<string>
    ChallengeModifier?: ChallengeModifierUncheckedUpdateManyWithoutSecondaryModifierNestedInput
  }

  export type SecondaryModifierCreateManyInput = {
    id?: number
    name: string
    values?: SecondaryModifierCreatevaluesInput | Enumerable<string>
  }

  export type SecondaryModifierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    values?: SecondaryModifierUpdatevaluesInput | Enumerable<string>
  }

  export type SecondaryModifierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    values?: SecondaryModifierUpdatevaluesInput | Enumerable<string>
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

  export type SecondaryModifierRelationFilter = {
    is?: SecondaryModifierWhereInput | null
    isNot?: SecondaryModifierWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChallengeModifierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    secondaryModifierId?: SortOrder
  }

  export type ChallengeModifierAvgOrderByAggregateInput = {
    id?: SortOrder
    secondaryModifierId?: SortOrder
  }

  export type ChallengeModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    secondaryModifierId?: SortOrder
  }

  export type ChallengeModifierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    text?: SortOrder
    secondaryModifierId?: SortOrder
  }

  export type ChallengeModifierSumOrderByAggregateInput = {
    id?: SortOrder
    secondaryModifierId?: SortOrder
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

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type ChallengeModifierListRelationFilter = {
    every?: ChallengeModifierWhereInput
    some?: ChallengeModifierWhereInput
    none?: ChallengeModifierWhereInput
  }

  export type ChallengeModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SecondaryModifierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    values?: SortOrder
  }

  export type SecondaryModifierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecondaryModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SecondaryModifierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SecondaryModifierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecondaryModifierCreateNestedOneWithoutChallengeModifierInput = {
    create?: XOR<SecondaryModifierCreateWithoutChallengeModifierInput, SecondaryModifierUncheckedCreateWithoutChallengeModifierInput>
    connectOrCreate?: SecondaryModifierCreateOrConnectWithoutChallengeModifierInput
    connect?: SecondaryModifierWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SecondaryModifierUpdateOneWithoutChallengeModifierNestedInput = {
    create?: XOR<SecondaryModifierCreateWithoutChallengeModifierInput, SecondaryModifierUncheckedCreateWithoutChallengeModifierInput>
    connectOrCreate?: SecondaryModifierCreateOrConnectWithoutChallengeModifierInput
    upsert?: SecondaryModifierUpsertWithoutChallengeModifierInput
    disconnect?: boolean
    delete?: boolean
    connect?: SecondaryModifierWhereUniqueInput
    update?: XOR<SecondaryModifierUpdateWithoutChallengeModifierInput, SecondaryModifierUncheckedUpdateWithoutChallengeModifierInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SecondaryModifierCreatevaluesInput = {
    set: Enumerable<string>
  }

  export type ChallengeModifierCreateNestedManyWithoutSecondaryModifierInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutSecondaryModifierInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutSecondaryModifierInput>
    createMany?: ChallengeModifierCreateManySecondaryModifierInputEnvelope
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type ChallengeModifierUncheckedCreateNestedManyWithoutSecondaryModifierInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutSecondaryModifierInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutSecondaryModifierInput>
    createMany?: ChallengeModifierCreateManySecondaryModifierInputEnvelope
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
  }

  export type SecondaryModifierUpdatevaluesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ChallengeModifierUpdateManyWithoutSecondaryModifierNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutSecondaryModifierInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutSecondaryModifierInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutSecondaryModifierInput>
    createMany?: ChallengeModifierCreateManySecondaryModifierInputEnvelope
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutSecondaryModifierInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutSecondaryModifierInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutSecondaryModifierNestedInput = {
    create?: XOR<Enumerable<ChallengeModifierCreateWithoutSecondaryModifierInput>, Enumerable<ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput>>
    connectOrCreate?: Enumerable<ChallengeModifierCreateOrConnectWithoutSecondaryModifierInput>
    upsert?: Enumerable<ChallengeModifierUpsertWithWhereUniqueWithoutSecondaryModifierInput>
    createMany?: ChallengeModifierCreateManySecondaryModifierInputEnvelope
    set?: Enumerable<ChallengeModifierWhereUniqueInput>
    disconnect?: Enumerable<ChallengeModifierWhereUniqueInput>
    delete?: Enumerable<ChallengeModifierWhereUniqueInput>
    connect?: Enumerable<ChallengeModifierWhereUniqueInput>
    update?: Enumerable<ChallengeModifierUpdateWithWhereUniqueWithoutSecondaryModifierInput>
    updateMany?: Enumerable<ChallengeModifierUpdateManyWithWhereWithoutSecondaryModifierInput>
    deleteMany?: Enumerable<ChallengeModifierScalarWhereInput>
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

  export type SecondaryModifierCreateWithoutChallengeModifierInput = {
    name: string
    values?: SecondaryModifierCreatevaluesInput | Enumerable<string>
  }

  export type SecondaryModifierUncheckedCreateWithoutChallengeModifierInput = {
    id?: number
    name: string
    values?: SecondaryModifierCreatevaluesInput | Enumerable<string>
  }

  export type SecondaryModifierCreateOrConnectWithoutChallengeModifierInput = {
    where: SecondaryModifierWhereUniqueInput
    create: XOR<SecondaryModifierCreateWithoutChallengeModifierInput, SecondaryModifierUncheckedCreateWithoutChallengeModifierInput>
  }

  export type SecondaryModifierUpsertWithoutChallengeModifierInput = {
    update: XOR<SecondaryModifierUpdateWithoutChallengeModifierInput, SecondaryModifierUncheckedUpdateWithoutChallengeModifierInput>
    create: XOR<SecondaryModifierCreateWithoutChallengeModifierInput, SecondaryModifierUncheckedCreateWithoutChallengeModifierInput>
  }

  export type SecondaryModifierUpdateWithoutChallengeModifierInput = {
    name?: StringFieldUpdateOperationsInput | string
    values?: SecondaryModifierUpdatevaluesInput | Enumerable<string>
  }

  export type SecondaryModifierUncheckedUpdateWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    values?: SecondaryModifierUpdatevaluesInput | Enumerable<string>
  }

  export type ChallengeModifierCreateWithoutSecondaryModifierInput = {
    name: string
    text: string
  }

  export type ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput = {
    id?: number
    name: string
    text: string
  }

  export type ChallengeModifierCreateOrConnectWithoutSecondaryModifierInput = {
    where: ChallengeModifierWhereUniqueInput
    create: XOR<ChallengeModifierCreateWithoutSecondaryModifierInput, ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput>
  }

  export type ChallengeModifierCreateManySecondaryModifierInputEnvelope = {
    data: Enumerable<ChallengeModifierCreateManySecondaryModifierInput>
    skipDuplicates?: boolean
  }

  export type ChallengeModifierUpsertWithWhereUniqueWithoutSecondaryModifierInput = {
    where: ChallengeModifierWhereUniqueInput
    update: XOR<ChallengeModifierUpdateWithoutSecondaryModifierInput, ChallengeModifierUncheckedUpdateWithoutSecondaryModifierInput>
    create: XOR<ChallengeModifierCreateWithoutSecondaryModifierInput, ChallengeModifierUncheckedCreateWithoutSecondaryModifierInput>
  }

  export type ChallengeModifierUpdateWithWhereUniqueWithoutSecondaryModifierInput = {
    where: ChallengeModifierWhereUniqueInput
    data: XOR<ChallengeModifierUpdateWithoutSecondaryModifierInput, ChallengeModifierUncheckedUpdateWithoutSecondaryModifierInput>
  }

  export type ChallengeModifierUpdateManyWithWhereWithoutSecondaryModifierInput = {
    where: ChallengeModifierScalarWhereInput
    data: XOR<ChallengeModifierUpdateManyMutationInput, ChallengeModifierUncheckedUpdateManyWithoutChallengeModifierInput>
  }

  export type ChallengeModifierScalarWhereInput = {
    AND?: Enumerable<ChallengeModifierScalarWhereInput>
    OR?: Enumerable<ChallengeModifierScalarWhereInput>
    NOT?: Enumerable<ChallengeModifierScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    text?: StringFilter | string
    secondaryModifierId?: IntNullableFilter | number | null
  }

  export type ChallengeModifierCreateManySecondaryModifierInput = {
    id?: number
    name: string
    text: string
  }

  export type ChallengeModifierUpdateWithoutSecondaryModifierInput = {
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeModifierUncheckedUpdateWithoutSecondaryModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ChallengeModifierUncheckedUpdateManyWithoutChallengeModifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
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