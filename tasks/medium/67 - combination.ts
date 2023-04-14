/*
  8767 - Combination ------- by Homyee King (@HomyeeKing) #medium #array #application #string
  ### Question
  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video 
  [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)

  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>

  > View on GitHub: https://tsch.js.org/8767
*/
// Solution
type Combination<T extends string[], U = T[number], K = U> = K extends string
  ? K | `${K} ${Combination<[], Exclude<U, K>>}`
  : "";
