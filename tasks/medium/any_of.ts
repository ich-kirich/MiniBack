/*
  949 - AnyOf ------- by null (@kynefuk) #medium #array
  ### Question
  Implement Python liked `any` function in the type system. 
  A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.
  For example:

  type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

  > View on GitHub: https://tsch.js.org/949
*/
// Solution
type Falthy = false | 0 | "" | [] | Record<string, never> | undefined | null;
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Next]
  ? First extends Falthy
    ? AnyOf<Next>
    : true
  : false;
