/*
  2257 - MinusOne ------- by Mustafo Faiz (@fayzzzm) #medium #math
  ### Question
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  For example:

  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54

  > View on GitHub: https://tsch.js.org/2257
*/
// Solution

// Как решить эту задачу???
type MinusOne<N extends number> = N extends 0 ? 0 : MinusOne<N-1> + 1;
