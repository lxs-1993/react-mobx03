import { observer } from "mobx-react-lite"
function Counter({ counterStore }) {
  console.log("counterStore",counterStore)
  const { count, increment, decrement } = counterStore
  return (
    <div>
      <button onClick={increment}>
        INCREMENT
      </button>
      <button>{count}</button>
      <button onClick={decrement}>
        DECREMENT
      </button>
    </div>
  )
}
export default observer(Counter)