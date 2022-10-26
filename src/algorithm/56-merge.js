function merge(intervals) {
  const len = intervals.length
  if (len < 2) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  const result = []
  let curRange = intervals[0]
  let p = 1

  while (p < len) {
    const nextRange = intervals[p]
    if (nextRange[0] >= curRange[0] && nextRange[0] <= curRange[1]) {
      curRange[1] = Math.max(curRange[1], nextRange[1])
    } else {
      result.push(curRange)
      curRange = nextRange
    }
    p++
  }
  result.push(curRange)

  return result
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
