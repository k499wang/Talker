import React from 'react'
import Messages from './messages'
import MessageText from './messagetext'
const MessageContainer = () => {
return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white m-4 flex flex-col">
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-4'>Messages</h1>
        </div>
        <div>
            <Messages></Messages>
        </div>

        <div>
            <MessageText></MessageText>
        </div>
    </div>
)
}

export default MessageContainer
