/*
1) Create a class Phone that:
A) Have a static property with the year of the phone as value
B) Have a static method that returns the phone universal ID
C) Use the static property and the static method you created before (obs: use them out of the class!)
D) The class has to have the props id and name
E) The class must have a constructor to fulfill the props id and name
F) Create a method that receives phoneNumber as parameter and prints "calling"
 ... (concatenate the "calling" with the phoneNumber parameter, the result 
      must be something like: "Calling 11 98238723")
*/

// 1)
class Phone {
  static year = 2010;
  id;
  name;
  phoneNumber;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static getPhoneUniversalId() {
    return "iashfh123";
  }

  // static getPhoneName() {
  //   return this.name;
  // }

  // static getPhoneNumber() {
  //   return this.phoneNumber;
  // }

  call(phoneNumber) {
    return `Calling... \b Phone: ${phoneNumber}`;
  }
}
console.log(Phone.year);
console.log(Phone.getPhoneUniversalId());

const phone = new Phone(0204, "V3");

console.log(phone.call("11 98238723"));

/*
2) Create a class Smartphone that extends Phone and

A) Create the prop contacts = [];
B) On the constructor of the Smartphone class, fulfill the value of id and name props, from the Phone class (remember, we cannot use this on the constructor to access upper classes props)
C) Create a method to fulfill the contacts and return its updated value
*/

class Smartphone extends Phone {
  contacts = ["1273712"];

  constructor(id, name) {
    super(id, name);
  }

  updateContacts(newContacts) {
    newContacts.forEach((contact) => {
      //console.log(contact);
      this.contacts.push(contact);
    });

    return this.contacts;
  }
}

const smartphone = new Smartphone(47, "Nokia");
console.log(smartphone.updateContacts(["712321", "784213", "5784132"]));
