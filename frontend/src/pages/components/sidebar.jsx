import React from 'react'
import SearchInput from './searchinput'
import Chats from './chats'
import LogoutButton from './logoutbutton'
// Fix Formatting


const Sidebar = () => {
  return (
    <div className="border-r"> 
      <SearchInput />
      <div className="divider px-3">  
      </div>
      <Chats />
      <div className="divider px-3"></div>
      <LogoutButton />
    </div>


  )
}

export default Sidebar
