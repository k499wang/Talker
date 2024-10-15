import React from 'react'

const MessageText = () => {
  return (
    <div>
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Type a message" className="border border-gray-300 rounded-md p-3 w-full" />
            <button type="submit" className="btn btn-primary">Send</button>
        </form>

      
    </div>
  )
}

export default MessageText
