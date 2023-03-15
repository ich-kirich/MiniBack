/*
  5117 - Without ------- by Pineapple (@Pineapple0919) #medium #union #array
  ### Question
  Implement the type version of Lodash.without, Without<T, U> takes an Array T, 
  number or array U and returns an Array without the elements of U.

  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

  > View on GitHub: https://tsch.js.org/5117
*/
// Solution
type Without<T extends any[], U extends number | number[]> = T extends [
  infer First,
  ...infer Next,
]
  ? First extends (U extends number[] ? U[number] : U)
    ? Without<Next, U>
    : [First, ...Without<Next, U>]
  : T;
