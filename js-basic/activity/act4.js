// 2) Given this array of numbers:
const numbers = [3, 7, 2, 8, 1];

// A) Sort them in ascending order [1, 2, 3, 7, 8]
// B) Reverse the numbers [1, 8, 2, 7, 3]
// C) Push new these numbers to the array => 10, 99, 55, 77
// D) Get the last element of the array
// E) Get the array updated
// F) Get odd numbers and even numbers.

// SHOW ALL THE RESULTS ON THE SCREEN (CONSOLE.LOG)
console.log(`Array of numbers: ${numbers}`);

//A
console.log("Numbers ascending order: ↓ \n", numbers.sort());
//B
console.log("Numbers reverse: ↓ \n", numbers.reverse());
//C
numbers.push(10, 99, 55, 77);
//console.log(`Add numbers: ↓ \n `, numbers);
console.log("Add numbers: ↓ \n", numbers);

//D
const lastElement = numbers[numbers.length - 1];
console.log("Last element of the array is: ↓ \n", lastElement);

//E
console.log("Array update: ↓ \n", numbers); //?

//F
let odds = numbers.filter((num) => num % 2);
console.log("Odds numbers: ↓ \n", odds);

let even = numbers.filter((num) => !(num % 2));
console.log("Even numbers: ↓ \n", even);
