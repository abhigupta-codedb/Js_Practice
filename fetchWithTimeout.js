function fetchWithTimeout(url, time) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId = null;

    fetch(url, { signal })
      .then((res) =>
        res
          .json()
          .then((result) => {
            resolve(result);
            timerId = null;
          })
          .catch((err) => reject(err))
      )
      .catch((err) => reject(err));

    timerId = setTimeout(() => {
      console.log("call aborted");
      controller.abort();
    }, time);
  });
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 100)
  .then((res) => console.log("response is", res))
  .catch((err) => console.log("error is", err));
