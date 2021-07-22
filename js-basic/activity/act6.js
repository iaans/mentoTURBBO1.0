// 1) Create a function that receives an array of movie names as parameter and loop through each item,
//    printing them in the screen with a console log
const movie = [];

// 2) Create a class with Animal -

// A) it must have specie and age props -
// B) it must have a constructor to fulfill these props -
// C) create a function eat() that prints on the console "eating" -
// D) create a function sleep() that prints on the console "Zzz" -
// E) create a function scream() that prints on the console "hu hu hu" -

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
// console.log(Animal.age); <--
// console.log(Animal.specie); <--

const ani = new Animal("Ave", "5");
console.log(ani);
console.log(ani.sleep);

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
}

const animal = new Animal("Feline", "5");
//console.log(animal.updateAnimal(["Dog"])); // ??????

// 4) Create a new instance of Animal and Tiger and play with everything that you created, explore!
