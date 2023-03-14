/*
  3196 - Flip Arguments ------- by jiangshan (@jiangshanmeta) #medium #arguments
  ### Question
  Implement the type version of lodash's ```_.flip```.
  Type ```FlipArguments<T>``` requires function type ```T``` and 
  returns a new function type which has the same return type of T but reversed parameters.
  For example:

  type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>
  // (arg0: boolean, arg1: number, arg2: string) => void

  > View on GitHub: https://tsch.js.org/3196
*/
// Solution
type ReverseArr<T extends any[]> = T extends [infer First, ...infer Next]
  ? [...Reverse<Next>, First]
  : [];

type FlipArguments<T extends (...args: any) => any> = (
  ...args: ReverseArr<Parameters<T>>
) => ReturnType<T>;
