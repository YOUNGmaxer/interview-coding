Promise.prototype.all = function(promises) {
  const result = []
  const len = promises.length
  let count = 0

  return new Promise((resolve, reject) => {
    for (let i = 0; i < len; i++) {
      promise.then(res => {
        result[i] = res
        count++
        if (count === len) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })
}

const sleep = (wait) => new Promise((resolve) => setTimeout(() => {
  console.log('sleep', wait)
  resolve(wait)
}, wait))

const promise = () => Promise.all([sleep(1000), sleep(100), sleep(500)])

;(async () => {
  const res = await promise()
  console.log(res)
})()
