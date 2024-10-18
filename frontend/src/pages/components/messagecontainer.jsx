import React from 'react'
import Messages from './messages'
import MessageText from './messagetext'
import useConversation from '../zustand/useConversation'

const MessageContainer = () => {
    const { selectedConversation } = useConversation();

    return (
        <div className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white m-4 flex flex-col">
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold mb-4'>Messages</h1>
            </div>
            {selectedConversation ? (
                <>
                    <div>
                        <Messages />
                    </div>
                    <div>
                        <MessageText />
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-500">
                    Please select a chat to view messages.
                </div>
            )}
        </div>
    );
}

export default MessageContainer
