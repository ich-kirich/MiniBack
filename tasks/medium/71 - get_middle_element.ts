/*
  9896 - GetMiddleElement ------- by 凤之兮原 (@kongmingLatern) #medium
  ### Question
  Get the middle element of the array by implementing a `GetMiddleElement` method, represented by an array
  > If the length of the array is odd, return the middle element
  > If the length of the array is even, return the middle two elements
  For example

    type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>, // expected to be [3]
    type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // expected to be [3, 4]

  > View on GitHub: https://tsch.js.org/9896
*/
// Solution
type GetMiddleElement<T extends any[]> = T["length"] extends 0 | 1 | 2
  ? T
  : T extends [infer First, ...infer Next, infer Last]
  ? GetMiddleElement<Next>
  : never;
