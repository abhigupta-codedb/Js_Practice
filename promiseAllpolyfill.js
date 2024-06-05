async function promiseAllPoly(tasks) {
  if (!Array.isArray(tasks)) {
    throw new Error("provide input type Array");
  }
  const result = [];
  let promiseResolved = 0;
  return new Promise((resolve, reject) => {
    tasks.forEach((task, index) => {
      task
        .then((val) => {
          result[index] = val;
          promiseResolved += 1;
          if (promiseResolved === tasks.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(91), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("promsie 2 rejected"), 3000);
});

promiseAllPoly([promise1, promise2])
  .then((val) => console.log("result is - ", val))
  .catch((err) => {
    console.log("error occured - ", err);
  });
