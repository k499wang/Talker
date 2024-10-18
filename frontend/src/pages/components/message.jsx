import {useAuth} from "../context/AuthContext";
import useConversation from '../zustand/useConversation'

const Message = ({ message }) => {
	const { authUser } = useAuth();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	const profilePicture = fromMe ? authUser.profilePicture : selectedConversation.profilePicture;

	return (
		<div className={`chat ${chatClassName}`}>
			<div className="chat-image">
				<img src={profilePicture} alt="Profile" className="w-10 h-10 rounded-full" />
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
		</div>
	);
};
export default Message;