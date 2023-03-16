/*
  43 - Exclude ------- by Zheeeng (@zheeeng) #easy #built-in #union
  ### Question
  Implement the built-in Exclude<T, U>
  > Exclude from T those types that are assignable to U
  For example:

  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

  > View on GitHub: https://tsch.js.org/43
*/

// Solution

type MyExclude<T, U> = T extends U ? never : T;
