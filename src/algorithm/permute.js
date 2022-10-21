function permute(arr) {
  const result = [];
  const path = [];
  const len = arr.length;
  const used = {};

  function backtracking() {
    if (path.length === len) return
    
    for (let i = 0; i < len; i++) {
      const item = arr[i]
      if (used[item]) continue

      path.push(item)
      result.push([...path])
      used[item] = true
      backtracking(i+1)
      used[item] = false
      path.pop()
    }
  }

  backtracking()

  return result;
}

console.log(permute([1, 2, 3]))
