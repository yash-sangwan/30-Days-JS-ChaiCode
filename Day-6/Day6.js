// Task 1

let arrayNumber = [1, 2, 3, 4, 5];
console.log(arrayNumber);

// Task 2

console.log(arrayNumber[0]);
console.log(arrayNumber[arrayNumber.length - 1]);

// Task 3

arrayNumber.push(7);
console.log(arrayNumber);

// Task 4

arrayNumber.pop();
console.log(arrayNumber);

// Task 5

arrayNumber.shift();
console.log(arrayNumber);

// Task 6

arrayNumber.unshift(1);
console.log(arrayNumber);

// Task 7

let newArr = arrayNumber.map((i) => {
  return i * 2;
});
console.log(newArr);

// Task 8

let newArr2 = arrayNumber.filter((i) => {
  return i % 2 == 0;
});
console.log(newArr2);

// Task 9

let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Task 10

for (let i = 0; i < arrayNumber.length; i++) {
  console.log(arrayNumber[i]);
}

// Task 11

arrayNumber.forEach(element => console.log(element));

// Task 12

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix);

// Task 13

console.log(matrix[1][1]); // Accessing the element in the second row and second column
