import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
   let myObject = {
    username : "Hamid Khan",
    age : 24
   }

   let newArr = [1,2,3,4]
  return (
    <>
     <h1 className='bg-green-400  text-black p-4 rounded-xl  ' >Tailwind test </h1>
     <Card username = "hamid" btnText="Click me"/>
     <Card  username="chaiaurcode" btnText="Visit me"/>
    </>
  )
}

export default App
