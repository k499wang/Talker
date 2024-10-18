import { useState } from 'react'
import Index from './pages/index/index'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Home from './pages/home/home.jsx'
import { useAuth} from './pages/context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navigate} from 'react-router-dom';

function App() {
  const {authUser} = useAuth();
  return (
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={authUser? <Navigate to ='/home' />: <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/home"/>: <Signup />} />
          <Route path="/home" element={authUser ? <Home />: <Login />} />
        </Routes>
      </div>
  )
}

export default App
