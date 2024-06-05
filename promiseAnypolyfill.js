async function promiseAnyPolyfill(tasks) {
  const allErorrs = [];
  let promiseRejected = 0;

  return new Promise((resolve, reject) => {
    tasks.forEach((task, index) => {
      task
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          allErorrs[index] = err;
          promiseRejected += 1;

          if (promiseRejected === tasks.length) {
            reject(allErorrs);
          }
        });
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promsie 1 resolved"), 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promsie 2 resolved"), 3000);
});

promiseAnyPolyfill([promise1, promise2])
  .then((val) => console.log("result is - ", val))
  .catch((err) => {
    console.log("erroe occured - ", err);
  });
