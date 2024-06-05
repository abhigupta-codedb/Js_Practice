// Enqueue operation is expensive
class Stack {
  constructor() {
    this.array = [];
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    return this.array.length ? false : true;
  }
}

class queueWithStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(item) {
    if (this.stack1.isEmpty()) {
      this.stack1.push(item);
    } else {
      while (!this.stack1.isEmpty()) {
        const item = this.stack1.pop();
        this.stack2.push(item);
      }
      this.stack1.push(item);

      while (!this.stack2.isEmpty()) {
        const item = this.stack2.pop();
        this.stack1.push(item);
      }
    }
  }

  dequeue() {
    return this.stack1.pop();
  }

  peek() {
    return this.stack1.peek();
  }
}

const qws = new queueWithStack();
qws.enqueue(2);
qws.enqueue(5);
qws.enqueue(7);
qws.enqueue(9);
qws.enqueue(1);
console.log("Pop-", qws.dequeue());
console.log("Pop-", qws.dequeue());
console.log("Pop-", qws.dequeue());
console.log("Peek-", qws.peek());
