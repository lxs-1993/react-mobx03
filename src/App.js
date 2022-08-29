// App.js
import CounterStore from "./store/Counter"

const counterStore = new CounterStore()

import Counter from './Counter.js'


function App() {
  return <Counter counterStore={counterStore} />
}

export default App