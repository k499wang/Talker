import React from 'react';
import useConversation from '../zustand/useConversation';

const Chat = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Check if this chat is the selected one by comparing ids
  const isSelected = selectedConversation && selectedConversation._id === conversation._id;

  return (
    <div
      className={`flex gap-2 items-center rounded p-2 py-1 cursor-pointer 
      ${isSelected ? "bg-slate-400" : ""}`} // Apply background color if selected
      onClick={() => setSelectedConversation(conversation)} // Set this chat as selected
    >
      <div className="w-12 rounded-full">
        <img src={conversation.profilePicture} alt="Profile" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold">{conversation.username}</h1>
        <p className="text-sm text-gray-500">Hello World</p>
      </div>
    </div>
  );
};

export default Chat;
