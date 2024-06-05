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

function promiseAllSettled(promiseArray) {
  let count = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      promise
        .then((val) => {
          const obj = {
            status: "resolved",
            value: val,
          };
          result[index] = obj;
          count++;
          if (count === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          const obj = {
            status: "rejected",
            value: err,
          };
          result[index] = obj;
          count++;
          if (count === promiseArray.length) {
            resolve(result);
          }
        });
    });
  });
}

promiseAllSettled([
  createPromise("reject", 50),
  createPromise("resolve", 5),
  createPromise("reject", 1000),
  createPromise("reject", 2000),
  createPromise("reject", 3000),
])
  .then((val) => {
    console.log("Final Result", val);
  })
  .finally(() => {
    console.log("Operation complete");
  });
