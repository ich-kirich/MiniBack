/*
  2688 - StartsWith ------- by jiangshan (@jiangshanmeta) #medium #template-literal
  ### Question
  Implement `StartsWith<T, U>` which takes two exact string types and returns whether `T` starts with `U`
  For example

  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false

  > View on GitHub: https://tsch.js.org/2688
*/
// Solution
type StartsWith<
  T extends string,
  U extends string,
> = T extends `${U}${infer Next}` ? true : false;
