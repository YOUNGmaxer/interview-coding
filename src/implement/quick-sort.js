function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return arr

  const pivot = partition(arr, start, end)
  quickSort(arr, start, pivot - 1)
  quickSort(arr, pivot + 1, end)

  return arr
}

function partition(arr, start, end) {
  const target = arr[start]
  let left = start, right = end

  while (left < right) {
    while (left < right && target < arr[right]) {
      right--
    }
    while (left < right && target >= arr[left]) {
      left++
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }

  [arr[start], arr[left]] = [arr[left], arr[start]]
  return left
}

const arr = [2, 1, 3, 5, 9, 4, 7, 6]
console.log(quickSort(arr))
console.log(quickSort([5, 4, 3, 2, 1]))
console.log(quickSort([4, 4, 4, 6, 3, 4, 2, 1]))
