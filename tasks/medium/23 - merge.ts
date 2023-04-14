/*
  599 - Merge ------- by ZYSzys (@ZYSzys) #medium #object
  ### Question
  Merge two types into a new type. Keys of the second type overrides keys of the first type.
  For example

  type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }

  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}

  > View on GitHub: https://tsch.js.org/599
*/
// Solution
type Merge<F, S> = {
  [T in keyof F | keyof S]: T extends keyof S
    ? S[T]
    : T extends keyof F
    ? F[T]
    : never;
};
