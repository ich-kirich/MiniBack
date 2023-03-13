/*
  7 - Readonly ------- by Anthony Fu (@antfu) #easy #built-in #readonly #object-keys
  ### Question
  Implement the built-in `Readonly<T>` generic without using it.
  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
  For example:

  interface Todo {
    title: string
    description: string
  }

  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property

  > View on GitHub: https://tsch.js.org/7
*/

// Solution

type MyReadonly<T> = {
  readonly [i in keyof T]: T[i];
};
