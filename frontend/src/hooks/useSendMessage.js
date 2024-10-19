import { useState } from 'react'
import useConversation from '../pages/zustand/useConversation'

const useSendMessage = () => {
    const [loading, setLoading]  = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();
    
    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    message
                })
            })

            const data = await response.json()
            
            if (data.error) {
                throw new Error('Failed to send message')
            }
            setMessages([...messages, data]) // Automatically updates messages in zustand store  

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return {sendMessage, loading}
}

export default useSendMessage
