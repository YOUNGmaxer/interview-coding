/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (k >= arr.length) return arr;
  return quickSort(arr, k, 0, arr.length - 1);
};

function quickSort(arr, k, l, r) {
  let [i, j] = [l, r];

  while (i < j) {
    while (i < j && arr[j] >= arr[l]) j--;
    while (i < j && arr[i] <= arr[l]) i++;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[i], arr[l]] = [arr[l], arr[i]];

  if (i > k) return quickSort(arr, k, l, i-1);
  if (i < k) return quickSort(arr, k, i+1, r);

  return arr.slice(0, k);
}

console.log(getLeastNumbers([0,1,2,1], 1))
