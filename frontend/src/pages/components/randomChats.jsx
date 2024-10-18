import React from 'react'
import useGetRandomConversations from '../../hooks/useGetRandomConversations'
import Chat from './chat'

const RandomChats = () => {
        const { conversations, loading } = useGetRandomConversations();
        return (
                <div className="shadow-lg rounded-lg p-4 border border-gray-300">
                        <h2 className="text-xl font-bold mb-4">Random Users</h2>
                        <div className="flex flex-row overflow-auto h-full max-h-80">
                                {conversations.map((conversation) => {
                                        return <Chat key={conversation.id} conversation={conversation} />;
                                })}
                        </div>
                </div>
        )
}

export default RandomChats;
