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

function callback() {
  console.log("Promise executed");
}

function promiseFinally(promise, callback) {
  promise
    .then((val) => {
      console.log("Final Result", val);
      callback();
    })
    .catch((val) => {
      console.log("Failed", val);
      callback();
    });
}

promiseFinally(createPromise("reject", 3000), callback);
