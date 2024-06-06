class hashSet {
  constructor() {
    this.list = {};
  }

  set(key, value) {
    this.list[key] = value;
  }

  get(key) {
    return this.list[key];
  }

  has(key) {
    if (this.get(key)) {
      return true;
    }
    return false;
  }
}

const hs = new hashSet();
console.log(hs.has(2));
hs.set(2, 5);
hs.set(1, 4);
console.log(hs.get(2));
console.log(hs.has(1));
