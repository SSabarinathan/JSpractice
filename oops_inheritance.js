//inheritance

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Good Morninng ${this.name}`);
  }
}

class Student extends Person {
  
}
let student_name = new Student("Sabari Nathan");
console.log("Inheriting parent to child : ",student_name.name);

///////////////////////////////////////////////////////////////////////////////////////

//inheritance using super keyword

class Persons {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(`Good Morninng ${this.name}`);
    }
  }
  
  class Students extends Persons {
    constructor(name, age) {
      super(name);
      this.age = age;
    }
  }
  
  let student_1 = new Students("Sabari Nathan", 21);
  student_1.greet();
  console.log("age : ", student_1.age, "  name : ", student_1.name);

//////////////////////////////////////////////////////////////////////////////////////
//normal constructor creation

function person(age) {
  this.age = age;
}
let person_age = new person(21);
console.log("normal constructor : ",person_age.age);

////////////////////////////////////////////////////////////////////////////////////////

//using super key word

// // parent class

// class Persons {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Students extends Persons {

//     constructor(name) {

//         console.log("Creating child class");

//         // call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }

// let student1 = new Students("Aspire Systems");
// student1.greet();
