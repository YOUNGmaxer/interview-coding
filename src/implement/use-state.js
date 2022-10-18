/**
 * 使用 useReducer 实现 useState
 */
function useState(initialState) {
  const [state, dispatch] = useReducer((state, action) => {
    return typeof action === 'function' ? action(state) : action
  }, typeof initialState === 'function' ? initialState() : initialState)

  return [state, (value) => dispatch(value)]
}
