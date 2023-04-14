/*
  18220 - Filter ------- by Muhun Kim (@x86chi) #medium #array #filter
  ### Question
  Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.
  > View on GitHub: https://tsch.js.org/18220
*/
// Solution
type Filter<T extends any[], P, Res extends any[] = []> = T extends [
  infer First,
  ...infer Next,
]
  ? First extends P
    ? Filter<Next, P, [...Res, First]>
    : Filter<Next, P, Res>
  : Res;
