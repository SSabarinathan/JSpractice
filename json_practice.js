// //JSON data

// let companies = `[
//     {
//         "company_name": "Aspire Systems",
//         "number_of_employees": 999,
//         "ceo": "Gowri Shankar",
//         "ratings": 9.9,
//         "location": "Chennai"
    
//     },
//     {
//         "company_name": " TCS",
//         "number_of_employees": 11999,
//         "ceo": " Tata ",
//         "ratings": 9,
//         "location": null

//     },
//     {
//        "company_name": " HCL ",
//         "number_of_employees": 1199,
//         "ceo": " MR . Sabari Nathan ",
//         "ratings": 7,
//         "location": "Mumbai"
//     }
// ]`;
// console.log(companies);
// console.log(JSON.parse(companies)); // s to o
// console.log(JSON.parse(companies)[2].ceo); //parse in JSON

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //stringify in JSON i objects

// let names = {
//   name1: "Sabari",
//   name2: "Nathan",
//   name3: "Siva",
//   name4: "Shoba",
//   name5: "Preethi",
//   name6: "leela & George",
//   name7: undefined, //this value is omitted
// };
// let result = JSON.stringify(names);
// console.log(result);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //in arrays

// let array_1 = ["Aspire", 09, new Date(), undefined]; //undefined- all comes under NULL in the case
// console.log(JSON.stringify(array_1));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// //param difference

// let result_2 = JSON.stringify(
//   names,
//   (key, values) => {
//     if (key == "name2") {
//       return undefined;
//     }
//     return values;
//   },
//   10
// );
// console.log(result_2);

// const test = {
//   name: {
//     firstName: "Sabarinathan",
//     lastName: "Siva",
//   },
// };

// console.log(test.name.lastName);
// console.log(test["name"]["lastName"]);

// const key = "name";

// console.log(test[key]["lastName"]);

////////////////////////////////////////////////////////////////////////////////////////////////

const test1 = {
  name: {
    firstName: "Sabarinathan",
    lastName: "Siva",
  },
  subjects: [
    {
      staff: "Bob",
      name: "Maths",
      info: {
        credit: 4,
        code: "XX11",
      },
    },
    {
      staff: "Bobby",
      name: "Tamil",
      info: {
        credit: 3,
        code: "XX21",
      },
    },
    {
      staff: "Jack",
      name: "English",
      info: {
        credit: 2,
        code: "XX34",
      },
    },
  ],
};


// //1

// console.log(test1.subjects[2].info.code);
// //2


// let answer1 = ((test1.subjects[0].staff + " "+test1.subjects[1].staff +" "+ test1.subjects[2].staff));
// console.log(answer1);

// const answer2=test1.subjects.map((subjects)=>subjects.staff);
// console.log(answer2);

// //3


let first_result=(test1.subjects[0].name+" " +test1.subjects[0].info.code);
console.log((first_result));


let second_result=(test1.subjects[1].name+" " +test1.subjects[1].info.code);
console.log(second_result);


let third_result=(test1.subjects[2].name+" " +test1.subjects[2].info.code);
console.log((third_result));

let a=first_result+ second_result+third_result;
console.log(a);



const output = ws.reduce((accumulator , value, index) => {
  return {accumulator,[index] : value};
},{});

console.log(output);


// print last subject's code
//Staff names in array
//{"sub name":"code"}