/*
  459 - Flatten ------- by zhouyiming (@chbro) #medium #array
  ### Question
  In this challenge, you would need to write a type that takes an array and emitted the flatten array type.
  For example:

  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

  > View on GitHub: https://tsch.js.org/459
*/
// Solution
type Flatten<T extends any[]> = T extends [infer First, ...infer Next]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Next>]
    : [First, ...Flatten<Next>]
  : T;
