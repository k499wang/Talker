import Conversation from '../models/conversation.model.js';

export const sendMessage = async (req, res) =>{
    try{   
        const {message} = req.body; // message from user as input
        const {id: receiverId} = req.params; // destructuring id from params
        const senderId = req.user._id; // Need Middleware, what if not authenticated?
        // The difference between id and _id is that _id is the key for the ObjectId in MongoDB, while id is the key for the id in the database
    
        let conversation = await Conversation.findOne({
            participants: {$all : [receiverId, senderId]} // find a conversation where both participants are in the array
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [receiverId, senderId],
                messages : []
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage);
            await conversation.save();
            await newMessage.save();
            // SOCKET FUNCTIONALITY HERE


            res.status(201).json({message: "Message sent successfully"});
        }
    
    
    } catch (error){    
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})
    }
}   



