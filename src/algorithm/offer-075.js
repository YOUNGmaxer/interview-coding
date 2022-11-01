/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const map = new Map()
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i)
  }

  arr1.sort((a, b) => {
    const hasA = map.has(a)
    const hasB = map.has(b)

    if (!hasA && !hasB) return a - b
    if (hasA && !hasB) return -1
    if (!hasA && hasB) return 1
    if (hasA && hasB) return map.get(a) - map.get(b)
  })

  return arr1
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
