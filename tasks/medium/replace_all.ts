/*
  119 - ReplaceAll ------- by Anthony Fu (@antfu) #medium #template-literal
  ### Question
  Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`
  For example

  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

  > View on GitHub: https://tsch.js.org/119
*/
// Solution
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer First}${From extends "" ? never : From}${infer Next}`
  ? `${First}${To}${ReplaceAll<Next, From, To>}`
  : S;
