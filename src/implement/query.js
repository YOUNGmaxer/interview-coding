
/**
 * query传入参数为原始数据（数据格式，每个元素都是对象）
    通过进行链式调用对数据执行操作，支持的方法有

    where(predicate) ：根据参数的条件进行筛选，参数与[].filter的参数类似
    orderBy(key,desc)：根据key的值进行排列,默认升序排列，当第二个参数为true时降序排列
    groupBy(key)：根据key的值对数据元素进行分组，合并为二维数组
    excuse()：执行所有处理并返回最终结果

    执行execute方法时才真正执行操作并返回结果
 * @param {*} data 
 */
function query(data) {
  const queryIns = new Query(data)
  return queryIns
}

class Query {
  tasks = []
  data = []

  constructor(data) {
    this.data = data
  }

  where(predicate) {
    this.tasks.push(() => {
      this.data = this.data.filter(predicate)
    })
    return this
  }

  orderBy(key, order = false) {
    this.tasks.push(() => this.data.sort((a, b) => {
      if (a[key] > b[key]) return order ? -1 : 1
      if (a[key] < b[key]) return order ? 1 : -1
      return 0
    }))
    return this
  }

  groupBy(key) {
    this.tasks.push(() => {
      const map = new Map()
      for (const item of this.data) {
        const value = item[key]
        if (!map.has(value)) {
          map.set(value, [item])
        } else {
          map.get(value).push(item)
        }
      }

      const result = []
      for (const item of map.values()) {
        if (item.length > 1) {
          result.push(item)
        } else {
          result.push(...item)
        }
      }
      this.data = result
    })
    return this
  }

  execute() {
    this.tasks.forEach((fn) => fn())
    return this.data
  }
}

const data = [
  { name: "foo", age: 16, city: "shanghai" },
  { name: "bar", age: 24, city: "hangzhou" },
  { name: "fiz", age: 22, city: "shanghai" },
  { name: "baz", age: 19, city: "hanzghou" },
  { name: "bae", age: 23, city: "hangzhou" },
];

query(data)
  .where((item) => item.age > 18)
  .orderBy("name")
  .groupBy("city")
  .execute();

