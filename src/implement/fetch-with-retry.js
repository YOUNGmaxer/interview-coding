async function fetchWithRetry(url) {
  let count = 0;

  async function fetchData() {
    try {
      const data = await globalThis.fetch(url);
      return { code: 0, data: data.json() };
    } catch (err) {
      if (count < 3) {
        count++;
        return await fetchData();
      }

      return { code: -1, error: err, retryTimes: count };
    }
  }

  return await fetchData();
}

(async () => {
  const data = await fetchWithRetry('https://dummyjson.com/products/1');
  console.log(data);
})();
