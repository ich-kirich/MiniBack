/*
  298 - Length of String ------- by Pig Fang (@g-plane) #medium #template-literal
  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/
// Solution
type LengthOfString<
  S extends string,
  R extends any[] = [],
> = S extends `${infer First}${infer Next}`
  ? LengthOfString<Next, [...R, First]>
  : R["length"];
