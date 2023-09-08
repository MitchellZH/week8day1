// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = "Thieves";
// A: string

let c = [true, false, false];
// A: an array of booleans

let d = { age: number };
// A: error

let e = [3];
// A: an array of numbers

let f;
// A: any

let g = [];
// A: an array of any type

// 2. What are the compilation errors in each of the following code snippets?
let song: {
  title: string;
  releaseYear: string:
} = {
  title: "Lose Yourself",
};
/* 
  A: Property 'releaseYear' is missing in type '{ title: string; }',
  but required in type '{ title: string; releaseYear: number; }'.
  Because there's a releaseYear property in the song object,
  there also needs to be a releaseYear argument when reassigning values.
*/

let prices = [100, 200, 300];
prices[0] = "$100";
/* 
  A: Type 'string' is not assignable to type 'number'. 
  The TypeScript compiler infers prices to be a number array 
  because when it was declared it was assigned an array of only numbers.
*/

function myFunc(a: number, b: number): number {}
// A: A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
// the function needs to return a number


// Codewars
// 1. This code does not execute properly. Try to figure out why.
// def multiply(a, b):
//  a * b
function multiply(a:number, b:number):number{
  return a * b
}

// 2.
// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

let sum_nul = (n:number, m:number) => {
  let theSum:number = 0;
  // googled javascript equivalent to python range function
  const range = (start:number, stop:number, step:number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );
  if (n <= 0 || m <= 0){
    return 'INVALID';
  }
  if (n > m){
    return 0;
  }
  for (let i in range(0, m, 1)) {
    console.log(parseInt(i));
    if (parseInt(i) % n === 0) {
      theSum += parseInt(i);
    }
  }
  return theSum;
}

console.log(sum_nul(4, -7));