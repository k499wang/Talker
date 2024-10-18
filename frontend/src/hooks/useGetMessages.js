import React, { useEffect, useState } from 'react';
import useConversation from '../pages/zustand/useConversation';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const getMessages = async () => {
        console.log('Fetching messages...');
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:3001/api/messages/get/${selectedConversation._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            const data = await response.json();
            console.log("WHY:" + JSON.stringify(data))
            setMessages(data);  // Automatically updates messages in zustand store

            if (data.error) {
                throw new Error('Failed to fetch messages');
            }

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }

        return messages;
    };

    useEffect(() => {
        if (selectedConversation?._id) {
            getMessages();
        }
    }, [selectedConversation?._id]);

    useEffect(() => {
        getMessages();
    }, [setMessages]);

    return { messages, loading};
};

export default useGetMessages;
