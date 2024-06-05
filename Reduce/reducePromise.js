// Runs Promise in sequence with Reduce function

function asyncTask(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved in ${delay} seconds`);
    }, delay * 1000);
  });
}

const allAsyncTasks = [
  asyncTask(1),
  asyncTask(2),
  asyncTask(3),
  asyncTask(4),
  asyncTask(5),
  asyncTask(8),
];

allAsyncTasks.reduce((prev, curr, index) => {
  return prev.then(() => {
    return curr.then((val) => {
      console.log("index is", index);
      console.log("Result is", val);
    });
  });
}, Promise.resolve());
