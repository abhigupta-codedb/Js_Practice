function taskGenerator(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Resolved ${ms}`), ms);
  });
}

function rejectTaskGenerator(ms) {
  return new Promise((reject) => {
    setTimeout(() => reject(`Rejected ${ms}`), ms);
  });
}

const parallelExecution = (tasks, fn) => {
  const result = [];

  tasks.forEach((task) => {
    task
      .then((res) => {
        result.push(res);

        if (result.length === tasks.length) {
          fn(result);
        }
      })
      .catch((err) => {
        result.push(new Error(err));
        fn(result);
      });
  });
};

parallelExecution(
  [
    taskGenerator(1000),
    taskGenerator(5000),
    taskGenerator(2000),
    taskGenerator(500),
    taskGenerator(20),
    rejectTaskGenerator(6000),
  ],
  (result) => {
    console.log("Result is", result);
  }
);

// [taskGenerator(100), taskGenerator(50), taskGenerator(200)].parallelExecution
