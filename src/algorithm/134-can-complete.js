/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let start = 0;
  let curLeft = 0;
  let totalLeft = 0;

  for (let i = 0; i < gas.length; i++) {
    curLeft += gas[i] - cost[i];
    totalLeft += gas[i] - cost[i];
    if (curLeft < 0) {
      start = i + 1;
      curLeft = 0;
    }
  }

  if (totalLeft < 0) return -1;

  return start;
};
