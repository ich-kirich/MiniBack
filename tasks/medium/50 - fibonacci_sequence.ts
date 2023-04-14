/*
  4182 - Fibonacci Sequence ------- by windliang (@wind-liang) #medium
  ### Question
  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding Fibonacci number.
  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
  For example

  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21

  > View on GitHub: https://tsch.js.org/4182
*/
// Solution

type Fibonacci<
  T extends number,
  CurrentIndex extends any[] = [""],
  Prev extends any[] = [],
  Current extends any[] = [""],
> = CurrentIndex["length"] extends T
  ? Current["length"]
  : Fibonacci<T, [...CurrentIndex, ""], Current, [...Prev, ...Current]>;
