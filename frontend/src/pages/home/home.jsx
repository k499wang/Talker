import React from 'react'
import Sidebar from '../components/sidebar'
import MessageContainer from '../components/messagecontainer'
import RandomChats from '../components/randomChats'
const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="bg-white rounded-lg p-8 text-center flex-grow">
        <div className="flex h-full w-full">
          <div className="w-1/4 h-full">
            <Sidebar />
          </div>
          <div className="w-3/4 h-full">
            <MessageContainer />
          </div>
        </div>
      </div>
      <div className="w-full">
        <RandomChats />
      </div>
    </div>
  )
}

export default Home
