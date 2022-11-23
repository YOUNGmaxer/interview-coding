function shallowCopy(src) {
  // show me your code
  const result = Object.create(src.__proto__)
  
  for (let key in src) {
    result[key] = src[key]
  }
  
  return result;
}

function testShallowCopy(shallowCopyImpl) {
  const assert = require('assert');
  class UserModel {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      assert.strictEqual(typeof firstName, 'string');
      assert.strictEqual(typeof lastName, 'string');
    }
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
  const src = new UserModel('Tony', 'Jaa');
  const dst = shallowCopyImpl(src);
  assert.deepStrictEqual(dst, src);
  assert.notStrictEqual(dst, src);
  assert.strictEqual(dst.fullName(), src.fullName());
}

testShallowCopy(shallowCopy)

function createWeightedRandom(input) {
  // show me your code
  const weights = []
  input.reduce((acc, cur) => {
    acc += cur
    weights.push(Number(acc.toFixed(3)))
    return acc
  }, 0)

  return () => {
    const len = weights.length
    const randomVal = Number((Math.random() * weights[len - 1]).toFixed(3))

    let left = 0, right = len - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const weight = weights[mid]
      if (randomVal === weight) return mid
      if (randomVal < weight) {
        right = mid - 1
        continue
      } else {
        left = mid + 1
      }
    }
    return left
  }
}

function testCreateWeightedRandom(createWeightedRandomImpl) {
  const assert = require('assert');
  const input = [4, 5, 2, 3, 2];
  const counts = Array(input.length).fill(0);
  const random = createWeightedRandomImpl(input);
  assert.strictEqual(typeof random, 'function');
  for (let i = 0; i < 10000; i++) {
    const v = random();
    assert.ok(
      typeof v === 'number' && v < input.length && v > -1 && (v | 0) === v,
      `invalid random value: ${JSON.stringify(v)}`,
    );
    counts[v]++;
  }
  const sum = input.reduce((v, c) => v + c, 0);
  for (let i = 0; i < input.length; i++) {
    const expected = input[i] / sum;
    const real = counts[i] / 10000;
    // 误差不超过 0.01
    assert.ok(Math.abs(expected - real) < 0.01, `invalid weight ${real} for ${i}, expected is ${expected}`);
  }
}

testCreateWeightedRandom(createWeightedRandom)

function curry(fn, ...existingArgs) {
  // show me your code
  if (fn.length === existingArgs.length) {
    return fn(...existingArgs)
  } else {
    return function(...nextArgs) {
      return curry(fn, ...existingArgs, ...nextArgs)
    }
  }
}

function testCurry(curryImpl) {
  const assert = require('assert');
  function makeArray5(a, b, c, d, e) {
    return [a, b, c, d, e];
  }
  let curriedMakeArray5 = curryImpl(makeArray5, 1, 2, 3, 4, 5);
  assert.deepStrictEqual(curriedMakeArray5, [1, 2, 3, 4, 5]);
  curriedMakeArray5 = curryImpl(makeArray5, 1);
  assert.deepStrictEqual(curriedMakeArray5(2, 3, 4, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(curriedMakeArray5(2)(3, 4, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(curriedMakeArray5(2)(3)(4, 5), [1, 2, 3, 4, 5]);
  assert.deepStrictEqual(curriedMakeArray5(2)(3)(4)(5), [1, 2, 3, 4, 5]);
}

testCurry(curry)

function createAsyncWorker(capacity) {
  // show me your code
  const taskEvent = new Map()
  const taskQueue = []
  let count = 0
  let taskId = 0

  function onTask(taskId, callback) {
    taskEvent.set(taskId, callback)
  }

  function emitTask(taskId) {
    const callback = taskEvent.get(taskId)
    callback()
  }

  return function runTask(task) {
    return new Promise((resolve, reject) => {
      if (count < capacity) {
        count++;
        task().then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => {
            count--
            if (!taskQueue.length) return

            const nextTaskId = taskQueue.shift()
            emitTask(nextTaskId)
          })
      } else {
        taskQueue.push(++taskId)
        onTask(taskId, () => runTask(task).then(res => resolve(res)).catch(err => reject(err)))
      }
    })
  }
}

function testCreateAsyncWorker(createParallelTaskExecutorImpl) {
  const assert = require('assert');
  const executor = createParallelTaskExecutorImpl(2);
  const runTask = (id, delay, expectedDelay, fail) => {
    const start = Date.now();
    const check = (rejected) => (v) => {
      assert.strictEqual(rejected, fail, `promise status of task ${id} should be ${fail}, received ${rejected}`);
      const realDelay = Date.now() - start;
      assert.strictEqual(
        Math.round(realDelay / 100) * 100,
        expectedDelay,
        `delay of task ${id} should be ${expectedDelay}, received ${realDelay}`,
      );
      assert.strictEqual(
        v,
        delay,
        `${rejected ? 'error of rejected' : 'result of resolved'} task ${id} should be ${delay}, received ${v}`,
      );
    };
    executor(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (fail) {
              reject(delay);
            } else {
              resolve(delay);
            }
          }, delay);
        }),
    )
      .then(check(false), check(true))
      .catch((e) => {
        console.error(e);
      });
  };
  runTask(1, 100, 100, false);
  runTask(2, 200, 200, true);
  runTask(3, 300, 400, false);
  runTask(4, 400, 600, true);
  runTask(5, 100, 500, false);
  runTask(6, 200, 700, true);
  runTask(7, 100, 700, false);
  runTask(8, 200, 900, false);
}

try {
  testCreateAsyncWorker(createAsyncWorker);
} catch (error) {
  console.error(error);
}
