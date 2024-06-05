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

function promiseAny(promises) {
  const errorResult = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          count++;
          errorResult[index] = err;
          if (count === promises.length) {
            reject(errorResult);
          }
        });
    });
  });
}

promiseAny([
  createPromise("reject", 500),
  createPromise("resolve", 50),
  createPromise("reject", 1000),
  createPromise("reject", 2000),
  createPromise("reject", 3000),
])
  .then((val) => {
    console.log("Final Result", val);
  })
  .catch((val) => {
    console.log("Failed", val);
  });

export { createPromise };
