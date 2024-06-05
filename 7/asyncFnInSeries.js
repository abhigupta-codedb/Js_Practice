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

// For-of loop
async function runAsyncOpsInSeriesOne(asyncOps) {
  try {
    for (op of asyncOps) {
      let result = await op;
      console.log("Result is", result);
    }
  } catch (err) {
    console.log("err is", err);
  }
}

// Recursion loop
async function runAsyncOpsInSeriesTwo(asyncOps) {
  const prm = asyncOps.shift();

  prm
    .then((val) => {
      console.log("Result is", val);

      if (asyncOps.length > 0) {
        runAsyncOpsInSeriesTwo(asyncOps);
      }
    })
    .catch((err) => {
      console.log("err is", err);
    });
}

const asyncTasks = [
  createPromise("resolve", 4000),
  createPromise("resolve", 1000),
  createPromise("resolve", 2000),
  createPromise("resolve", 3000),
];

runAsyncOpsInSeriesOne(asyncTasks);
// runAsyncOpsInSeriesTwo(asyncTasks);
