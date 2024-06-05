function pausableTimer(init = 0, step = 1) {
  let timer = init;
  let intervalId = null;

  function start() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log("Timer : ", timer);
        timer += step;
      }, 1000);
    }
  }

  function stop() {
    clearInterval(intervalId);
    intervalId = null;
  }

  return {
    start,
    stop,
  };
}

const func = pausableTimer(0, 1);
func.start();

setTimeout(() => {
  func.stop();
  console.log("STOPPED");
}, 5000);
