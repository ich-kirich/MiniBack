/*
  5153 - IndexOf ------- by Pineapple (@Pineapple0919) #medium #array
  ### Question
  Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

  > View on GitHub: https://tsch.js.org/5153
*/
// Solution
type IndexOf<T extends any[], U, Temp extends any[] = []> = T extends [
  infer First,
  ...infer Next,
]
  ? (U extends First ? (First extends U ? true : false) : false) extends true
    ? [...Temp]["length"]
    : IndexOf<Next, U, [...Temp, 0]>
  : -1;
