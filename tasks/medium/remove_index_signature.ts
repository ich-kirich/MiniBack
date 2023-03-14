/*
  1367 - Remove Index Signature ------- by hiroya iizuka (@hiroyaiizuka) #medium #object-keys
  ### Question
  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.
  For example:

  type Foo = {
    [key: string]: any;
    foo(): void;
  }

  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }

  > View on GitHub: https://tsch.js.org/1367
*/
// Solution
type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};
