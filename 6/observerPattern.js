const Observer = function () {
  this.subscribers = [];

  const subscribe = function (fn) {
    this.subscribers.push(fn);
  };

  const unsubscribe = function (fn) {
    this.subscribers = this.subscribers.filter((item) => item !== fn);
  };

  const fire = function (event, thisObj) {
    const scope = thisObj || window;
    this.subscribers.forEach((sub) => {
      sub.call(scope, event);
    });
  };
};

const moveHandler1 = function (item) {
  console.log("Moved_1: " + item);
};

const moveHandler2 = function (item) {
  console.log("Moved_2: " + item);
};

const obs = new Observer();

obs.subscribe(moveHandler1);
obs.subscribe(moveHandler2);

obs.fire("checked");
