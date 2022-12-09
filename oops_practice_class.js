//class-OOPS-1
class Action {
  sleep() {
    console.log("It is the class sleeping");
  }
}

const spot = new Action();

spot.sleep();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//class-oops-2
class Person {
  constructor(name) {
    this.name = name;
  }
 //method
  greet() {
    console.log(`Hello ${this.name}`);
  }
}
let person1 = new Person("Sabarinathan");

console.log(person1.name); 
person1.greet(); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//