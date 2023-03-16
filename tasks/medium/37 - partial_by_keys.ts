/*
  2757 - PartialByKeys ------- by jiangshan (@jiangshanmeta) #medium #object
  ### Question
  Implement a generic `PartialByKeys<T, K>` which takes two type argument `T` and `K`.
  `K` specify the set of properties of `T` that should set to be optional. 
  When `K` is not provided, it should make all properties optional just like the normal `Partial<T>`.
  For example

  interface User {
    name: string
    age: number
    address: string
  }

  type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

  > View on GitHub: https://tsch.js.org/2757
*/
// Solution
type Copy<T> = {
  [Key in keyof T]: T[Key];
};
type PartialByKeys<T, K extends keyof T = keyof T> = Copy<
  Partial<Pick<T, K>> & Omit<T, K>
>;
