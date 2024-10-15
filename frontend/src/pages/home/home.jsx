import React from 'react'
import Sidebar from '../components/sidebar'
import MessageContainer from '../components/messagecontainer'

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <div className="bg-white rounded-lg p-8 text-center h-full w-full">
        <div className="flex h-full w-full">
          <div className="w-1/4 h-full">
            <Sidebar />
          </div>
          <div className="w-3/4">
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
