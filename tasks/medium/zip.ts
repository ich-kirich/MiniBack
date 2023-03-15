/*
  4471 - Zip ------- by キリサメ qianxi (@qianxi0410) #medium #tuple
  ### Question
  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`

  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

  > View on GitHub: https://tsch.js.org/4471
*/
// Solution
type Zip<T, U> = T extends [infer First, ...infer Next]
  ? U extends [infer FirstU, ...infer NextU]
    ? [[First, FirstU], ...Zip<Next, NextU>]
    : []
  : [];
