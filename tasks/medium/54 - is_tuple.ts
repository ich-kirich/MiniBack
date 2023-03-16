/*
  4484 - IsTuple ------- by jiangshan (@jiangshanmeta) #medium #tuple
  ### Question
  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.
  For example:

  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false

  > View on GitHub: https://tsch.js.org/4484
*/
// Solution
type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false;
