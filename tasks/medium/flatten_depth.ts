/*
  3243 - FlattenDepth ------- by jiangshan (@jiangshanmeta) #medium #array
  ### Question
  Recursively flatten array up to depth times.
  For example:

  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

  If the depth is provided, it's guaranteed to be positive integer.

  > View on GitHub: https://tsch.js.org/3243
*/
// Solution
type Flattens<T extends any[]> = T extends [infer K, ...infer U]
  ? K extends any[]
    ? [...K, ...Flattens<U>]
    : [K, ...Flattens<U>]
  : [];

type FlattenDepth<
  T extends any[],
  D extends number = 1,
  A extends 0[] = [],
> = A["length"] extends D
  ? T
  : Flattens<T> extends T
  ? T
  : FlattenDepth<Flattens<T>, D, [...A, 0]>;
