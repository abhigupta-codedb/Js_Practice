// thenable
function retryThenable(
  asyncFn,
  retries = 4,
  delay = 50,
  finalError = "Failed"
) {
  return new Promise((resolve, reject) => {
    if (retries === 0) {
      return reject(finalError);
    }
    asyncFn()
      .then((val) => {
        resolve(val);
      })
      .catch((err) => {
        setTimeout(() => {
          retryThenable(asyncFn, retries - 1, 50, err);
        }, delay);
      });
  });
}

//wait
function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), parseInt(ms) * 100);
  });
}

// await
async function retryAwait(
  asyncFn,
  retries = 3,
  delay = 50,
  finalError = "Failed"
) {
  if (retries === 0) {
    return finalError;
  }
  try {
    const result = await asyncFn;
    return result;
  } catch (err) {
    wait(delay).then(() => {
      retry(asyncFn, retries - 1, delay, err);
    });
  }
}

// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    } else {
      return callCounter;
    }
  };
};

// const result = retryThenable(retryPromise(), 4, 50, "failed");
// console.log("Final result **", result);

retryThenable(getTestFunc(), 6, 50, "failed")
  .then((val) => {
    console.log("final val", val);
  })
  .catch((err) => {
    console.log("final error", err);
  });
