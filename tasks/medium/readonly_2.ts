/*
  8 - Readonly 2 ------- by Anthony Fu (@antfu) #medium #readonly #object-keys
  ### Question
  Implement a generic `MyReadonly2<T, K>` which takes two type argument `T` and `K`.
  `K` specify the set of properties of `T` that should set to Readonly. 
  When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.
  For example

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  }

  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  todo.completed = true // OK

  > View on GitHub: https://tsch.js.org/8
*/

// Solution
type MyOmitExpm<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type MyReadonly2<T, K extends keyof T = keyof T> = MyOmit<T, K> & {
  readonly [P in K]: T[P];
};
