import React, { useEffect } from 'react'

const useGetConversations = () => {
  const [loading, setLoading] = React.useState(false);
  const [conversations, setConversations] = React.useState([]);

  useEffect(() => { // immediately run and then run when the dependencies change
    const getConversations = async () => {
      setLoading(true);

      try {
        let response = await fetch('http://localhost:3001/api/users/getusers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies in cross-origin requests
        });

        let data = await response.json();
        if (data.error) {
          throw new Error('Failed to fetch conversations');
        }

        // If there are no users, then get the random users function

        if(data.users.length === 0) {
          let response = await fetch('http://localhost:3001/api/users/randomusers', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', // Include cookies in cross-origin requests

          });

          data = await response.json();

          if (data.error) {
            throw new Error('Failed to fetch conversations');
          }

          setConversations(data.users);
        }

        setConversations(data.users);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { conversations, loading };
}

export default useGetConversations
