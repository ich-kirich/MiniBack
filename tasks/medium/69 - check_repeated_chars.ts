/*
  9142 - CheckRepeatedChars ------- by Hong (@RThong) #medium #union #string
  ### Question
  Implement type ```CheckRepeatedChars<S>``` which will return whether type ```S``` contains duplicated chars?
  For example:

  type CheckRepeatedChars<'abc'>   // false
  type CheckRepeatedChars<'aba'>   // true

  > View on GitHub: https://tsch.js.org/9142
*/
// Solution
type CheckRepeatedChars<T extends string> =
  T extends `${infer First}${infer Next}`
    ? Next extends `${string}${First}${string}`
      ? true
      : CheckRepeatedChars<Next>
    : false;
