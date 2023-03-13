/*
  898 - Includes ------- by null (@kynefuk) #easy #array
  ### Question
  Implement the JavaScript `Array.includes` function in the type system.
  A type takes the two arguments. The output should be a boolean `true` or `false`.
  For example:

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

  > View on GitHub: https://tsch.js.org/898
*/

// Solution
import type { Equal } from "@type-challenges/utils"; // эта штука экспортируется в playground этиъ задач

type Includes<T extends readonly any[], U> = T extends [
  infer Current,
  ...infer Rest,
]
  ? Equal<Current, U> extends true
    ? true
    : Includes<Rest, U>
  : false;
