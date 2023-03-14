/*
  2946 - ObjectEntries ------- by jiangshan (@jiangshanmeta) #medium #object
  ### Question
  Implement the type version of ```Object.entries```
  For example

  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

  > View on GitHub: https://tsch.js.org/2946
*/
// Solution
type ObjectEntries<T> = {
  [i in keyof Required<T>]: [
    i,
    T[i] extends undefined | infer U ? U : undefined,
  ];
}[keyof T];
