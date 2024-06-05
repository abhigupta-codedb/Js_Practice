// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("issue-resolved"), 1000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log("err is", err);
//   });

const samplePromise = new Promise((resolve, reject) => {
  resolve("im resolved");
  // reject("promise rejected");
});

async function promiseHandler(promise) {
  try {
    const res = await promise;
    console.log("result is", res);
  } catch (error) {
    console.log("error is", error);
  } finally {
    console.log("finally exe");
  }
}

promiseHandler(samplePromise);
