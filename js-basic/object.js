class Animal {
  pata = 4;
  rabo = 1;
  cabeca = {
    cerebro: "brain",
    olhos: "eyes",
    orelhas: "ears",
    nariz: "nose",
    dentes: [],
  };

  drinkWater() {
    console.log("Drink Water");
  }
}

const ani = new Animal();
console.log("🚀 ~ file: obj.js ~ line 9 ~ ani", ani);
ani.drinkWater();

// ani é um objeto

const animal = {
  pata: 4,
  rabo: 1,
  cabeca: {
    cerebro: "brain",
    olhos: "eyes",
    orelhas: "ears",
    nariz: "nose",
    dentes: [],
  },
  drinkWater: () => {
    console.log("Drink Water on an arrow function!");
  },
};
console.log("🚀 ~ file: obj.js ~ line 19 ~ animal", animal);
animal.drinkWater();

class Dog extends Animal {
  bark() {
    console.log("Au au!");
  }
}

const luna = new Dog();
console.log("🚀 ~ file: obj.js ~ line 45 ~ luna", luna);
luna.bark();

class GermanSheperd extends Dog {
  // sobrescrevi a funcao bark da classe Dog!
  bark() {
    console.log("Ruf ruf!");
  }
}

const germanSheperd = new GermanSheperd();
console.log("🚀 ~ file: obj.js ~ line 53 ~ germanSheperd", germanSheperd);
germanSheperd.bark();

// carro

const car = {
  tires: [],
  doors: [],
};
console.log("🚀 ~ file: obj.js ~ line 68 ~ car", car);

car.capo = "Capo";
console.log("🚀 ~ file: obj.js ~ line 68 ~ car", car);

// Acessando propriedades do objeto

const travel = {
  bag: "nike",
  water: "agua mineral",
  money: "dólar",
  clothes: [],
};

console.log(travel.water);
console.log(travel["money"]);

travel.clothes.push("tenis", "roupa", "casaco", {
  notebook: "acer",
  headset: "fone",
});
console.log("🚀 ~ file: object.js ~ line 85 ~ travel.clothes", travel.clothes);
console.log(travel.clothes.length);

console.log("Getting second element of the array: ", travel.clothes[1]);
console.log(
  "Getting second element of the array,  a different way: ",
  travel["clothes"][1]
);

const meses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const splited = meses.split(",", 6); //
console.log("Splitando os meses: ", splited);
