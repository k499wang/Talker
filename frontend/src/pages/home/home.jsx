import React from 'react'
import Sidebar from '../components/sidebar'

const Home = () => {
  return (
      <div className="flex sm:h-[900px] m:h-[1400px] justify-center items-center h-screen">
          <div className="bg-white rounded-lg p-8 shadow-lg shadow-blue-300/50 text-center w-1/2">
          <h1> Home </h1>
            
            <Sidebar></Sidebar>

          </div>
      </div>
  )
}

export default Home
