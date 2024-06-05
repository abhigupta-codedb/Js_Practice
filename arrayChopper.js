Array.prototype.chopper = function (size) {
  console.log("this-------", this);
  const arr = [...this];

  if (size <= 0) {
    return arr;
  }

  let i = 0;
  let temp = [];
  const output = [];
  while (i < arr.length) {
    temp.push(arr[i]);
    if (temp.length === size) {
      output.push(temp);
      temp = [];
    }
    i++;
  }
  if (temp.length !== 0) {
    output.push(temp);
    temp = [];
  }

  return output;
};

console.log([1, 2, 3].chopper(2));
