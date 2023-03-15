/*
  4425 - Greater Than ------- by ch3cknull (@ch3cknull) #medium #array
  ### Question
  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`
  Negative numbers do not need to be considered.
  For example

  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/
// Solution
// Как это решить, это решение не покрывает все тесты
type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : T extends U | number
  ? true
  : false;
