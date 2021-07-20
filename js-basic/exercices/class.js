class Department {
  static fiscalYear = 2021; // static props doesn't require instantiating (new) to be used
  id;
  name;
  employees = [];

  // it's the first thing to be executed when instanciating a class
  // you pass the necessary infomartions that the class need when creating
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log(
      `ID: ${this.id}, NAME: ${this.name}, EMPLOYEES: ${this.employees}`
    );
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }
}

console.log("Fiscal Year => ", Department.fiscalYear);

const department = new Department(1, "Depat. 1");
department.describe();

sqrt = Math.sqrt(4);
console.log("SQRT => ", sqrt);

class ITDepartment extends Department {
  admins = [];

  constructor(id, name, admins) {
    // to use the props from the parent class, you MUST use the super()
    // it does the same as the 2 lines commented bellow
    // this.id = id;
    // this.name = name;
    super(id, name);

    this.admins = admins;
  }

  // overrides the describe() method from the parent class
  describe() {
    // on the functions, you can access the parent class props using this, no problems
    console.log("IT Department - ID: " + this.id);
    console.log("IT Department - Name: " + this.name);
  }
}

const itDepartment = new ITDepartment(2, "IT Department", ["Ian", "Jonatas"]);
itDepartment.describe();

class PI {
  static value = 3.14159265359;

  static getPi() {
    return this.value;
  }
}

// You don't need to stanciate the class to use static methods or props
console.log(PI.getPi());

// class Dog {
// color = 'white';
// size = 'medium';

// describe() {
// console.log(
// 'O cachorro tem as seguintes caracteristicas =>',
// this.color,
// this.size
// );
// }

// setColor(color) {
// this.color = color;
// }

// setSize(size) {
// this.size = size;
// }
// }

// DON'T DO THIS

// const dog = new Dog();
// dog.setColor('Yellow');
// dog.setSize('Large');
// dog.describe();

// DO THIS

// const sql = new SQLConnection('mydb://124.12.4.23', 'user', 'password');
