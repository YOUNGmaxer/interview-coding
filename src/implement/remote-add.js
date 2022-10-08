function remoteAdd(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

/**
 * 并发无限制，用最快的速度完成
 * @param  {...any} nums 
 */
function add(...nums) {
  const addTimes = Math.ceil(nums.length / 2);
  let count = 0;
  let result = 0;

  return new Promise((resolve) => {
    while (nums.length) {
      innerAdd();
    }
  
    async function innerAdd() {
      const [a, b] = [nums.pop() || 0, nums.pop() || 0];
      const sum = await remoteAdd(a, b);
      result += sum;
      count++;

      if (count === addTimes) {
        resolve(result);
      }
    }
  })
}

function addWithMax(nums, max) {
  const addTimes = Math.ceil(nums.length / 2);
  let result = 0;
  let totalCount = 0;
  let currentCounting = 0;

  return new Promise((resolve) => {
    
    for (let i = 0; i < addTimes && i < max; i++) {
      innerAdd();
    }
  
    async function innerAdd() {
      if (currentCounting >= max) return;
      if (!nums.length) return;

      currentCounting++;
      const [a, b] = [nums.pop() || 0, nums.pop() || 0];
      const sum = await remoteAdd(a, b);
      result += sum;
      totalCount++;
      currentCounting--;

      if (totalCount === addTimes) {
        resolve(result);
      } else {
        innerAdd();
      }
    }
  })
}

async function test() {
  console.time('add');
  const sum = await add(1, 2, 3, 4, 5);
  console.timeEnd('add');
  console.log(sum);
}

async function testMax() {
  console.time('addWithMax');
  const sum = await addWithMax([1,2,3,4,5,6], 2);
  console.timeEnd('addWithMax');
  console.log(sum);
}

// test();
testMax();
