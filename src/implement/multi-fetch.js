/**
 * 带并发限制的批量请求函数
 * @param {*} urls 
 * @param {*} max 
 * @param {*} callback 
 */
function multiFetch(urls, max, callback) {
  const urlCount = urls.length;
  const urlsWithIndex = urls.map((url, index) => ({ url, index }));
  const result = [];

  // 批量发起请求
  for (let i = 0; i < urlCount && i < max; i++) {
    request(urlsWithIndex.shift());
  }

  function request({ url, index }) {
    fetch(url).then(res => {
      result[index] = res;
    }).catch(err => {
      result[index] = err;
    }).finally(() => {
      // 进行下一个请求
      if (urlsWithIndex.length) request(urlsWithIndex.shift());
      // 全部请求完成
      if (result.length === urlCount) callback(result);
    });
  }
}
