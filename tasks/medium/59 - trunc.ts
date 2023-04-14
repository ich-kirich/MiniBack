/*
  5140 - Trunc ------- by jiangshan (@jiangshanmeta) #medium #template-literal
  ### Question
  Implement the type version of ```Math.trunc```, 
  which takes string or number and returns the integer part of a number by removing any fractional digits.
  For example:

  type A = Trunc<12.34> // 12

  > View on GitHub: https://tsch.js.org/5140
*/
// Solution

type Trunc<T extends string | number> =
  `${T}` extends `${infer Start}${"."}${string}` ? Start : `${T}`;
