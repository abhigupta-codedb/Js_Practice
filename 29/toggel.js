function toggel(...args) {
  const count = args.length;
  let index = 0;

  return function () {
    if (index === count) {
      index = 0;
    }
    return args[index++];
  };
}

const tg = toggel("On", "Off");
console.log(tg());
console.log(tg());
console.log(tg());
