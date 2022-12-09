// // creating object and updating the value of object
// const person1 = {
//   name: ["Sabari", "Nathan"],
//   age: 21,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! this is  ${this.name[0]}.`);
//   },
// };
// person1.name[0] = "Mr Aspirian "; //updating the name od object
// person1.bio();
// person1.introduceSelf();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //constructor in object

// function Office(time, project, pay) {
//   this.timee = time;
//   this.project = project;
//   this.pay = pay;
//   this.myoffice = function () {
//     return 5 * 4;
//   };
// }
// let officee = new Office("9.30 hrs", "Big project", "more and more");
// console.log("1st property >>> : ");
// console.log(officee.timee);
// console.log(officee.project);
// console.log(officee.pay);
// console.log(officee.myoffice());

// let newoffice = new Office("10 hrs", "Bank project", "10 lpa");
// console.log("2nd property >>> : ");
// console.log(newoffice.timee);
// console.log(newoffice.project);
// console.log(newoffice.pay);
// console.log(newoffice.myoffice());

// /////////////////////////////////////////////////////////////////////////////////////////////////

// //proto-types

// function display(n, a) {
//   this.name = n;
//   this.age = a;
// }
// display.prototype.year = "final year : This is the data added";//adding value

// let s1 = new display("Sabari", 21);
// let s2 = new display("Aspire", 30);

// console.log(s1.name);
// console.log(s1.age);
// console.log(s1.year);//data that added


             
//JavaScript adds a prototype property to that function. A prototype is an object, where it can add new variables and methods to the existing object. i.e., Prototype is a base class for all the objects, and it helps us to achieve the inheritance.
// console.log(Object.hasOwn(s1, "age"));.. for non static use  

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Object.assign()--method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

//Object.assign()
const target = { a: 1, b: 2 ,d : 11 };
const source = { b: 4, c: 5 , d: 10};

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);
console.log( target);

console.log(returnedTarget === target);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Object.apply ()

const numbers = [52, 36, 23, 30, 100];

const max = Math.max.apply(null, numbers);

console.log(max);
const min = Math.random.apply();

console.log(min);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//bind to  object to function 
//erference is using 'this'
//bind()

let c1={
  x: 5,
  y: 10
};

let c2={
  x: 75,
  y: 341
};

let c3={
  x: 725,
  y: 31
};



function printing(){
  console.log(this.x +" "+  this.y);
}
let c1_function= printing.bind(c2);
c1_function();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//call()

function printName(first,last){
  console.log("call()");

  console.log(`${first} ${last}`);
  console.log(this);
}

printName.call({
  model: "Apple",
  color: "Blue",

},"Brand" , "Product");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//entries

const object1 = {
  a: 'somestring',
  b: 42
};

for (const [key,val] of Object.entries(object1)) {
  console.log(`${key}: ${val}`);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//keys
const object = {
  a: "jhujgv",
  b: 8742,
  c: "kjh"
};

console.log(Object.keys(object));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//value
const value_result = {
  a: "kjgkhg",
  b: 42,
  c: "jgyuif",
  d:"jhgyg"
};

console.log(Object.values(value_result));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//toString


