/*
  5317 - LastIndexOf ------- by jiangshan (@jiangshanmeta) #medium #array
  ### Question
  Implement the type version of ```Array.lastIndexOf```, 
  ```LastIndexOf<T, U>```  takes an Array ```T```, any ```U``` and returns the index of the last ```U``` in Array ```T```
  For example:

  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2> // -1

  > View on GitHub: https://tsch.js.org/5317
*/
// Solution
import type { Equal } from "@type-challenges/utils"; // библиотека из playground задач

type LastIndexOf<T, U> = T extends [...infer Next, infer Last]
  ? Equal<Last, U> extends true
    ? Next["length"]
    : LastIndexOf<Next, U>
  : -1;
