/*
  2852 - OmitByType ------- by jiangshan (@jiangshanmeta) #medium #object
  ### Question
  From ```T```, pick a set of properties whose type are not assignable to ```U```.
  For Example

  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }

  > View on GitHub: https://tsch.js.org/2852
*/
// Solution
type OmitByType<T, U> = {
  [i in keyof T as T[i] extends U ? never : i]: T[i];
};
