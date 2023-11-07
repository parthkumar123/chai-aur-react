import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const increaseValue = () => {
    setCounter(counter + 1)
  }
  const decreaseValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>
        Counter Value : {counter}
      </h1>
      <button onClick={increaseValue}>Increse Value</button>
      <br /><br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
