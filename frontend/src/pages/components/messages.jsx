import React, { useEffect, useRef } from 'react'
import Message from './message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages'


const Messages = () => {
    const {messages, loading}  = useGetMessages();
    useListenMessages();
    const lastMessage = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessage.current?.scrollIntoView({behavior: 'smooth'});
        }, 200); // Delay to allow messages to load, scroll to the bottom
    },[messages])


    return (
        <div className="flex flex-col overflow-auto h-full max-h-80">
            {loading ? (
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading...</p>
                </div>
            ) : (
                messages.length > 0 ? (
                    messages.map((message) => (
                        <div key = {message._id}
                            ref={lastMessage}>

                            <Message message={message} /> 
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">No messages</p>
                    </div>
                )
            )}
        </div>
    )
}

export default Messages