import React from 'react'
import useGetConversations from '../../hooks/useGetConversations'
import Chat from './chat'

//  TODO NEW FEATURE: Resizable Chat Component
const Chats = () => {
  const { conversations, loading } = useGetConversations();
  return (
      <div className="flex flex-col overflow-auto h-full max-h-80">
          {conversations.map((conversation) => {
              return <Chat key={conversation._id} conversation={conversation} />;
          })}
      </div>
  )
}

export default Chats
