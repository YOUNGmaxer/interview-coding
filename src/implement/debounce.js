function debounce_1(fn, delay) {
  let prev = 0;

  return function(...args) {
    const now = Date.now();
    if (now - prev > delay) {
      fn(...args);
    }
    prev = now;
  }
}

function debounce_2(fn, delay, immediate = false) {
  let timer = null;

  return function(...args) {
    if (!timer && immediate) fn(...args);
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }
}
