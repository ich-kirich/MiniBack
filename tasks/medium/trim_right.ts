/*
  4803 - Trim Right ------- by Yugang Cao (@Talljack) #medium #template-literal
  ### Question
  Implement `TrimRight<T>` which takes an exact string type and returns a new string with the whitespace ending removed.
  For example:

  type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'

  > View on GitHub: https://tsch.js.org/4803
*/
// Solution
type whiteSpac = " " | "\t" | "\n";
type TrimRight<S extends string> = S extends `${infer str}${whiteSpac}`
  ? TrimRight<str>
  : S;
