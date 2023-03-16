/*
  645 - Diff ------- by ZYSzys (@ZYSzys) #medium #object
  ### Question
  Get an `Object` that is the difference between `O` & `O1`
  > View on GitHub: https://tsch.js.org/645
*/
// Solution
type Diff<O, O1> = {
  [i in Exclude<keyof O1, keyof O> | Exclude<keyof O, keyof O1>]: (O & O1)[i];
};
