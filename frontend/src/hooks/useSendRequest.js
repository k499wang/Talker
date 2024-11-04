import React, { useState } from 'react';

const sendRequest = async ({ user, friend, setFriendRequests }) => {
    const [loading, setLoading] = useState(false);

    setLoading(true);

    try {
        let response = await fetch(`/api/friends/sendRequest/${friend._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include cookies in cross-origin requests
            body: JSON.stringify({ user, friend }), // Not needed in our backend
        });

        let data = await response.json();
        if (data.error) {
            throw new Error('Failed to send request');
        }

        setFriendRequests(data.friendRequests);

    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
