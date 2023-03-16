/*
  110 - Capitalize ------- by Anthony Fu (@antfu) #medium #template-literal
  ### Question
  Implement `Capitalize<T>` which converts the first letter of a string to uppercase and leave the rest as-is.
  For example

  type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

  > View on GitHub: https://tsch.js.org/110
*/
// Solution
type MyCapitalize<S extends string> = S extends `${infer First}${infer Next}`
  ? `${Uppercase<First>}${Next}`
  : S;
