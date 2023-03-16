/*
  189 - Awaited ------- by Maciej Sikora (@maciejsikora) #easy #promise #built-in
  ### Questio
  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?
  For example: if we have `Promise<ExampleType>` how to get ExampleType?

  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string

  > This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora)

  > View on GitHub: https://tsch.js.org/189
*/

// Solution

type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<unknown>
    ? MyAwaited<U>
    : U
  : never;
