function instanceOf(obj, target) {
  if (obj == null || typeof obj !== "object") return false;

  const proto = Object.getPrototypeOf(obj);

  return proto === target.prototype ? true : instanceOf(proto, target);
}

class P {}

class q extends P {}

class R {}

const obj1 = new q();

console.log(instanceOf(obj1, P));
console.log(instanceOf(obj1, Object));
console.log(instanceOf(obj1, R));
