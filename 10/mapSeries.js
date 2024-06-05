/*
Implement a mapSeries async function that is similar to the
Array.map() but returns a promise that resolves on the list of output
by mapping each input through an asynchronous iteratee function or
rejects it if any error occurs. The inputs are run in a sequence that is
one after another.
The asynchronous iteratee function will accept an input and a
callback. The callback function will be called when the input is
finished processing, the first argument of the callback will be the error
flag and the second will be the result.
 */

//input
//async iterate func

async function mapSeries(array, WorkerFunction) {
  let output = [];
  let index = 0;
  return new Promise(async (resolve, reject) => {
    try {
      for (task of array) {
        const result = await WorkerFunction(task, callback);
        console.log(result);
        output[index++] = result;
      }
      resolve(output);
    } catch (error) {
      console.log("error occured");
      reject(error);
    }
  });
}

async function WorkerFunction(input, callback) {
  return input()
    .then((res) => {
      return callback(false, res);
    })
    .catch((err) => {
      throw err;
    });
}

function callback(error, result) {
  if (error) {
    throw "Error Occured";
  }
  return result;
}

function resolvedAfter(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(`resolved after ${ms * 1000} Sec.`),
      parseInt(ms) * 1000
    );
  });
}

function rejected(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), parseInt(ms) * 1000);
  });
}

const params = [
  () => resolvedAfter(4),
  () => resolvedAfter(1),
  () => resolvedAfter(2),
  () => resolvedAfter(3),
  () => rejected(3),
];

mapSeries(params, WorkerFunction)
  .then((res) => {
    console.log("result is", res);
  })
  .catch((err) => {
    console.log("err is", err);
  });
