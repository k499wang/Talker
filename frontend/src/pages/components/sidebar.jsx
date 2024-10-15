import React from 'react'
import SearchInput from './searchinput'

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className = "divider px-3">  
      </div>
      <Chats></Chats>
    </div>
  )
}

export default Sidebar
