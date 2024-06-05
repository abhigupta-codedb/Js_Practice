function promiseRace(tasks) {
  return new Promise((resolve, reject) => {
    tasks.forEach((task) => {
      task
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

const task1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("task1 resolved"), 1000);
});

const task2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("task2 rejected"), 2000);
});

promiseRace([task1, task2])
  .then((res) => console.log("result is", res))
  .catch((err) => console.log("err is", err));
