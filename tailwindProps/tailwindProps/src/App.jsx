import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Mayur",
    age: "23",
  }
  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded mb-4'>Tailwind test</h1>
      <Card userName="React" btnText="click me"/>
      <Card userName="venilla" btnText="visit me"/>
    </>
  )
}

export default App
