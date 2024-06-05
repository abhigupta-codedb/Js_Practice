function debounce(func, delay) {
  let timerId = null;

  return function () {
    const args = arguments;
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.appl(context, args);
      timerId = null;
    }, delay);
  };
}
