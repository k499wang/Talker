import React from 'react';
import useConversation from '../zustand/useConversation';
import { useSocketContext } from '../context/SocketContext';

const Chat = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  console.log(isOnline);

  // Check if this chat is the selected one by comparing ids
  const isSelected = selectedConversation && selectedConversation._id === conversation._id;

  return (
    <div
      className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer 
      ${isSelected ? "bg-slate-400" : ""} `} // Apply background color if selected and online class if online
      onClick={() => setSelectedConversation(conversation)} // Set this chat as selected
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img src={conversation.profilePicture} alt='user avatar' />
					</div>
				</div>

      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">{conversation.username}</h1>
      </div>
    </div>
  );
};

export default Chat;
