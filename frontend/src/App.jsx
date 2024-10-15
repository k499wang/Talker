import { useState } from 'react'
import Index from './pages/index/index'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Home></Home>
  )
}

export default App
