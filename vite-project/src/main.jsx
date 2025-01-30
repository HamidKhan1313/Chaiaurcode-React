import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime.js'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App  | Chai </h1>
    </div>
  )
}
// const reactElement = {
//   type: 'a',
//   props: {
//       href : "https://google.com",
//       target: "_blank"
//   },
//   Children: "click me to go google"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>
    visit google
  </a>
)

const anotherUser = 'chai aur code '

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)


createRoot(document.getElementById('root')).
render(

reactElement
)
