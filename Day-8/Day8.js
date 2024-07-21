// Task 1

let name = "yash"
let age = 19

console.log(`Hi, his name is ${name} and his age is ${age}`);

// Task 2

let multiLine = `hi there, this is
multiline 
string`

console.log(multiLine);

// Task 3

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Task 4

const book = {
    title: "Gyan Ganga",
    author: "Sant Rampal Ji Maharaj",
    year: 2000,
    getTitleAndYear: function() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
};

const { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Task 5

const existingArray = [1, 2, 3, 4, 5];

const newArray = [...existingArray, 6, 7, 8];

console.log(newArray);

// Task 6

function sum(...numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Outputs: 15

// Task 7

function multiply(a, b = 1) {
    return a * b;
}

const resultWithBothParameters = multiply(5, 3);
const resultWithDefaultParameter = multiply(7);

console.log(`Result with both parameters: ${resultWithBothParameters}`); // Outputs: 15
console.log(`Result with default parameter: ${resultWithDefaultParameter}`); // Outputs: 7

// Task 8

const person = {
    name,
    age,
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
    introduce() {
        return `I am ${this.age} years old.`;
    }
};

console.log(person);
console.log(person.greet());
console.log(person.introduce());

// Task 9

const propName1 = "firstName";
const propName2 = "lastName";

const person1 = {
    [propName1]: "John",
    [propName2]: "Doe",
    greet() {
        return `Hello, my name is ${this[propName1]} ${this[propName2]}.`;
    }
};

console.log(person1);

console.log(person1.greet());




