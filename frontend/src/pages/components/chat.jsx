import React from 'react'

const Chat = () => {
  return (
    <div className='flex gap-2 items-center hover:bg-slate-500 rounded p-2 py-1 cursor-pointer '>
      <div className = 'avator online'>
        <div>
            <img src = "https://randomuser.me/api/port"></img>
        </div>
      </div>
    </div>
  )
}

export default Chat
