// EXERCICES LOOP

// 1) Implement a for loop that increases 2 numbers in each loop and print the numbers on the screen

for (let index = 0; index < 10; index++){
    console.log("numero = >",index*2);
}

// 2) Get an array of numbers, loop through them in a foreach loop, and in the end show the sum of all the numbers
// const numbers = [10, 20, 30, 22, 42, 99]
const numbers = [10, 20, 30, 22, 42, 99]

const total = numbers.reduce((, currentElement) => total + currentElement)

console.log("Total => \n" , total)

// 3) Implement a do while loop to print the values of the const counter = 0; on the screen, until it reaches 10, remember to increment the counter on each loop

// 4) Do the same as exercice 3 but with a while loop


