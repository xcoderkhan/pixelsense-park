import './App.css'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {

  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button>Increse</button>
      <button>Decrese</button>
    </div>

  )
}


export default App
