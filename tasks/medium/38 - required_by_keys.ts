/*
  2759 - RequiredByKeys ------- by jiangshan (@jiangshanmeta) #medium #object
  ### Question
  Implement a generic `RequiredByKeys<T,  K>` which takes two type argument `T` and `K`.
  `K` specify the set of properties of `T` that should set to be required. 
  When `K` is not provided, it should make all properties required just like the normal `Required<T>`.
  For example

  interface User {
    name?: string
    age?: number
    address?: string
  }

  type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }

  > View on GitHub: https://tsch.js.org/2759
*/
// Solution
type Copys<T> = {
  [Key in keyof T]: T[Key];
};

type RequiredByKeys<T, K extends keyof T = keyof T> = Copys<
  {
    [Key in keyof T as Key extends K ? Key : never]-?: T[Key];
  } & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
  }
>;
