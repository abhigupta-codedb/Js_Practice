function getPromise(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Promise no ${i}`), i * 1000);
  });
}

const actions = [getPromise(1), getPromise(2), getPromise(3)];

// Using For-of loop
// async function serialExecution(promises) {
//   for (let promise of promises) {
//     try {
//       const result = await promise;
//       console.log(result);
//     } catch (e) {
//       console.log("err is", e);
//     }
//   }
// }
// serialExecution(actions);

// Using Recursion
// function asyncRecursionExe(promises) {
//   if (promises.length === 0) {
//     return;
//   }
//   const promise = promises.shift();

//   promise.then((val) => console.log(val)).catch((err) => console.log(err));

//   asyncRecursionExe(promises);
// }
// asyncRecursionExe(actions);

//Using Reduce
function asyncReduceExe(promises) {
  promises.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => {
        console.log(val);
      });
    });
  }, Promise.resolve());
}
asyncReduceExe(actions);
