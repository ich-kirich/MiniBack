/*
  3188 - Tuple to Nested Object ------- by jiangshan (@jiangshanmeta) #medium #object #tuple
  ### Question
  Given a tuple type ```T``` that only contains string type, and a type ```U```, build an object recursively.

  type a = TupleToNestedObject<['a'], string> // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

  > View on GitHub: https://tsch.js.org/3188
*/
// Solution
type TupleToNestedObject<T, U> = T extends [infer First, ...infer Next]
  ? {
      [i in First & string]: TupleToNestedObject<Next, U>;
    }
  : U;
