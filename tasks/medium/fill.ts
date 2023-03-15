/*
  4518 - Fill ------- by キリサメ qianxi (@qianxi0410) #medium #tuple
  ### Question
  `Fill`, a common JavaScript function, now let us implement it with types.
  `Fill<T, N, Start?, End?>`, as you can see,`Fill` accepts four types of parameters, 
  of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters.
  The requirements for these parameters are: `T` must be a `tuple`, `N` can be any type of value, 
  `Start` and `End` must be integers greater than or equal to 0.

  type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]

  In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

  > View on GitHub: https://tsch.js.org/4518
*/
// Solution

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  I extends number[] = [],
  S extends boolean = false,
> = T extends [infer First, ...infer Next]
  ? I["length"] extends End
    ? T
    : I["length"] extends Start
    ? [N, ...Fill<Next, N, Start, End, [...I, I["length"]], true>]
    : [
        S extends true ? N : First,
        ...Fill<Next, N, Start, End, [...I, I["length"]], S>,
      ]
  : T;
