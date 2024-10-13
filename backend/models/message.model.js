import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId, // this means that the senderId will be an ObjectId from MongoDB
        ref: 'User', // the ref option is what tells Mongoose which model to use during population, references to the User collection
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId, // this means that the senderId will be an ObjectId from MongoDB
        ref: 'User', // the ref option is what tells Mongoose which model to use during population, references to the User collection
        required: true
    },
    message:{
        type: String,
        required: true
    }
    // CreatedAt and UpdatedAt are automatically added by Mongoose
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

export default Message; // export the Message model to be used in other files, a Message is a model for a message in the database