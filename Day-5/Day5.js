// Kindly call the function to see the result

// Task 1

const isOddOrEven = (num) => {
  if (num % 2 == 0) {
    console.log("Even");
  }
  console.log("Odd");
};

// Task 2

const sqNumber = (num) => {
  return num * num;
};

// Task 3

const maxNumber = (num1, num2) => {
  return num1 > num2 ? "num1 is max" : "num2 is max";
};

// Task 4

const conCat = (str1, str2) => {
  if (typeof str1 && typeof str2 === "string") {
    return str1 + str2;
  }
};

// Task 5

const sumNumber = (num1, num2) => {
  return num1 + num2;
};

// Task 6

const checkChar = (str) => {
  str = str.split("");
  let char = "a";
  for (let i = 0; i < str.length; i++) {
    if (char == str[i]) {
      return true;
    } else {
      return false;
    }
  }
};


// Task 7

const productNumber = (num1, num2 = 2) => {
  return num1 * num2;
};

// Task 8

const greet = (name, age = 30) => {
  return `Hello, ${name}! You are ${age} years old.`;
};

// Task 9

function repeatFunction(f, n) {
  for (let i = 0; i < n; i++) {
      f();
  }
}

function sayHello() {
  console.log("Hello");
}

repeatFunction(sayHello, 3);

// Task 10

function applyFunctions(f1, f2, value) {
  return f2(f1(value));
}

function increment(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

let result = applyFunctions(increment, square, 3);
console.log(result);  

