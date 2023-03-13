/*
  3060 - Unshift ------- by jiangshan (@jiangshanmeta) #easy #array
  ### Question
  Implement the type version of ```Array.unshift```
  For example:

  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

  > View on GitHub: https://tsch.js.org/3060
*/

// Solution

type Unshift<T extends any[], U> = [U, ...T];
