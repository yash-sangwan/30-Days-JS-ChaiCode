// Task 1

import { add } from "./additional Scripts/addition";
const result = add(2,3)
console.log(result);

// Task 2

import person from './additional Scripts/person'
console.log(person.name);
console.log(person.age);
person.greet()

// Task 3

import { add, subtract } from './additional Scripts/mathfunction.js';

console.log(add(5, 3));      
console.log(subtract(5, 3)); 

// Task 4

import multiply from './additional Scripts/multiply.js';
console.log(multiply(4, 3));


// Task 5

import * as utilities from './additional Scripts/utilities.js';

console.log(utilities.PI);            
console.log(utilities.add(4, 2));      
console.log(utilities.subtract(4, 2)); 


// Task 6

import _ from 'lodash';

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice());
console.log(reversedArray); 

// Task 7

import axios from 'axios';

axios.get('https://api.github.com/users/yash-sangwan')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



  


