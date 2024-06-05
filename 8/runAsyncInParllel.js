function createPromise(type, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === "resolve") {
        resolve(`${time}: Resolved`);
      }
      reject(`${time}: Rejected`);
    }, time);
  });
}

async function runAsyncOpsInParlle(asyncOps, callback) {
  asyncOps.forEach((ops) => {
    ops
      .then((val) => {
        callback(val);
      })
      .catch((err) => {
        callback(err);
      });
  });
}

const asyncTasks = [
  createPromise("resolve", 400),
  createPromise("resolve", 1000),
  createPromise("resolve", 2000),
  createPromise("resolve", 3000),
];

runAsyncOpsInParlle(asyncTasks, (val) => {
  console.log("call back exe for", val);
});
