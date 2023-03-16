/*
  2070 - Drop Char ------- by CaptainOfPhB (@CaptainOfPhB) #medium #template-literal #infer
  ### Question
  Drop a specified char from a string.
  For example:

  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

  > View on GitHub: https://tsch.js.org/2070
*/
// Solution
type DropChar<S, C extends string> = S extends `${infer First}${C}${infer Next}`
  ? `${First}${DropChar<Next, C>}`
  : S;
