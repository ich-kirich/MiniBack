/*
  16259 - ToPrimitive ------- by 前端子鱼 (@mwc) #medium
  ### Question
  Convert a property of type literal (label type) to a primitive type.
  For example

  type X = {
    name: 'Tom',
    age: 30,
    married: false,
    addr: {
      home: '123456',
      phone: '13111111111'
    }
  }

  type Expected = {
    name: string,
    age: number,
    married: boolean,
    addr: {
      home: string,
      phone: string
    }
  }
  type Todo = ToPrimitive<X> // should be same as `Expected`

  > View on GitHub: https://tsch.js.org/16259
*/
// Solution
type ToPrimitive<T> = T extends Function
  ? Function
  : T extends object
  ? {
      [K in keyof T]: ToPrimitive<T[K]>;
    }
  : T extends boolean
  ? boolean
  : T extends string
  ? string
  : T extends number
  ? number
  : never;
