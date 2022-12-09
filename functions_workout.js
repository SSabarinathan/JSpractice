//1.Normal function decleration

function operation(a_number, b_number, c_number) {
  let result = a_number + b_number - c_number;
  console.log("Function decleration : ", result);
  result = result * result;
  console.log(result);
  console.log("\n");
}
operation(12, 14, 2);

//////////////////////////////////////////////////////////////////////////////////////////////////

//2.Arrow function
let arrow_function = (a, b) => {
  if (a > b) {
    console.log("Arrow function : ");
    console.log("Wow.. 'a ' is greater!!");
    console.log("\n");
  } else {
    console.log("Wow..'b' is greater!!");
  }
};
arrow_function(10, 2);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//3.Function Expression
let expression = function add(a, b) {
  let result = a * b;
  console.log("Function expression : ", result);
  console.log("\n");
};

expression(10, 10);

/////////////////////////////////////////////////////////////////

//4.IIFE

let num1 = 12314;
let num2 = 23413;

(function add(a, b) {
  console.log("Immediately Invoked Function Expression : ");
  let result = a + b;
  console.log(result);
})(num1, num2);

////also we pass the param

((a, b) => {
  let result = a + b;
  console.log(result);
})(100, 100); //calling part.

console.log("\n");

/////////////////////////////////////////////////////////////////////////////////////////////////

//5.Anonymous Function

let anonymous_function = (name) => {
  console.log(" 'Anonymous Function ' : Having no function name in this. "+name);
  console.log("\n");
};
anonymous_function("sabari");

////////////////////////////////////////////////////////////////////////////////////////

// 6.callback function

function process(name, work) {
  console.log("Hello " + name + " how are you");
  work(); 
}

function work_place() {
  console.log("Are you working in India??");
}

process("Sabari", work_place);
console.log("\n");

////////////////////////////////////////////////////////////////////////





















// //It is a default parameter
// function nameIs(name="sabari"){
//     console.log("My name is "+name);
// }
// nameIs();

// ///////////////

// function greeting(name) {
//     console.log(name);
//     return `Welcome ${name}`;
//   }

//   const greet = greeting("Sabari");

//   const greeting1 = (name) => {
//     console.log(name);
//     return `Welcome ${name}`;
//   };

//   const greeting2 = (name) => `Welcome ${name}`;

//   const greet1 = greeting1("Sabari");
//   const greet2 = greeting2("Sabari");
//   console.log(greet, greet1, greet2);

//   for (let a of arr1) {
//     console.log(a);
//   }

//   arr1.forEach((elem, index) => {
//     console.log(elem, index);
//   });

//   const arr2 = arr1.map((elem, index) => {
//     return elem + index;
//   });

//   ///////////////////////////////////////////////////////////
  const arr1 = [1, 2, 3];

  const sum = arr1.reduce((acc, elem, index) => {
    console.log("acc : ", acc, "elem : ", elem, "index : ", index);
    acc = acc + elem;
    return acc;
  }, 0);

  console.log(arr1);

////


//reduce method

const array = ["a","b","c"];

const output = array.reduce((accumulator , value, index) => {
  return {...accumulator,[index] : value};
},{});

console.log(output);

// //using this key word
//  let a={
//   name:"using this key word",
//   working(){
//     console.log(this);
//   }
//  }
//  function create(){
//   console.log(this);
//  }
// create();

//  a.working();
////

// The function we passed to the Array.reduce method gets called with each element in the array.

// We set an empty object as the initial value for the accumulator variable.

// On each iteration, we assign a new key-value pair to the object and return the value for the accumulator variable
