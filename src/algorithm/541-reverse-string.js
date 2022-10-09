/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const len = s.length;
  const strArr = s.split('');

  for (let i = 0; i < len; i += 2 * k) {
    let left = i, right = Math.min(len - 1, i + k - 1);

    while (left < right) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
      left++;
      right--;
    }
  }

  return strArr.join('');
};

console.log(reverseStr('abcdefg', 2));
