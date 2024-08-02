// Task 1

function outerFunction() {
  const outerVariable = "I am from the outer scope!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner();

// Task 2

function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

// Task 3

function createIdGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = createIdGenerator();
console.log(generateId());
console.log(generateId());

// Task 4

function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greet = createGreeter('yash');
greet();

// Task 5

function createFunctionArray() {
    const functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }

    return functions;
}

const functions = createFunctionArray();
functions[0](); // Logs: 0
functions[1](); // Logs: 1
functions[2](); // Logs: 2

// Task 6

const collectionModule = (function() {
    const items = [];

    return {
        add: function(item) {
            items.push(item);
        },
        remove: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        list: function() {
            return items.slice();
        }
    };
})();

collectionModule.add('item1');
collectionModule.add('item2');
collectionModule.remove('item1');
console.log(collectionModule.list());


// Task 7

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

const slowFunction = (num) => {
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++) {}
    return num * 2;
};

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Logs: 10 (slow)
console.log(memoizedFunction(5)); // Logs: 10 (fast, from cache)


// Task 8

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(6)); // Logs: 720 (uses cached value for factorial(5))


