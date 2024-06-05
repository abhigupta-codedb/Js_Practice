function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => (value < 7 ? resolve(value) : reject("rejected")), 1000);
  });
}

function executeWithPriority(tasks) {
  tasks = tasks.sort((a, b) => a.priority - b.priority);
  console.log("tasks after sort", tasks);
  const result = {};
  const reject = {};
  const tasksCompleted = 0;

  tasks.forEach(({ promise, priority }, index) => {
    promise
      .then((val) => {
        result[priority] = val;
      })
      .catch((err) => {
        reject[priority] = err;
      })
      .finally(() => {
        tasksCompleted += 1;
      });
  });
}
