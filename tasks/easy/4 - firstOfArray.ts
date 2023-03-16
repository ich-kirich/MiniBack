/*
  14 - First of Array ------- by Anthony Fu (@antfu) #easy #array
  ### Question
  Implement a generic `First<T>` that takes an Array `T` and returns its first element's type.
  For example:

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3

  > View on GitHub: https://tsch.js.org/14
*/

// Solution

type First<T extends any[]> = T[0] extends undefined
  ? T["length"] extends 0
    ? never
    : undefined
  : T[0];
