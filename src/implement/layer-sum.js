function layerSum(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const len = queue.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
      const item = queue.shift();
      sum += item.value;

      if (item.children) queue.push(...item.children);
    }

    result.push(sum);
  }

  return result;
}

const res = layerSum({
  value: 2,
  children: [
    { value: 6, children: [{ value: 1 }] },
    { value: 3, children: [{ value: 2 }, { value: 3 }, { value: 4 }] },
    { value: 5, children: [{ value: 7 }, { value: 8 }] }
  ]
});

console.log(res);
