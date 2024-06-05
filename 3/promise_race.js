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

function promiseRace(promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

promiseRace([
  createPromise("reject", 50),
  createPromise("resolve", 5),
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
