function get(obj, path, defaultValue) {
  const pathArr = path.replace(/\[(\d+)\]/g, '.$1').split('.')
  const lastItem = pathArr[pathArr.length - 1]
  const index = lastItem.indexOf('(')
  const isFunction = index !== -1
  const params = lastItem.slice(index + 1, lastItem.length - 1).trim().split(',').map(s => Number.isNaN(Number(s)) ? s : Number(s))
  if (isFunction) pathArr[pathArr.length - 1] = lastItem.slice(0, index)
  let result = obj

  for (const key of pathArr) {
    result = Object(result)[key]
    
    if (result === undefined) return defaultValue
  }
  
  if (isFunction) return result(...params)

  return result
}

const obj = {
  a: [
    {
      b: {
        c: 3
      }
    }
  ]
}

get(obj, 'a[0].b.c', 1)

const target = {
  a: {
     b: [0,1,2,3, {
         c: 4,
         d: (x, y)=>{
            return x+y;
         },
     }],
  }
}

console.log(get(target, 'a.b[4].c')) // 4
console.log(get(target, "a.b[4].e", -1)) // -1
console.log(get(target, "a.b[5].e")) // undefined
console.log(get(target, "a.b[4].d(1,2)")) // 3
