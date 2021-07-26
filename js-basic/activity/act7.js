// EXERCISES

// 1) Create a class Vehicle that

// A) have as prop an array of passengers -
// B) have as prop an object named rules that contains the props: maxSpeed and maxPassengers -
// C) create a constructor to fulfill these props you created (passengers and rules) -
// D) create a function getMaxSpeed() that returns the maxSpeed of the vehicle (use the same maxSpeed you fulfilled on the constructor)
// E) create a function getMaxPassengers() that returns the maxPassengers of the vehicle (again, use the same maxPassengers you fulfilled on the constructor)

class Vehicle {
  passengers = [""];
  rules = [""];

  maxSpeed;
  maxPassengers;

  constructor(passengers, rules) {
    this.passengers = passengers;
    this.rules = rules;
  }

  getMaxSpeed() {
    return this.maxSpeed, "Km/h";
  }

  getMaxPassengers() {
    return this.maxPassengers;
  }
}

const veich = new Vehicle(["Ian", "Joao", "Pedro", "Ana"], ["8", "40"]);
console.log(veich.passengers);
console.log(veich.rules);

// 2) Create a class Bus that

// A) have fuelType as prop
// B) extends Vehicle
// C) fulfill the props from the inherited class and the props of the Bus class
// D) overwrite the functions from the parent class and do the same as you did on exercises 1 D and E, but now return the speed in MPH, not in KM/H
// E) create a function called getFuelType() that returns the fuelType you fulfilled on the constructor
// F) create a function addPassenger(passenger) that adds one new passanger to the array of passangers (remember you extended this array fro the vehicle class)
// G) create a function removePassenger(passenger) that removes one passenger from the Bus by name!

// Tip: the passengers array should look something like => ["Ian", "Joao", "Pedro", "Ana"]

class Bus extends Vehicle {
  fueltype;

  constructor(passengers, rules, fueltype) {
    super(passengers, rules);
    this.fueltype = fueltype;
  }

  getFuelType() {
    return this.fueltype;
  }

  addPassenger(newPassanger) {
    newPassanger.forEach((passengers) => {
      this.passengers.push(passengers);
    });
    return this.passengers;
  }
  removePassenger(passenger) {
    const index = this.passengers.indexOf(passenger);
    if (index !== -1) {
      this.passengers.splice(index, 1);
    }
    return this.passengers;
  }
}
const bus = new Bus(
  ["Ian", "Joao", "Pedro", "Ana"],
  {
    maxSpeed: "80",
    masPassengers: "40",
  },
  "Diesel"
);

console.log("A new passenger in the bus >", bus.addPassenger(["Jonatas"]));
console.log("A passenger remove in of the bus >", bus.removePassenger(["Ian"]));
