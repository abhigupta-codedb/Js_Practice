const parent = {
  a: 1,
  exe() {
    console.log("I am the source");
    return "from parent";
  },
};

const child = {
  b: 2,
  __proto__: parent,
};

console.log("child.b", child.b);
console.log("child.a", child.a);
console.log("child.exe", child.exe());
