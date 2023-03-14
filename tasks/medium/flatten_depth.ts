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
// Как цэ решить
type FlattenDepth<A, D extends number = 1> = 
  A extends [] ? A : 
  D extends 0 ? A : 
  A extends [infer H, ...infer T] ?
    H extends Array<any> ?
      [...FlattenDepth<H, MinusOne<D>>, ...FlattenDepth<T, MinusOne<D>>] :
      [H, ...FlattenDepth<T, D>] :
    A;
    
type MinusOne<N extends number> = N extends 0 ? 0 : {[K in keyof any[]]: K extends `${N - 1}` ? never : K }[keyof any[]] & number;
