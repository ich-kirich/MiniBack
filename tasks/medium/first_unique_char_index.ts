/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > View on GitHub: https://tsch.js.org/9286
*/
// Solution
import type { Equal, Expect } from "@type-challenges/utils"; // библиотека из playground задач

type Include<
  T extends string,
  U extends string,
> = T extends `${infer First}${infer Next}`
  ? Equal<First, U> extends true
    ? true
    : Include<Next, U>
  : false;

type FirstUniqueCharIndex<
  T extends string,
  Compare extends string = "",
  Counter extends unknown[] = [],
> = T extends `${infer First}${infer Next}`
  ? Include<`${Compare}${Next}`, First> extends true
    ? FirstUniqueCharIndex<Next, `${Compare}${First}`, [...Counter, ""]>
    : Counter["length"]
  : -1;
