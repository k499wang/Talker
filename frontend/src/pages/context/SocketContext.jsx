import { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "../context/AuthContext";
import { useContext } from "react";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
   const [socket, setSocket] = useState(null);
   const [onlineUsers, setOnlineUsers] = useState([]);
   const {authUser} = useAuth();

    useEffect(() => {
        if(authUser){
            const newSocket = io("https://talker-qz49.onrender.com/", {
                query: {
                    userId: authUser._id
                }
            }); 
            setSocket(newSocket);

            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

        } else{
            if(socket){
                socket.disconnect();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}