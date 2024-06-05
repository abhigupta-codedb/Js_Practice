// Skipped problem 17

/**
 * 
 * Implement a stack data structure in which we can get the max and min
value through function in O(1) time.

 */

class stackWithMinMax {
  constructor() {
    this.array1 = [];
  }

  push(item) {
    if (this.array1.length === 0) {
      this.array1.push({
        value: item,
        min: item,
        max: item,
      });
    } else {
      let min = item;
      let max = item;
      this.array1.forEach((val) => {
        if (val.max > max) {
          max = val.max;
        }
        if (val.min < min) {
          min = val.min;
        }
      });
      this.array1.push({
        value: item,
        min: min,
        max: max,
      });
    }
  }

  pop() {
    return this.array1.pop();
  }
}

const swmm = new stackWithMinMax();

swmm.push(4);
swmm.push(7);
swmm.push(11);
swmm.push(1);
swmm.push(77);
swmm.push(3);
swmm.push(19);

console.log("Poped::", swmm.pop());
