/*
  612 - KebabCase ------- by Johnson Chu (@johnsoncodehk) #medium #template-literal
  ### Question
  Replace the `camelCase` or `PascalCase` string with `kebab-case`.
  `FooBarBaz` -> `foo-bar-baz`
  For example

  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";

  type DoNothing = KebabCase<"do-nothing">;
  const doNothing: DoNothing = "do-nothing";

  > View on GitHub: https://tsch.js.org/612
*/
// Solution
type KebabCase<S> = S extends `${infer Fisrt}${infer Next}`
  ? Next extends Uncapitalize<Next>
    ? `${Lowercase<Fisrt>}${KebabCase<Next>}`
    : `${Lowercase<Fisrt>}-${KebabCase<Next>}`
  : S;
