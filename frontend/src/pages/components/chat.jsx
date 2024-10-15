import React from 'react'

const Chat = () => {
  return (
      <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer'>
        <div className="w-12 rounded-full">
          <img src="https://s6.imgcdn.dev/HnXma.png"/>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">John Doe</h1>
          <p className="text-sm text-gray-500">Hello World</p>
        </div>
      </div>
      
  )
}

export default Chat
