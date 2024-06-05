function arrayChopper(array, limit) {
  const output = [];
  let limitCount = 0;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (limitCount < limit) {
      newArray.push(array[i]);
      limitCount++;
    }
    if (limitCount === limit) {
      output.push(newArray);
      newArray = [];
      limitCount = 0;
    }
  }
  if (newArray.length > 0) {
    output.push(newArray);
    newArray = [];
    limitCount = 0;
  }

  return output;
}

async function mapLimit(array, WorkerFunction, limit) {
  let output = [];
  let index = 0;
  const choppedArray = arrayChopper(array, limit);
  return new Promise(async (resolve, reject) => {
    try {
      for (task of choppedArray) {
        const result = await WorkerFunction(task, callback);
        console.log(`Task ${index} - result`, result);
        output[index++] = result;
      }
      resolve(output);
    } catch (error) {
      console.log("error occured");
      reject(error);
    }
  });
}

async function WorkerFunction(inputs, callback) {
  let output = [];
  let index = 0;
  return new Promise((resolve, reject) => {
    inputs.forEach((input) => {
      input()
        .then((res) => {
          const result = callback(false, res);
          output[index++] = result;

          if (index === inputs.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
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
  () => resolvedAfter(1),
];

const startTime = Date.now();
console.log("Start time", new Date(startTime).toLocaleTimeString());
mapLimit(params, WorkerFunction, 2)
  .then((res) => {
    console.log("result is", res);
    const endTime = Date.now();
    console.log("End time", new Date(endTime).toLocaleTimeString());
    console.log("Time taken in ms", (endTime - startTime) / 1000);
  })
  .catch((err) => {
    console.log("err is", err);
  });
