import React from 'react'

const Message = () => {
return (
    <div className='chat chat-end'>
            <div className="chat-image avatar">
                    <div className='w-10 rounded-full'>
                            <img src="https://s6.imgcdn.dev/HnXma.png" alt="Avatar"/>
                    </div>
            </div>

            <div className="chat-content">
                    <div className="chat-bubble">Not leave it in Darkness</div>
                    <div className="chat-time">10:00 PM</div>
            </div>
    </div>
)
}

export default Message
