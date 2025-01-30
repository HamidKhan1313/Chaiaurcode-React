import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {

   // counter = counter + 1

   // Important for interview
  //  setCounter(counter + 1)   // it makes a batch of set counter and explore all set counter pass same value so
  //  setCounter(counter + 1)   // it can print one time only so for this we can use a previous counter
  //  setCounter(counter + 1)     
  //  setCounter(counter + 1)    

    setCounter((prevCounter) => prevCounter + 1) 
    setCounter((prevCounter) => prevCounter + 1)    
    setCounter((prevCounter) => prevCounter + 1)    
    setCounter((prevCounter) => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react </h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}
    >Remove value  {counter}</button>
   <p>footer: {counter}</p>
    </>
  )
}

export default App
