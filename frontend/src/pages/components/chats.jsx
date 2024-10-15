import React from 'react'
import Chat from './chat'

//  TODO NEW FEATURE: Resizable Chat Component
const Chats = () => {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      <div className="border-b border-gray-300 hover:bg-base-200 transition duration-300 ease-in-out">
        <Chat />
      </div>
      <div className="border-b border-gray-300 hover:bg-base-200 transition duration-300 ease-in-out">
        <Chat />
      </div>
      <div className="border-b border-gray-300 hover:bg-base-200 transition duration-300 ease-in-out">
        <Chat />
      </div>
      <div className="border-b border-gray-300 hover:bg-base-200 transition duration-300 ease-in-out">
        <Chat />
      </div>
    </div>
  )
}

export default Chats
