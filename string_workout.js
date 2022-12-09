//to find the length of the string
const s = "qwertyuiopasdfghjklzxcvbnm";
console.log(s.length);

//string at the position string.prototype.at
const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 0;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`
);
//

index = 0; //by using charat ....whats the difference
console.log(" charAt");
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

//It shows the char code of the respective value
console.log("Char code");
index = 0;
console.log(
  `The character code ${sentence.charCodeAt(
    index
  )} is equal to ${sentence.charAt(index)}`
);

//the utf for the emoji
console.log("Code for emoji");
const icons = "🤩️😉️🤪️";
console.log(icons.codePointAt(1));
console.log(icons.codePointAt(2));
console.log(icons.codePointAt(0));

//Adding 2 string using concat
console.log("Adding two strings");
const str1 = "Sabari";
const str2 = "Nathan";
console.log(str1.concat(" ", str2));
console.log(str2.concat(" ", str1));

//For find the end match
console.log("Ending text matching with the given input");
const names = "Aspire Systems!";
console.log(names.endsWith("Systems!"));
//

//"It returns the string created from the specified sequence of UTF"

console.log("It returns the string created from the specified sequence of UTF");
console.log(String.fromCharCode(189, 43, 190, 61, 675, 84, 43,43));

//"The includes method perform where the specified word is present or not"
console.log(
  "The includes method perform where the specified word is present or not"
);
const para = "Aspire Systems is one of the great working place.";
const word = "Aspire";
console.log(
  `The word "${word}" ${para.includes(word) ? "is" : "is not"} in the sentence`
);

//For finding the specified word with position
console.log("For finding the specified word");
const paragraph = "best best best";
const searchTerm = "best";
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);
console.log(
  `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, 8)}`
);

//Checking array task--------
let array1 = [1, 3, 4, 5];
let array2 = [1, 3, 4, 5];
let array3 = array1;
console.log(array3 == array1);
console.log(array3 == array2);

//localeCompare with the strings
//-1 etc number referenceStr occurs before compareString;
// +1 etc if the referenceStr occurs after compareString
// 0 if they are equivalent...based on the compare position it change the value
let word_1 = "J";
let word_2 = "javascript";
console.log(word_1.localeCompare(word_2));

//retrieves the result of matching a string "match"
let working = "weB web web web";
let regex = /B/g;
let result = working.match(regex);
console.log(result);

//returns all results matching a string

//having doubt on match all

//returns the Unicode Normalization Form of the string
const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
console.log(`${name1}, ${name2}`);
console.log(name1 === name2);
console.log(name1.length === name2.length);
//NFC-canonical composition, double code point to single
let n_value1 = name1.normalize("NFC");
let n_value2 = name2.normalize("NFC");
console.log(`${name1}, ${name2}`);
console.log(n_value1 === n_value2);
console.log(n_value1.length === n_value2.length);
//NFD-canonical decomposition, single code point to double
let d_value1 = name1.normalize("NFD");
let d_value2 = name2.normalize("NFD");
console.log(d_value1.length);
console.log(d_value2.length);
//--todo NFKD

//padding is applied from the end of the current string
let padding = "JavaScript";
console.log(padding.padEnd(20, "?"));
//pad start
console.log(padding.padStart(20, "?"));

//raw

//repeat
let repeating_text = "Im Happy. ";
console.log(` "Happy": ${repeating_text.repeat(7)}`);

//slice
const str = "Enjoy the weekend , go quickly to home.";

console.log(str.slice(31));
console.log(str.slice(5, 19));
console.log(str.slice(-5));
console.log(str.slice(-9, -5));

//split
const text = "The quick brown fox jumps over the lazy dog.";
const words = text.split(" ");
console.log(words[3]);
const chars = text.split(" ");
console.log(chars[8]);
const strCopy = text.split();
console.log(strCopy);

//starts with
const starts_with = "Saturday night plans";

console.log(starts_with.startsWith("Sat"));
console.log(starts_with.startsWith("u", 3)); //position of the particular letter

// method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

const substring_1 = "AspireSystems";

console.log(substring_1.substring(0, 6));

console.log(substring_1.substring(6));

//value of
let text_1 = "Hello world";
console.log(text_1.valueOf());


//replace
const myText = 'I am  string';
const myNewText=myText.replace('string', 'sabari');
console.log(myNewText);

