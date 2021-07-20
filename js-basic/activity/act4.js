// EXERCICES LOOP

// 1) Implement a for loop that increases 2 numbers in each loop and print the numbers on the screen
console.log("1) \b");
for (let cont = 1; cont < 20; cont = cont + 2) {
  console.log("numero = >", cont);
}

// 2) Get an array of numbers, loop through them in a foreach loop, and in the end show the sum of all the numbers
const numbers = [10, 20, 30, 22, 42, 99];

// Solution with reduce
console.log(
  "2) \b",
  numbers.reduce((a, b) => a + b)
);

let counter = 0;

//Solution with forEach

numbers.forEach((number) => {
  counter = counter + number;
});
console.log("2) ", counter);

// 3) Implement a do while loop to print the values of the const counter = 0; on the screen, until it reaches 10, remember to increment the counter on each loop
console.log("3)\b");
// const counter = 10;

// do {
//   console.log("Counter =>", counter);
//   counter--;
// } while (counter > 0);

//console.log("Ordem crescente"); //
// let counter = 0;

// do {
//   console.log("Counter =>", counter);
//   counter++;
// } while (counter < 10);

// // 4) Do the same as exercice 3 but with a while loop
// console.log("4)\b");
// let counter1 = 1;
// while (counter1 <= 10) {
//   console.log("Counter => ", counter1);
//   counter1++;
// }
