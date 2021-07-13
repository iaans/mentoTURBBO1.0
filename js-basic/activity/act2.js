// 2) Given this array of numbers:
const numbers = [3, 7, 2, 8, 1];

// A) Sort them in ascending order [1, 2, 3, 7, 8]
// B) Reverse the numbers [1, 8, 2, 7, 3]
// C) Push new these numbers to the array => 10, 99, 55, 77

// SHOW ALL THE RESULTS ON THE SCREEN (CONSOLE.LOG)

//A
console.log("Numbers ascending order: ", numbers.sort());

//B
console.log("Numbers reverse: ", numbers.reverse());

//C
numbers.push(10, 99, 55, 77);
console.log(numbers);
