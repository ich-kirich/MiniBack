/*
  4260 - AllCombinations ------- by 蛭子屋双六 (@sugoroku-y) #medium #template-literal #infer #union
  ### Question
  Implement type ```AllCombinations<S>``` that return all combinations of strings which use characters from ```S``` at most once.
  For example:

  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

  > View on GitHub: https://tsch.js.org/4260
*/
// Solution
type StringToUnions<S extends string> = S extends `${infer FIrst}${infer Next}`
  ? FIrst | StringToUnion<Next>
  : "";

type Combinations<T extends string, U = T> = U extends T
  ? U | `${U}${Combinations<Exclude<T, U>>}`
  : never;

type AllCombinations<S extends string> = Combinations<StringToUnions<S>>;
