/* Multiline comment - Shift+Alt+A */

/* Array.reduce(callback, initial value);

it runs the callback function for the each element of the array and return of this function becomes the prev value 
for next iteration and in the final iteration prev value is thrown as result.

callback(prevValue, currValue, currentIndex, array) 

various actions can be performed like:

Segregation
Aggregation
Running things in sequence/Series

*/

// Running things in Sequence/Series

const upperCase = (str) => {
  return str.toUpperCase();
};
const reverse = (str) => {
  return str.split("").reverse().join("");
};
const append = (str) => {
  return "Hello " + str;
};

const applyOps = [upperCase, reverse, append];

const seqOps = applyOps.reduce((prev, curr) => {
  const val = curr(prev);
  return val;
}, "masserati");

console.log("seqOps--", seqOps);

// Aggregation:
const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((prev, curr) => {
  const next = prev + curr;
  return next;
}, 0);

console.log("sum is--", sum);

/* 
Segregation:
input = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];
{
    1: [1.1, 1.2, 1.3],
    2: [2.2, 2.3, 2.4]
} 
*/

const arrSeg = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

const segObject = arrSeg.reduce((prev, curr) => {
  const flooredValue = Math.floor(curr);

  if (!prev[flooredValue]) {
    prev[flooredValue] = [];
  }
  prev[flooredValue].push(curr);

  return prev;
}, {});

console.log("seg object", segObject);
