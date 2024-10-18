import React, { useEffect } from 'react'

const useGetRandomConversations = () => {
  const [loading, setLoading] = React.useState(false);
  const [conversations, setConversations] = React.useState([]);

  useEffect(() => { // immediately run and then run when the dependencies change
    const getRandomConversations = async () => {
      setLoading(true);

      try {
        let response = await fetch('http://localhost:3001/api/users/getrandomusers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies in cross-origin requests
        });

        let data = await response.json();
        console.log(data);
        if (data.error) {
          throw new Error('Failed to fetch conversations');
        }

        setConversations(data.users);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getRandomConversations();
  }, []);

  return { conversations, loading };
}

export default useGetRandomConversations
