import react, { useEffect } from 'react'

const useGetFriends = () => {
    const [loading, setLoading] = React.useState(false);
    const [friends, setFriends] = React.useState([]);

    useEffect(() => { // immediately run and then run when the dependencies change
        const getFriends = async () => {
            setLoading(true);

            try {
                let response = await fetch('/api/friends/getFriends', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // Include cookies in cross-origin requests
                });

                let data = await response.json();
                if (data.error) {
                    throw new Error('Failed to fetch friends');
                }

                setFriends(data.users);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getFriends();
    }, []);

    return { friends, loading };
}

export default useGetFriends;