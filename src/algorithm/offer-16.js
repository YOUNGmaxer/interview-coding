function lengthOfLongestSubstring(str) {
  const len = str.length
  const map = new Map()
  let left = 0, right = 0
  let maxLen = 0
  let count = 0

  while (right < len) {
    const target = str[right]
    if (map.has(target)) {
      const preIndex = map.get(target)
      for (let i = left; i <= preIndex; i++) {
        map.delete(str[i])
        count--
      }
      left = preIndex + 1
    } 
    count++
    map.set(target, right)
    maxLen = Math.max(maxLen, count)
    right++
  }

  return maxLen
}

function lengthOfLongestSubstring_2(str) {
  const len = str.length
  let left = 0, right = 0
  let maxLen = 0
  const exist = new Set()

  while (left < len) {

    while (right < len && !exist.has(str[right])) {
      exist.add(str[right])
      right++
    }

    maxLen = Math.max(maxLen, right - left)

    exist.delete(str[left])
    left++
  }

  return maxLen
}

lengthOfLongestSubstring_2('abcabcbb')
