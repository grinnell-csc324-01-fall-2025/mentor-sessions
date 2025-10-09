/**
 * Fizz Buzz implementation.
 * @param upperBound Length of the returned array.
 * @returns An array from 0 (inclusive) to upperBound (exclusive), but replacing
 * any integer divisible by three with the word "fizz", and any number divisible
 * by five with the word "buzz", and any number divisible by both three and five
 * with the word "fizzbuzz". (Copied from Wikipedia)
 */
export function fizzBuzz(upperBound: number): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < upperBound; i++) {
    // This is incorrect on purpose so I can demonstrate CI and TDD via GitHub
    // Actions for a class.
    if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

// function main() {
//   for (const v of fizzBuzz(21)) {
//     console.log(v);
//   }
// }

// main();