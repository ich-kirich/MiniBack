/*
  3192 - Reverse ------- by jiangshan (@jiangshanmeta) #medium #tuple
  ### Question
  Implement the type version of ```Array.reverse```
  For example:

  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

  > View on GitHub: https://tsch.js.org/3192
*/
// Solution
type Reverse<T> = T extends [infer First, ...infer Next]
  ? [...Reverse<Next>, First]
  : [];
