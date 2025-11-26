// Day 3 - Exercise 5

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ["pangolin", "aardvark", "echidna", "binturong"];
const stringsAndNumbers: (number | string)[] = [1, "one", 2, "two", 3, "three"];
const allMyArrays: (number | string)[][] = [
  sequence,
  animals,
  stringsAndNumbers,
];

console.log(allMyArrays);
