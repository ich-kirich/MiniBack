/*
  8640 - Number Range ------- by AaronGuo (@HongxuanG) #medium
  ### Question
  Sometimes we want to limit the range of numbers...
  For examples.

  type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

  > View on GitHub: https://tsch.js.org/8640
*/
// Solution
type NumberRange<
  L,
  H,
  Arr extends unknown[] = [],
  R = never,
> = Arr["length"] extends L
  ? Arr["length"] extends H
    ? R | Arr["length"]
    : NumberRange<[...Arr, 0]["length"], H, [...Arr, 0], R | Arr["length"]>
  : NumberRange<L, H, [...Arr, 0], R>;
