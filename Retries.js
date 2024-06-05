function delayFunction(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, 10);
  });
}

function asyncFunction() {
  let funcall = 0;

  return async () => {
    funcall += 1;
    if (funcall < 3) {
      reject("Rejected due to lesser no. of calls");
    } else {
      resolve("async func completed");
    }
  };
}

// const getTestFunc = () => {
//   let callCounter = 0;
//   return async () => {
//     callCounter += 1;
//     // if called less than 5 times
//     // throw error
//     if (callCounter < 3) {
//       throw new Error("Not yet");
//     }
//   };
// };

async function Retries(asyncFn, retries = 3, delay = 500) {
  let result;

  try {
    result = await asyncFn();
    console.log("result is", result);
  } catch (err) {
    if (retries > 0) {
      await delayFunction(delay);

      return Retries(asyncFn, retries - 1);
    } else {
      result = "API call not success after retries";
    }
  }

  return result;
}

// Retries(getTestFunc, 5);
Retries(asyncFunction, 5);
