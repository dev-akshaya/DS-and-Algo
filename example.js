// 1 -------------------------------------------------------------
/*
function check(a, b) {
  if(a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
}

console.log(check(100, 0));
console.log(check(10, 100));
console.log(check(50, 50));
console.log(check(10, 0));

const result = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(result(100, 0));
console.log(result(10, 100));
console.log(result(50, 50));
console.log(result(10, 0));
*/
// 2 -------------------------------------------------------------
// get file extension 
/*
let file1 = "index.html";
let file2 = 'app.config.js';

function getFileExtension(filename){
  return filename.split(".").pop();
}

// function getFileExtension(filename){
//   return filename.slice(filename.lastIndexOf("."));
// }

console.log(getFileExtension(file1));
console.log(getFileExtension(file2));
*/
// 3 -------------------------------------------------------------
// Reverse a String 
/*
function reverseString(str){
  return str.split('').reverse().join('');
}

console.log(reverseString('BoB'));

*/

// 4 -------------------------------------------------------------
/*
let today = new Date();
let date = today.getDate() + ' / ' + today.getMonth() + ' / ' + today.getFullYear();

console.log(date);

const formateDate = (data = new Date()) => {
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  return `${day} / ${month} / ${year}`;
}

console.log(formateDate());
*/

// 5 -------------------------------------------------------------
/*
function addNew(str){
  if(str.indexOf('New') === 0) {
    return str;
  } else {
    return `New ${str}`;
  }
}

const addNew = (str) => str.indexOf('New') === 0 ? str :  `New ${str}`;

console.log(addNew("New Akshaya"));
*/

// ------------------------------------------
// Exercise 2 -------------------------------
// ------------------------------------------

let string = "Akshaya";
let first3 = string.substr(0, 3);
let last3 = string.substr(string.length-3);
// console.log(first3)
// console.log(last3);

function stringCheck(string) {
  if(string.length > 3) {
    return string.substr(0, 3) + string.substr(string.length-3);
  } else {
    return string;
  }
}
console.log(stringCheck("Akshaya"))
console.log(stringCheck("olx"));

const strCheck = string => string.length > 3 ? string.substr(0, 3) + string.substr(string.length-3) : string ;
console.log(strCheck("Akshaya"));
console.log(strCheck("olx"));