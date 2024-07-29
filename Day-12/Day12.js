// Task 1

const errFunc = () => {
  throw new Error("Intentionally thrown error");
};

try {
  errFunc();
} catch (error) {
  console.log(`Err: ${error.message}`);
}

// Task 2

const divideFunc = (a, b) => {
  if (b === 0) {
    throw new Error("Denominator can't be 0")    
  }
  return a / b;
};

try {
  console.log(divideFunc(2, 3));
  console.log(divideFunc(2, 0));
} catch (error) {
  console.log(error.message);
}

// task 3

try {
    console.log("Inside try block");
    throw new Error("Error in try block");
  } catch (error) {
    console.log("Caught an error:", error.message);
  } finally {
    console.log("Finally block executed");
  }

// task 4

class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  const throwCustomError = () => {
    throw new CustomError("This is a custom error");
  };
  
  try {
    throwCustomError();
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }

// Task 5

const validateInput = (input) => {
    if (!input) {
      throw new CustomError("Input cannot be empty");
    }
    return true;
  };
  
  try {
    validateInput("");
    validateInput("hi");
  } catch (error) {
    console.log(`${error.message}`);
  }

// Task 6

const promise = new Promise((res,rej) => {
  setTimeout(() => {
    rej( new Error("error occured from promise of task 6"))
  }, 1000);
})

promise.catch((rej) => {
  console.log(rej.message);
})

// Task 7

const randomAsyncFunction = async () => {
    const promise = new Promise((resolve, reject) => {
      const isSuccess = Math.random() > 0.5;
      setTimeout(() => {
        isSuccess ? resolve("Promise resolved!") : reject(new Error("Promise rejected!"));
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log("Caught an error:", error.message);
    }
  };
  
  randomAsyncFunction();
  

// Task 8

fetch('https://invalid-url.com')
  .then((response) => response.json())
  .catch((error) => {
    console.log("Caught an error:", error.message);
  });


// Task 9

const asynErrFunc = async () => {
    
try {
    const dataJson = await fetch('www.invalidurl.com')
    const data = await dataJson.json()
    console.log(data);
  } catch (error) {
    console.log(`Err: ${error}`);
  }
}

asynErrFunc()