// EXERCICES LOOP

// 1) Implement a for loop that increases 2 numbers in each loop and print the numbers on the screen
console.log("1)");
for (let cont = 0; cont < 10; cont++) {
  console.log("numero = >", cont * 2);
}

// 2) Get an array of numbers, loop through them in a foreach loop, and in the end show the sum of all the numbers
const numbers = [10, 20, 30, 22, 42, 99];
console.log(
  "2) \n",
  numbers.reduce((a, b) => a + b)
);

// 3) Implement a do while loop to print the values of the const counter = 0; on the screen, until it reaches 10, remember to increment the counter on each loop
console.log("3)");
let counter = 0;

do {
  console.log("Counter =>", counter);
  counter++;
} while (counter > 10);

// 4) Do the same as exercice 3 but with a while loop
console.log("4)");

let counter1 = 1;

while (counter1 <= 10) {
  console.log("Counter => ", counter1);
  counter1++;
}
