import react from 'react'
import useGetFriends from '../../hooks/useGetFriends'


const friends = () => {
    const {friends, loading} = useGetFriends();
    return (
        <div className="flex flex-col overflow-auto h-full max-h-80">
            {loading ? (
                <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading...</p>
                </div>
            ) : (
                friends.length > 0 ? (
                    friends.map((friend) => (
                        <div key = {friend._id}
                            ref={lastFriend}>
                            <Chat key={friend._id} conversation={friend} />
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500">No friends</p>
                    </div>
                )
            )}
        </div>
    )
}