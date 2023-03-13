/*
  108 - Trim ------- by Anthony Fu (@antfu) #medium #template-literal
  ### Question
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
  For example

  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

  > View on GitHub: https://tsch.js.org/108
*/
// Solution
type whiteSpaces = " " | "\t" | "\n";
type Trim<S extends string> = S extends
  | `${whiteSpaces}${infer str}`
  | `${infer str}${whiteSpaces}`
  ? Trim<str>
  : S;
