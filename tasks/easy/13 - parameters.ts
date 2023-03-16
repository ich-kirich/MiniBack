/*
  3312 - Parameters ------- by midorizemi (@midorizemi) #easy #infer #tuple #built-in
  ### Question
  Implement the built-in Parameters<T> generic without using it.
  For example:

  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

  > View on GitHub: https://tsch.js.org/3312
*/

// Solution
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
