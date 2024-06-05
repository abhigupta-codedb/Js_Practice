function throttel(func, delay) {
  let timer = null;

  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      func();
      timer = null;
    }, delay);
  };
}

function checkThrottel() {
  console.log("Current time:", new Date().toLocaleTimeString());
}

const thf = throttel(checkThrottel, 2000);

setInterval(() => {
  thf();
}, 500);
