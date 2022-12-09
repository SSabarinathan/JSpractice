//if statement
// const number = prompt("Enter a number: ");

// if (number > 0) {
//   console.log("The number is positive");
// }

// console.log("This is using only if ststement");





//if else statement

// const number_1 = prompt("Enter a  number:");
// if (number_1 > 0) {
//   console.log("The number is positive");
// }
// else {
//   console.log("The number is either a negative number or 0");
// }

// console.log("The if...else statement is easy");





// if else-if
// check if the number if positive, negative or zero
// const number = prompt("Enter a number: ");


// if (number > 0) {
//     console.log("The number is positive");
// }
// else if (number == 0) {
//   console.log("The number is 0");
// }
// else {
//     console.log("The number is negative");
// }

// console.log("The if...else if...else statement is easy");





//switch statement
// let a = 1;

// switch (a) {
//     case "1":
//         a = 1;
//         break;
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;

//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);






//looping statements
//for of
// const iterable = [10, 20, 30, 40, 50, 60, 70];

// for (const value of iterable) {
//   console.log(value);
// }






// for in
const object = { 
     a: 1,
     b: "sd", 
     c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//for checking particular property in the particular object

function Circle (radius){
    this.radius= radius;
    this.draw= function (){
        console.log("draw");
    }
}

const circle= new Circle(10);
if ("radius" in circle){
    console.log("It is in ");
}
//for acess all the keys
const k=Object.keys(circle);
console.log(k);

//while statement
// let n = 0;

// while (n < 50) {
//   n++;
// }

// console.log(n);








//do while
// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

