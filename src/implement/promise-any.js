Promise.prototype.any = function(promises) {
  let count = 0
  let len = promises.length

  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(res => {
        resolve(res)
      }).catch(() => {
        count++
        if (count === len) reject('all promises rejected')
      })
    }
  })
}
