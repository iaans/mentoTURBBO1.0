// class Car {
//   doors = 4;
//   engine = 20;
//   brake = 7;
//   aceleration = 10;
//   torque = 9;
//   tires = 4;
//   maxSpeed = 180;

//   accelerate() {
//     console.log("Accelerated! VRUM!!!");
//   }
//   getMaxSpeed() {
//     return "180km/h";
//   }
// }

// const car = new Car();

// const maxSpeed = car.getMaxSpeed();
// console.log("🚀 ~ file: objects.js ~ line 21 ~ maxSpeed", maxSpeed);
// car.accelerate();

class Apartament {
  doors = 40;
  stairs = 4;
  elevators = 4;
  garages = 3;
  apartmentRooms = {
    room: 2,
    kitchen: 1,
    bathroom: 1,
    varanda: 1,
    livingroom: 1,
  };

  getStatus(status) {
    let ap; //apartamento
    switch (status) {
      case "Busy!":
        ap = "Ocupado!";
        break;
      case "Reserved":
        ap = "Reservado";
        break;
      default:
        return "Free!";
    }
    return ap;
  }
}
const apartament = new Apartament();

console.log(apartament.getStatus("Reserved"));
