/**
 * 每隔 1 秒输出
 * @param {*} arr 
 */
function intervalPrint(arr) {
  arr
    .reduce((p, cur) =>
      p.then(() =>
        new Promise(resolve =>
          setTimeout(() => resolve(console.log(cur)), 1000)
        )
      ), Promise.resolve())
}

intervalPrint([1, 2, 3])
