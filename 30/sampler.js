function sampler(func, count) {
  let orgCount = 0;

  return function () {
    orgCount++;

    if (orgCount === count) {
      func();
      orgCount = 0;
    } else {
      console.log("count:", orgCount);
    }
  };
}

const smp = sampler(() => {
  console.log("Hey There!!");
}, 4);
smp();
smp();
smp();
smp();
smp();
smp();
smp();
smp();
smp();
smp();
smp();
smp();
