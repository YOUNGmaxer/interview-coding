/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort(compare);
  s.sort(compare);

  let sIndex = 0;
  for (let i = 0; i < g.length; i++) {
    if (sIndex === s.length) break;
    if (s[sIndex] >= g[i]) {
      sIndex++;
    }
  }

  return sIndex;
};

function compare(a, b) {
  return b - a;
}

console.log(findContentChildren([1,2,3], [1, 2]));
