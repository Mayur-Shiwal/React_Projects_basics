import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5;
  const removeValue = ()=>{
    if(counter <= 0) setCounter(0);
    else setCounter(counter-1);
    // console.log('clicked', counter);
  }
  const addValue =()=>{
    if(counter >= 20) setCounter(20);
    else setCounter(counter+1)
    // console.log('clicked', counter);
  }

  return (
    <>
      <h1>React Hooks</h1>
      <h2>Counter Values: {counter}</h2>

      <button
        onClick={addValue}
      >Increment value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrement Value</button>
    </>
  )
}

export default App
