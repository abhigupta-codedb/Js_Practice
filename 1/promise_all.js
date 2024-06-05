function createPromise(type, time) {
  if (type === "resolve") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${time} resolved`);
      }, time);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`${time} rejected`);
    }, time);
  });
}

function promiseAll(promises) {
  const result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          count++;
          result[index] = val;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

promiseAll([
  createPromise("reject", 500),
  createPromise("resolve", 5000),
  createPromise("resolve", 1000),
  createPromise("resolve", 2000),
  createPromise("resolve", 3000),
])
  .then((val) => {
    console.log("Final Result", val);
  })
  .catch((val) => {
    console.log("Failed", val);
  });
