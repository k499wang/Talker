import React from 'react'
import useGetAllUsers from '../../hooks/useGetAllUsers'
import Chat from './chat'


const AllUsers = () => {
    const { users, loading } = useGetAllUsers();
    return (
            <div className="shadow-lg rounded-lg p-4 border border-gray-300">
                    <h2 className="text-xl font-bold mb-4">AllUsers</h2>
                    <div className="flex flex-row overflow-auto h-full max-h-80">
                            {users.map((user) => {
                                    console.log(users);

                                    return <Chat key={user.id} conversation={user} />;
                            })}

                    </div>
            </div>
    )

}

export default AllUsers;