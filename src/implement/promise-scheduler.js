/**
 * 限制并发的 Promise 调度器
 */
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.count = 0;
  }

  add(time, order) {
    this.queue.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    });
  }

  start() {
    for (let i = 0; i < this.limit; i++) {
      this.runTask();
    }
  }

  runTask() {
    if (!this.queue.length) return;
    if (this.count >= this.limit) return;

    this.count++;
    this.queue.shift()().then(() => {
      this.count--;
      this.runTask();
    });
  }
}
