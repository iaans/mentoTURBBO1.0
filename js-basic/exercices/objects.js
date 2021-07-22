// class Car {
//   doors = 4;
//   engine = 20;
//   brake = 7;
//   aceleration = 10;
//   torque = 9;
//   tires = 4;
//   maxSpeed = 180;

//   accelerate() {
//     console.log("Acclerated! VRUM!!!");
//   }
//   getMaxSpeed() {
//     return "180km/h";
//   }
// }

// const car = new Car();

// const maxSpeed = car.getMaxSpeed();
// console.log("🚀 ~ file: objects.js ~ line 21 ~ maxSpeed", maxSpeed);
// car.accelerate();

// class Apartament {
//   doors = 40;
//   stairs = 4;
//   elevators = 4;
//   garages = 3;
//   apartmentRooms = {
//     room: 2,
//     kitchen: 1,
//     bathroom: 1,
//     varanda: 1,
//     livingroom: 1,
//   };

//   getStatus(status) {
//     let ap; //apartamento
//     switch (status) {
//       case "Busy!":
//         ap = "Ocupado!";
//         break;
//       case "Reserved":
//         ap = "Reservado";
//         break;
//       default:
//         return "Free!";
//     }
//     return ap;
//   }
// }
// const apartament = new Apartament();

// console.log(apartament.getStatus("Reserved"));

const home = {
  livingroom: "Livingroom",
  room: "Room",
  bathroom: "Bathroom",
};

// destructuring

// const bathroom = home.bathroom;
// const livingroom = home.bathroom;
const { bathroom, livingroom } = home;

console.log(bathroom, livingroom);

const car = {
  marca1: null,
  marca2: null,
  marca3: null,
  marca4: null,
  marca5: null,
  marca6: null,
  marca7: null,
  marca8: null,
};

const { marca3 } = car;
//console.log("🚀 ~ file: obj.js ~ line 109 ~ marca3", marca3);

const car2 = {
  ...car,
  marca9: null,
  marca10: null,
};

//console.log("🚀 ~ file: obj.js ~ line 112 ~ car2", car2);

const fruits = {
  banana: {
    price: 6,
    amount: 12,
  },
  apple: {
    price: 8.2,
    amount: 6,
  },
};

const moreFruits = {
  ...fruits, // ... (SPREAD OPERATOR) means GIVE ME A COPY OF ALL YOUR PROPS!
  mango: {
    price: 10,
    amount: 2,
  },
};

console.log(moreFruits, fruits);

// when it's an object you can add more items, even if its a const
fruits.pineapple = {
  price: 4.5,
  amount: 1,
};

//console.log("🚀 ~ file: obj.js ~ line 141 ~ fruits", fruits);

const spreaded = { ...moreFruits, ...car };
console.log("Spreaded Fruits => ", spreaded);

// console.log("Spreaded Fruits => ", { ...moreFruits, ...car });

function printFruit({ name, price, amount }) {
  console.log("Your fruit => ", name, price, amount);
}

printFruit({ price: 12.9, amount: 10, name: "Pineapple" });
printFruit({ ...fruits.banana, name: "Banana" });
