/*
  531 - String to Union ------- by Andrey Krasovsky (@bre30kra69cs) #medium #union #string
  ### Question
  Implement the String to Union type. Type take string argument. The output should be a union of input letters
  For example

  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

  > View on GitHub: https://tsch.js.org/531
*/
// Solution
type StringToUnion<T extends string> = T extends `${infer First}${infer Next}`
  ? First | StringToUnion<Next>
  : never;
