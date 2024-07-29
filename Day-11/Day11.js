// Task 1

const promiseOne = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("resolved promiseOne");
    res();
  }, 2000);
});

promiseOne.then((res) => {
  return res;
});

// Task 2

const promiseTwo = new Promise((res, rej) => {
  let data = true;
  setTimeout(() => {
    if (!data) {
      console.log("promiseTwo resolved");
      res();
    } else {
      console.log("Error: promiseTwo");
      rej();
    }
  }, 2000);
});

promiseTwo
  .then((res) => {
    return res;
  })
  .catch((err) => {
    return err;
  });

// Task 3

const fetchingFunc = async () => {
  try {
    const response = await fetch("https://api.github.com/users/yash-sangwan");
    return response;
  } catch (error) {
    console.log(error);
  }
};

fetchingFunc()
  .then(async (response) => {
    const data = await response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

// Task 4

const asyncFunc1 = async () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("promise resolved in 3 sec");
    }, 3000);
  });
};

asyncFunc1()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Task 5

const rejectedFunc = async () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error("Promise rejected"));
    }, 4000);
  });
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

rejectedFunc();

// Task 6

const fetchDataWithPromises = () => {
  fetch("https://api.github.com/users/yash-sangwan")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

fetchDataWithPromises();

// Task 7

const fetchDataWithAsyncAwait = async () => {
  try {
    const dataJson = await fetch("https://api.github.com/users/yash-sangwan");
    const data = await dataJson.json();
    return data;
    
  } catch (error) {
    console.log(error);
  }
};

fetchDataWithAsyncAwait()


// Task 8

const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved!'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved!'), 2000));

Promise.all([promise1, promise2])
  .then(values => {
    console.log(values); // ["Promise 1 resolved!", "Promise 2 resolved!"]
  })
  .catch(error => {
    console.error('Error in promises:', error);
  });


// Task 9

const promiseA = new Promise((resolve) => setTimeout(() => resolve('Promise A resolved first!'), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve('Promise B resolved second!'), 2000));

Promise.race([promiseA, promiseB])
  .then(value => {
    console.log(value); // "Promise A resolved first!"
  })
  .catch(error => {
    console.error('Error in promises:', error);
  });


