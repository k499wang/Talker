import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageText = () => {
  const [message, setMessage] = useState("");
  const {sendMessage, loading} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message"
          className="border border-gray-300 rounded-md p-3 w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Send'}
        </button>
      </form>
    </div>
  )
}

export default MessageText;
