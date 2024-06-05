function resolvedAfter(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(`resolved after ${ms * 1000} Sec.`),
      parseInt(ms) * 1000
    );
  });
}

function resolveit(params) {
  const out = [];
  let index = [];

  return new Promise(async (resolve, reject) => {
    const startTime = Date.now();
    console.log("Start time:", new Date(startTime).toLocaleTimeString());
    for (const ele of params) {
      const res = await ele();
      console.log(res);
      out[index++] = res;
    }
    const endTime = Date.now();
    console.log("End time:", new Date(endTime).toLocaleTimeString());
    const timeDiff = (endTime - startTime) / 1000;
    console.log("Time taken:", timeDiff, "seconds");
    resolve(out);
  });
}

const params = [
  () => resolvedAfter(1),
  () => resolvedAfter(2),
  () => resolvedAfter(3),
  () => resolvedAfter(4),
];

resolveit(params)
  .then((res) => {
    console.log("result is", res);
  })
  .catch((err) => {
    console.log("err is", err);
  });
