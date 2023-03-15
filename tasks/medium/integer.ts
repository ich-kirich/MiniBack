/*
  10969 - Integer ------- by HuaBing (@hbcraft) #medium #template-literal
  ### Question
  Please complete type `Integer<T>`, type `T` inherits from `number`, if `T` is an integer return it, otherwise return `never`.
  > View on GitHub: https://tsch.js.org/10969
*/
// Solution

type Integer<T extends number> = number extends T
  ? never
  : `${T}` extends `${number}.${"" | number}`
  ? never
  : T;
