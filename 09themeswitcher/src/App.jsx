
import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme.js';
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from './components/card.jsx'; // or import { Card } from './components/Card';


function App() {
const [themeMode, setThememode] = useState("light")

const LightTheme = () => {
  setThememode("Light")
}
const DarkTheme = () => {
  setThememode("Dark")
}

// actual change  in theme 
useEffect(() => {
document.querySelector('html').classList.remove("Light", "Dark")
document.querySelector('html').classList.add(themeMode)
}, [])

  return (
    <ThemeProvider value={{themeMode, LightTheme, DarkTheme}}>
     
<div className="flex flex-wrap min-h-screen items-center">
   <div className="w-full">
<div className="w-full max-w-sm mx-auto flex justify-end mb-4">
<ThemeBtn />
                        
    </div>

    <div className="w-full max-w-sm mx-auto">
     <Card/>
                       
      </div>
    </div>
    </div>

    </ThemeProvider>
  )
}

export default App
