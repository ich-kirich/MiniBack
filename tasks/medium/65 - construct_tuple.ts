/*
  7544 - Construct Tuple ------- by Lo (@LoTwT) #medium #tuple
  ### Question
  Construct a tuple with a given length.
  For example

  type result = ConstructTuple<2> // expect to be [unknown, unkonwn]

  > View on GitHub: https://tsch.js.org/7544
*/
// Solution
type ConstructTuple<
  L extends number,
  Res extends any[] = [],
> = Res["length"] extends L ? Res : ConstructTuple<L, [unknown, ...Res]>;
