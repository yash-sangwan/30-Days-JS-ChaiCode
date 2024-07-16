// Task 1

let num = 5;

if (num > 0) {
  console.log("positive");
} else if (num == 0) {
  console.log("equal to 0");
} else {
  console.log("negative");
}

// Task 2

let age = 20;

if (age >= 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}

// Task 3

const num1 = 10;
const num2 = 25;
const num3 = 15;

let largest;

if (num1 >= num2) {
  if (num1 >= num3) {
    largest = num1;
  } else {
    largest = num3;
  }
} else {
  if (num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
}

console.log(`The largest number is ${largest}`);

// Task 4

switch (7) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
    break;
}

// Task 5

let score = 88;
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log(`The grade is: ${grade}`);

// Task 6

let numValue = 4;

let result = numValue % 2 === 0 ? "Even" : "Odd";

console.log(result);

// Task 7

let year = 2024;
let isLeap =
  year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    ? "Leap Year"
    : "Not a Leap Year";

console.log(`${year} is ${isLeap}.`);

