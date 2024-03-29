/*
  4 - Pick ------- by Anthony Fu (@antfu) #easy #union #built-in
  ### Question
  Implement the built-in `Pick<T, K>` generic without using it.
  Constructs a type by picking the set of properties `K` from `T`
  For example:

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>

  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }

  > View on GitHub: https://tsch.js.org/4
*/

// Solution

type MyPick<T, K extends keyof T> = {
  [i in K]: T[i];
};
