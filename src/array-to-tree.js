/**
 * 将铺平的数组数据转成树结构
 * @param {*} data 
 */
function arrayToTree(data) {
  const result = [];
  const itemMap = {};

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const { id, pid } = item;

    if (!itemMap[id]) {
      itemMap[id] = {
        children: []
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id].children
    }

    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }

  return result;
}

const data = [
  {id: 1, name: '部门1', pid: 0},
  {id: 2, name: '部门2', pid: 3},
  {id: 3, name: '部门3', pid: 1},
  {id: 4, name: '部门3', pid: 0},
  {id: 5, name: '部门4', pid: 4},
  {id: 6, name: '部门5', pid: 0},
  {id: 7, name: '部门5', pid: 6},
  {id: 8, name: '部门5', pid: 7},
];

console.log(arrayToTree(data));
