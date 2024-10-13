import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default:[], // default array
        }
    ]
}, {timestamps: true});

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation; // export the Conversation model to be used in other files, a Conversation is a model for a conversation in the database