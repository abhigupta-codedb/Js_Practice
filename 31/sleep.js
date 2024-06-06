function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms * 1000);
  });
}

console.log("log time", new Date().toLocaleTimeString());
sleep(5).then(() => {
  console.log("After 5 secs");
  console.log("log time", new Date().toLocaleTimeString());
});
