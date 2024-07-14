// Variable Declaration

// Task 1
var num = 10;
console.log(num);

// Task 2
let str = "yash";
console.log(str);

// Constant Declaration

// Task 3
const bool = true;
console.log(bool);

// Data Types

// Task 4
let age = 19;
let firstName = "yash";
let IITian = true;
let obj = {
    name:"yash",
    age:19,
    authenticated : true
}
let arr = [1,2,3,4]

console.log(typeof(age)); //number
console.log(typeof(firstName)); //string
console.log(typeof(IITian)); //boolean
console.log(typeof(obj)); //object
console.log(typeof(arr)); //object

// Reassigning Variables

// Task 5
let val1 = 100;
val1 = 10;
console.log(val1);

// Understanding const

// Task 6
const val2 = 15;
val2 = 20;
console.log(val2);  //TypeError




// Feature Request 

// 1.

// String
let fullName = "John Doe";
console.log(typeof(fullName), fullName);

// Number
let personAge = 30;
console.log(typeof(personAge), personAge);

// Boolean
let isStudent = true;
console.log(typeof(isStudent), isStudent);

// Object
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25
};
console.log(typeof(person), person);

// Array
let colors = ["red", "green", "blue"];
console.log(typeof(colors), colors);


// 2.


let price = 100;
price = 90;
console.log(price); //No Error

const totalPrice = 150;
totalPrice = 100;
console.log(totalPrice);  //TypeError