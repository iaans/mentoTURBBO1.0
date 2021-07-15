// OBJECTS EXERCICES

// 1) Given the following object

// const techs = {
//   javascript: "javascript",
//   java: "java",
//   typescript: "typescript",
//   python: "python",
// }w

// A) Destructure two of yout favourite techs and print them
// B) Create a new object with these techs, except the one you dislike most
// C) Create a new object with these techs and add two more that you wish to learn in the future
// D) Create a function that receives as parameter an object that contains these props => techName, creationDate. Inside the function, print them in the screen using ${ }

const techs = {
  javascript: "javascript",
  java: "java",
  typescript: "typescript",
  python: "python",
};

//A
const { javascript, python } = techs;

console.log("A) My favs techs: \n", javascript, python, "\n ---- ");

//B
const { java, typescript } = techs;
delete techs.java;

console.log("B) Objects update: \n", techs, "\n ---");

//C
const addTechs = {
  ...techs,
  learnTechs: {
    csharp: "csharp",
    angular: "angular",
  },
};
console.log("C) Add more two techs: \n", addTechs, "\n ---");

// D)
function printNameAndDate(techName = "React", creationDate = "15/04/1500") {
  console.log(`Tech name => ${techName} \nCreation date=> ${creationDate}`);
}
printNameAndDate();
