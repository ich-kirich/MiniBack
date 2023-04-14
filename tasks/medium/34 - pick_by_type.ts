/*
  2595 - PickByType ------- by jiangshan (@jiangshanmeta) #medium #object
  ### Question
  From `T`, pick a set of properties whose type are assignable to `U`.
  For Example

  type OnlyBoolean = PickByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { isReadonly: boolean; isEnable: boolean; }

  > View on GitHub: https://tsch.js.org/2595
*/
// Solution
type PickByType<T, U> = {
  [i in keyof T as T[i] extends U ? i : never]: T[i];
};
