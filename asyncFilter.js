Array.prototype.asyncFilter = function (fn) {
  const items = [...this];
  const output = [];

  return new Promise((resolve, reject) => {
    let itemsExe = 0;
    items.forEach((item) => {
      item
        .then((result) => {
          itemsExe += 1;

          fn(result) ? output.push(result) : null;

          if (itemsExe === items.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

function asyncTask(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms), ms);
  });
}

function rejectAsyncTask(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`Rejected ${ms}`), ms);
  });
}

[
  asyncTask(1000),
  asyncTask(2000),
  asyncTask(500),
  asyncTask(1500),
  asyncTask(3000),
  rejectAsyncTask(4000),
]
  .asyncFilter((task) => task <= 2000)
  .then((res) => console.log("result is", res))
  .catch((err) => console.log("err is", err));
