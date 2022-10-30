function shuffle(arr) {
  let point = arr.length

  while (point > 1) {
    const idx = Math.floor(Math.random() * point)
    point--
    [arr[point], arr[idx]] = [arr[idx], arr[point]]
  }

  return arr
}

shuffle([1,2,3,4,5])
