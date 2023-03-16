/*
  3326 - BEM style string ------- by Songhn (@songhn233) #medium #template-literal #union #tuple
  ### Question

  The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.
  For example, the block component would be represented as `btn`, 
  element that depends upon the block would be represented as `btn__price`, 
  modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.
  Implement `BEM<B, E, M>` which generate string union from these three parameters. Where `B` is a string literal, 
  `E` and `M` are string arrays (can be empty).

  > View on GitHub: https://tsch.js.org/3326
*/
// Solution
type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = M extends []
  ? `${B}__${E[number]}`
  : E extends []
  ? `${B}--${M[number]}`
  : `${B}__${E[number]}--${M[number]}`;
