class Math {
  sum(value1, value2) {
    return value1 + value2;
  }
  subtract(value1, value2) {
    return value1 - value2;
  }
  multiply(value1, value2) {
    return value1 * value2;
  }
  divide(value1, value2) {
    return value1 / value2;
  }
}

const math = new Math();

const sum = math.sum(1, 2);
const sub = math.subtract(14, 4);
const mult = math.multiply(14, 15);
const div = math.divide(7, 4);

console.log("Sum: " + sum);
console.log("Subtract: " + sub);
console.log("Multiply: " + mult);
console.log("Divide: " + div);
