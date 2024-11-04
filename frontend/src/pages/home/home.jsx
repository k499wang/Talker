import React from 'react'
import Sidebar from '../components/sidebar'
import MessageContainer from '../components/messagecontainer'
import RandomChats from '../components/randomChats'

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="bg-white rounded-lg p-8 text-center flex-grow flex">
        <div className="flex h-full w-full">
          <div className="w-1/4 h-full overflow-y-auto">
            <Sidebar />
          </div>
          <div className="w-3/4 h-full overflow-y-auto">
            <MessageContainer />
          </div>
        </div>
      </div>

    <div className="flex w-full h-1/3 mt-4 p-4">
      <div className="w-1/2 h-full overflow-y-auto pr-2 border-r border-gray-300">
        <div className="h-full overflow-y-auto">
          <RandomChats />
        </div>
      </div>
      <div className="w-1/2 h-full overflow-y-auto pl-2">
        <div className="h-full overflow-y-auto">
          <AllUsers />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home
