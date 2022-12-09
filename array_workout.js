//
// const splitting = "there is a cat";
// let split_result = splitting.split(" ");
// console.log(split_result);
// let cap_letter = split_result.map((word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// });
// console.log(cap_letter);

//at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
const numbers = [5, 12, 8, 130, 44];
let index = 2;
console.log(
  `Using an index of ${index} the item returned is ${numbers.at(index)}`
);
index = -2;
console.log(`Using an index of ${index} item returned is ${numbers.at(index)}`);

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
const copy = [0, 1, 2, 3, 4, 5];
console.log(copy.copyWithin(0, 3, 5)); //1st is postion , 2nd is start , 3rd is ending point
console.log(copy.copyWithin(0, 3));

// entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array = ["a", "b", "c"];
const arrayEntries = array.entries();
for (const element of arrayEntries) {
  console.log(element);
}

//fill()..fills the array with the wanted element with start index ..and end end position
const filling = [1, 2, 3, 4];
console.log("fill : ", filling.fill(0, 2, 4));

//filter..filters the array

const number = [1, 2, 3, -1, -2];
const result = number.filter(function (value) {
  return value >= 0;
});
console.log(result);

//find()...returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned
const finding_number = [5, 12, 8, 130, 44];
const found = finding_number.find((element) => element > 10);
console.log(found);

//find index  position
const n_index = ["sabari", "nathan", "web"];
const position = n_index.findIndex(nathan);
function nathan(value) {
  return value === "nathan";
}
console.log(position);
//by using arrow function
const a = [1, 3, 24];
const p = a.findIndex((t) => t === 24);
console.log(p);

//find last ...iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.
// const findlast_array = [5, 12, 50, 130, 44];

// const findlast_result = findlast_array.findLast((element) => element > 45);

// console.log(findlast_result);...not working

//flat() array..method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

const f_array = [1, 2, 4, 64, [2, 345, 56, [23, 34]]];
console.log(f_array);
const flat_array = f_array.flat();
console.log(flat_array);
const flat_array_number = f_array.flat(2); //view through the level 2 array
console.log(flat_array_number);

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("Aspire"));

//slice()......The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ["HCL", "Intellect", "IBM", "Aspire", "TATA"];
console.log(animals.slice(0));
console.log(animals.slice(2, 4));
console.log(animals.slice(-1));

//splice()......The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().
//removing or replacing existing element
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); //1st is index..2nd is where delete count....3rd id replaced elements..we can add 4th also
console.log(months);
const month = ["Jan", "April", "June", "Feb", "March", "Jul"];
month.splice(1, 4, "feb", "march");
console.log(month);

//foreach()...The forEach() method executes a provided function once for each array element.

const elements = ["sabari", "nathan", "Aspire", "Systems"];
elements.forEach(printing_names);
function printing_names(value, index, array) {
  //1st value...2nd index..3rd array
  console.log(value, index, array);
}

//includes()...The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const including_element = ["a", "d", "w", "as", "aq"];
const included = including_element.includes("a");
console.log("includes method : ", included);
const included_position = including_element.includes("as", 3);
console.log("includes check with their position : ", included_position);

//indexOf()...  The indexOf() method returns the first index at which a given element can be found in the array, or -1 is not present.
const index_pos = [1, 34, 234, 244, 12, 34, 23];
const index_position = index_pos.indexOf(244);
console.log("index position of the number is: ", index_position);

//Array.isArray....whether the given parameter is a array type or not..return true or false
const names = ["sada", "scas", "ADFSDVsd"];
const names1 = "Aspire";
console.log(Array.isArray(names));

//join().......The join() method creates and returns a new string by concatenating all of the elements in an array
//we can add any seperator as we want
const course = ["HTML", "CSS", "JS", "Angular", "React"];
const join_result = course.join(" - "); //default it is comma, we can specify it by putting things
console.log(join_result);

//keys()....shows the key for each index
const key_value = [13, 1234, 5, 245, 1234, 214, 3, 1234, 123];
const resut_key = key_value.keys();
for (let n of resut_key) {
  console.log("the key values are: ", n);
}

//lastindexOf ...starts from the last index of the array...whereas the indexOf start from the 1st position of the array
const last_index = ["JS", "HTML", "CSS", "JS", "Angular", "React"];
const result_last_index = last_index.lastIndexOf("JS"); //along with that having the index number where must it start
console.log(result_last_index);

//map()...it done operations to every element present on the array
const map_demo = [1, 4, 9, 16];
const map_result = map_demo.map((x) => x * 2);
console.log(map_result);

//Array.of()...it creates a new instances of array
const new_array = Array.of(10);
console.log(new_array);

//pop() method removes the last element from an array and returns that element
//push() method adds one or more elements to the end of an array and returns the new length of the array

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants);
console.log(plants.pop()); //pop
console.log(plants.push("pushed element")); //push
console.log(plants);

//reduce and reduceleft

//reverded the array..just resverse the array
const reverse_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result_array = reverse_array.reverse();
console.log("reversed array using reverse :", result_array);

//shift()....shift() method removes the first element from an array and returns that removed element.
const shift_item = [1, 2, 3, 4, 5];
const result_shift = shift_item.shift();
console.log("shift() removes the 1st element : ", result_shift);
console.log("so the current array is: ", shift_item);

//some...

const some_array = [1, 30, 39, 29, 10, 113];
const check = (currentValue) => currentValue < 40;

console.log(some_array.some(check));
