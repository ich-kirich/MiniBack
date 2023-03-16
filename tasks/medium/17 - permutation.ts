/*
  296 - Permutation ------- by Naoto Ikuno (@pandanoir) #medium #union
  ### Question
  Implement permutation type that transforms union types into the array that includes permutations of unions.

  type perm = Permutation<'A' | 'B' | 'C'>; 
  // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

  > View on GitHub: https://tsch.js.org/296
*/
// Solution
type Permutation<T, Acc = T> = [T] extends [never]
  ? []
  : T extends any
  ? [T, ...Permutation<Exclude<Acc, T>>]
  : never;
