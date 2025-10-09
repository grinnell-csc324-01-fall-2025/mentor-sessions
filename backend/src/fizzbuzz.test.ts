import { expect, test, describe } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("fizzBuzz tests", () => {
  const MAX = 100;
  const fb = fizzBuzz(MAX);

  test("outputs the correct number of elements", () => {
    expect(fb.length).toEqual(MAX);
  })

  test("replaces any number divisible by 3 and 5 with fizzbuzz", () => {
    const result: boolean = fb
      .filter((_, i) => i % 3 === 0 && i % 5 === 0)
      .map(v => v == "fizzbuzz")
      .reduce((prev, cur) => prev && cur, true);
    expect(result).toEqual(true);
  });

  test("replaces any number ONLY divisible by 3 and not 5 with fizz", () => {
      const result: boolean = fb
        .filter((_, i) => i % 3 === 0 && i % 5 !== 0)
        .map(v => v == "fizz")
        .reduce((prev, cur) => prev && cur, true);
      expect(result).toEqual(true);
  });

  test("replaces any number ONLY divisible by 5 and not 3 with buzz", () => {
      const result: boolean = fb
        .filter((_, i) => i % 5 === 0 && i % 3 !== 0)
        .map(v => v == "buzz")
        .reduce((prev, cur) => prev && cur, true);
      expect(result).toEqual(true);
  });

  test("keeps any number divisible by NEITHER 3 nor 5", () => {
      const result: boolean = fb
        .map((v, i) => (i % 3 !== 0 && i % 5 !== 0) ? v === i : true)
        .reduce((prev, cur) => prev && cur, true);
      expect(result).toEqual(true);
  });

});