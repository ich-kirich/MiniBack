/*
  3 - Omit ------- by Anthony Fu (@antfu) #medium #union #built-in
  ### Question
  Implement the built-in `Omit<T, K>` generic without using it.
  Constructs a type by picking all properties from `T` and then removing `K`
  For example

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }

  > View on GitHub: https://tsch.js.org/3
*/

// Solution
type MyOmit<T, K extends keyof T> = {
  [i in keyof T as i extends K ? never : i]: T[i];
};
