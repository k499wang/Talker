import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocket } from '../socket/socket.js';
import { io } from '../socket/socket.js';


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

            // or await.promiseAll([conversation.save(), newMessage.save()]);

            console.log("Receiver ID: ", receiverId);
            const receiverSocketId = getReceiverSocket(receiverId);
            console.log("Receiver Socket ID: ", receiverSocketId);
            
            if(receiverSocketId){
                console.log("Sending message to receiver...");
                io.to(receiverSocketId).emit("message", newMessage); // send the message to the receiver
            }

            res.status(201).json(newMessage);
        }
    
    
    } catch (error){    
        console.log(error);
        res.status(500).json({error: error.message})
    }
}   


export const getMessages = async (req, res) => {
    try{
        // You should not be able to get messages for another user tho.

        const {id: receiverId} = req.params;
        const senderId = req.user._id; // which comes from the protectrOUTE FUNCTION

        const conversation = await Conversation.findOne({
            participants: {$all: [receiverId, senderId]}
        }).populate('messages'); // populate the messages in the conversation, give us the actual messages

        // Above gives us a whole array of messages, with conversations as objects

        if(conversation){
            res.status(200).json(conversation.messages);
        } else {
            res.status(200).json([]); // return an empty array if no conversation is found
        }

        


    } catch (error){

    }
}