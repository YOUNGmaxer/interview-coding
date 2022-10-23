/**
 * useCacheRequest<T>(fetch: ()=>Promise<T>, cacheKey: string): {data:<T>, loading: bool, run: ()=>Promise<T>}
 */
function useCacheRequest(fetch, cacheKey) {
  const loading = useRef(true)
  const data = useRef(null)

  async function run() {
    loading.current = true
    try {
      data.current = await fetch()
    } catch (err) {
      console.error(err);
    } finally {
      loading.current = false
    }
  }

  if (!loading.current) {
    data.current = data.current || JSON.parse(localStorage.getItem(cacheKey) ?? null)
    if (!data.current) {
      run()
    }
  }

  return {
    data: data.current,
    loading: loading.current,
    run,
  }
}
