/**
 * 节流函数 - 1
 * @description 限制一个函数在一定时间内只执行一次
 * @param {*} fn 
 * @param {*} wait 
 */
function throttle_1(fn, wait) {
  let timer = null;

  return function() {
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, wait);
  }
}

/**
 * 节流函数 - 2
 * @description 限制一个函数在一定时间内只执行一次
 * @param {*} fn 
 * @param {*} wait 
 */
function throttle_2(fn, wait) {
  let prev = 0;

  return function() {
    const now = Date.now();
  
    if (now - prev > wait) {
      prev = now;
      fn.apply(this, arguments);
    }
  }
}

