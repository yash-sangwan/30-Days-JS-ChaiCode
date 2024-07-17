                    // Kindly uncomment the console.log to check the result  

// Task 1

for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

// Task 2

for (let i = 1; i <= 10; i++) {
  1;
  // console.log(5*i);
}

// Task 3

let maxNumber = 0;
let temp = 0;
while (maxNumber <= 10) {
  temp += maxNumber;
  maxNumber++;
}
// console.log(temp);

// Task 4

let rev = 11;
while (rev > 0) {
  rev--;
//   console.log(rev);
}

// Task 5

let num = 0
do {
    num++ 
    // console.log(num);
} while (num<5);

// Task 6

let fac = 6;
let accum = 1
do {
    accum *= fac
    fac--    
} while (fac > 0);
// console.log(accum);

// Task 7

for (let i = 1; i < 6; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "*";
    }
    // console.log(row);
}

// Task 8

for (let i = 1; i < 11; i++) {
        if (i == 5) {
            continue;
        }    
        // console.log(i);
}

// Task 9

for (let i = 1; i < 11; i++) {
        if (i == 7) {
            break;
        }    
        console.log(i);
}
