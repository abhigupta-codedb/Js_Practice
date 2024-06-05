/**
Implement a function that takes an array of input and an async
iteratee function and returns a promise that resolves with the list of
inputs that has passed the test through the iteratee function.
The inputs will run in parallel, but the output will be in the same order
as the original.
The asynchronous iteratee function will accept an input and a
callback. The callback function will be called when the input is
finished processing, the first argument of the callback will be the error
flag and the second will be the result.
 */

async function asyncFilter(array, iterateFunc) {
  const output = [];
  const failedOut = [];
  let index = 0;

  function callback(error, result) {
    if (error) {
      return result;
    }
    return result;
  }
  return new Promise((resolve, reject) => {
    array.forEach((element) => {
      iterateFunc(element, callback)
        .then((res) => {
          output.push(res);
        })
        .catch((err) => {
          failedOut.push(err);
        })
        .finally(() => {
          index++;

          if (index === array.length) {
            resolve({
              passedValues: output,
              failedValues: failedOut,
            });
          }
        });
    });
  });
}

async function iterateFunc(input, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input > 4) {
        const result = callback(false, input);
        resolve(result);
      }
      const failed = callback(true, input);
      reject(failed);
    }, 2000);
  });
}

const arr = [12, 5, 3, 2, 1, 8, 9, "", 0];

asyncFilter(arr, iterateFunc)
  .then((res) => {
    console.log("Result is", res);
  })
  .catch((err) => {
    console.log("Error is", err);
  });
