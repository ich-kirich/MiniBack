/*
  9898 - Appear only once ------- by X.Q. Chen (@brenner8023) #medium
  ### Question
  Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.
  > View on GitHub: https://tsch.js.org/9898
*/
// Solution
type FindEles<T extends any[], R extends any[] = [], P = never> = T extends [
  infer First,
  ...infer Next,
]
  ? First extends P
    ? FindEles<Next, R, P>
    : First extends Next[number]
    ? FindEles<Next, R, P | First>
    : FindEles<Next, [...R, First], P | First>
  : R;
