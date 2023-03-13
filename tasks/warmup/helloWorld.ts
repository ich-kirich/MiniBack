/*
  13 - Hello World ------- by Anthony Fu (@antfu) #warm-up
  ### Question
  Hello, World!
  In Type Challenges, we use the type system itself to do the assertion.
  For this challenge, you will need to change the following code to make the tests pass (no type check errors).

  // expected to be string
  type HelloWorld = any

  // you should make this work
  type test = Expect<Equal<HelloWorld, string>>

  > View on GitHub: https://tsch.js.org/13
*/

// Solution

type HelloWorld = string;
