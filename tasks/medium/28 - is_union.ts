/*
  1097 - IsUnion ------- by null (@bencor) #medium #union
  ### Question
  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.
  For example:
  
    type case1 = IsUnion<string>  // false
    type case2 = IsUnion<string|number>  // true
    type case3 = IsUnion<[string|number]>  // false

  > View on GitHub: https://tsch.js.org/1097
*/
// Solution
type IsUnion<T, B = T> = [T] extends [never]
  ? false
  : T extends B
  ? [B] extends [T]
    ? false
    : true
  : never;
