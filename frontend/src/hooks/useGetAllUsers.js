import React, { useEffect } from 'react'

const useGetAllUsers = () => {

    const [loading, setLoading] = React.useState(false);
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                let response = await fetch('http://localhost:3001/api/users/getallusers', {
                    method: 'GET',
                    credentials: 'include', // Include cookies in cross-origin requests
                  });
          
                  let data;
                  const contentType = response.headers.get('content-type');
                  if (contentType && contentType.indexOf('application/json') !== -1) {
                      data = await response.json();
                  } else {
                        console.log(response);
                      throw new Error('Response is not JSON');
                  }

                  console.log("DATA FROM API: " + data);
                  if (data.error) {
                    throw new Error('Failed to fetch conversations');
                  }
          
                  setUsers(data.users);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading };
}

export default useGetAllUsers;