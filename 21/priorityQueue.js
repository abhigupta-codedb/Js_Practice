//Skipped 20
class priorityQueue {
  constructor() {
    this.array = [];
  }

  enqueue(item) {
    if (this.array.length === 0) {
      this.array.push(item);
    } else {
      let itemAdded = false;
      for (let i = 0; i < this.array.length && !itemAdded; i++) {
        if (item.priority > this.array[i].priority) {
          this.array.splice(i, 0, item);
          itemAdded = true;
        }
      }
      if (!itemAdded) {
        this.array.push(item);
      }
    }
  }

  dequeue() {
    return this.array.shift();
  }

  front() {
    return this.array[0];
  }

  rear() {
    return this.array[this.array.length - 1];
  }

  size() {
    return this.array.length;
  }

  isEmpty() {
    return this.array.length ? false : true;
  }

  print() {
    for (let ele of this.array) {
      console.log(ele);
    }
  }
}

let pq = new priorityQueue();
pq.enqueue({
  ele: 1,
  priority: 3,
});
pq.enqueue({
  ele: 5,
  priority: 2,
});
pq.enqueue({
  ele: 6,
  priority: 1,
});
pq.enqueue({
  ele: 11,
  priority: 1,
});
pq.enqueue({
  ele: 13,
  priority: 1,
});
pq.enqueue({
  ele: 10,
  priority: 3,
});
pq.print();
console.log("front:", pq.front());
console.log("Dequeue:", pq.dequeue());
pq.print();
