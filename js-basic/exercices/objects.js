class Car {
  doors = 4;
  engine = 20;
  brake = 7;
  aceleration = 10;
  torque = 9;
  tires = 4;
  maxSpeed = 180;

  accelerate() {
    console.log("Accelerated! VRUM!!!");
  }
  getMaxSpeed(maxSpeed) {
    return "180km/h";
  }
}

const car = new Car();

const maxSpeed = car.getMaxSpeed();
console.log("🚀 ~ file: objects.js ~ line 21 ~ maxSpeed", maxSpeed);
car.accelerate();
