/*
  106 - Trim Left ------- by Anthony Fu (@antfu) #medium #template-literal
  ### Question
  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.
  For example

  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

  > View on GitHub: https://tsch.js.org/106
*/
// Solution
type whiteSpace = " " | "\t" | "\n";
type TrimLeft<S extends string> = S extends `${whiteSpace}${infer str}`
  ? TrimLeft<str>
  : S;
