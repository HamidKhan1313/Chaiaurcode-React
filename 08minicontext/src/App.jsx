
import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/usercontextprovider'

function App() {
 

  return (
    <UserContextProvider>
     <h1>React with chai</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
