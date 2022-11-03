Promise.prototype.race = function(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then((res) => resolve(res)).catch((err) => reject(err))
    }
  })
}
