function debounceImm(func, delay, flag) {
  let timerId = null;

  return function () {
    const args = arguments;
    const context = this;
    const isTatkal = flag && !timerId;

    if (isTatkal) {
      func.appl(context, args);
    }

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      if (!isTatkal) {
        timerId = null;
        func.appl(context, args);
      }
    }, delay);
  };
}

// first call NO imm -
