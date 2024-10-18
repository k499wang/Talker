import { useEffect } from 'react'
import { useSocketContext } from '../pages/context/SocketContext'
import useConversation from '../pages/zustand/useConversation';
const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    if(socket){
      socket.on("message", (newMessage) => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
        console.log("SOCKET LISTENING TO MESSAGE ", newMessage);

      });
    }

    return () => socket?.off("message");
  }, [socket, messages, setMessages]);
}

export default useListenMessages
