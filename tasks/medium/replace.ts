/*
  116 - Replace ------- by Anthony Fu (@antfu) #medium #template-literal
  ### Question
  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`
  For example

  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

  > View on GitHub: https://tsch.js.org/116
*/
// Solution
type Replace<
  S extends string,
  From extends string,
  To extends string,
> = From extends ""
  ? S
  : S extends `${infer Fisrt}${From}${infer Next}`
  ? `${Fisrt}${To}${Next}`
  : S;
