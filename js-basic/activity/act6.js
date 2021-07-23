// 1) Create a function that receives an array of movie names as parameter and loop through each item,
//    printing them in the screen with a console log
function getMovie(movieNames) {
  // movieNames.forEach((movie) => {
  //   console.log(movie);
  // });

  movieNames.map((movie) => {
    console.log(movie);
  });
}

getMovie([
  "A volta dos que não foram",
  "Sei lá parte 2,",
  "Sem criatividade parte 4",
]);

// 2) Create a class with Animal -

// A) it must have specie and age props -
// B) it must have a constructor to fulfill these props -
// C) create a function eat() that prints on the console "eating" -
// D) create a function sleep() that prints on the console "Zzz" -
// E) create a function scream() that prints on the console "hu hu hu" -
/*
class Animal {
  specie;
  age;

  constructor(specie, age) {
    this.age = age;
    this.specie = specie;
  }

  eat() {
    return "Eating.. Nham nham";
  }

  sleep() {
    return "Zzz.. sleeping";
  }

  scream() {
    return "hu hu hu";
  }
}

const ani = new Animal("Bird", "5");
console.log("Specie >", ani.specie);
console.log("Age >", ani.age);
console.log(ani.sleep());
console.log(ani.eat());
console.log(ani.scream());

// 3) Create a class Tiger that extends Animal

// A) on the constructor, fulfill the props from the parent class (specie and age)
// B) override the method scream() and print "woooooar" for the tiger scream

class Tiger extends Animal {
  animal = [];

  //Constructor
  constructor(age, specie) {
    super(age, specie);
  }

  updateAnimal(newAnimals) {
    newAnimals.foreach((animal) => {
      this.animal.push(animal);
    });
    return this.animal;
  }

  //overwrite
  scream() {
    return "woarr..";
  }
}

const tig = new Tiger("Feline", "10");
console.log(`Specie > ${tig.specie}`);
console.log(`Age > ${tig.age}`);
console.log(`Scream > ${tig.scream()}`);

// 4) Create a new instance of Animal and Tiger and play with everything that you created, explore!

class Panthera extends Tiger {
  constructor(specie, age) {
    super(specie, age);
  }
  updateAnimal(newAnimals) {
    newAnimals.foreach((animal) => {
      this.animal.push(animal);
    });
    return this.animal;
  }
  scream() {
    return "miaauwoarrr";
  }
}
const panth = new Panthera("Feline", "6");
console.log(`Specie >`, panth.specie);
console.log(`Age >`, panth.age);
console.log("Scream >", panth.scream());
*/
