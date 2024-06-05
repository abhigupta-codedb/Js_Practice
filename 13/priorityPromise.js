// /**
//  *
//  * Given a list of promises and their priorities, call them parallelly and
// resolve with the value of the first promise with the most priority. If all
// the promises fail then reject with a custom error.
// */

function resolveIn(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved in ${ms} sec.`);
    }, ms * 1000);
  });
}

function rejectIn(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Rejected in ${ms} sec.`);
    }, ms * 1000);
  });
}

function priorityPromise(allpromises) {
  allpromises.sort((a, b) => b.priority - a.priority);
  let highestPri = allpromises[0].priority;
  let rejectedPromiseCount = 0;
  let count = 0;
  return new Promise((resolve, reject) => {
    allpromises.forEach((item) => {
      item
        .promise()
        .then((res) => {
          allPromiseRejected = false;
          if (item.priority === highestPri) {
            resolve(res);
          }
        })
        .catch((err) => {
          rejectedPromiseCount++;
          if (rejectedPromiseCount === allpromises.length) {
            reject("All Promies are rejected");
          }
          if (item.priority === highestPri) {
            highestPri = allpromises[rejectedPromiseCount].priority;
            console.log("updated priority", highestPri);
          }
        });
    });
  });
}

const input3 = [
  {
    promise: () => rejectIn(3),
    priority: 4,
  },
  {
    promise: () => rejectIn(2),
    priority: 3,
  },
  {
    promise: () => rejectIn(1),
    priority: 5,
  },
  {
    promise: () => resolveIn(5),
    priority: 1,
  },
];

priorityPromise(input3)
  .then((res) => {
    console.log("Result is", res);
  })
  .catch((err) => {
    console.log("Error", err);
  });
