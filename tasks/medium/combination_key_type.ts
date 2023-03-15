/*
  21106 - Combination key type ------- by Nauxscript (@Nauxscript) #medium
  ### Question
  1. Combine multiple modifier keys, but the same modifier key combination cannot appear.
  2. In the `ModifierKeys` provided, the priority of the previous value is higher 
  than the latter value; that is, `cmd ctrl` is OK, but `ctrl cmd` is not allowed.
  > View on GitHub: https://tsch.js.org/21106
*/
// Solution
type Combs<T extends string[] = []> = T extends [
  infer First extends string,
  ...infer Next extends string[],
]
  ? `${First} ${Next[number]}` | Combs<Next>
  : never;
