import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ // a Schema is a blueprint for a MongoDB collection
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: ""
    },

    friends:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],

    friendRequests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }]  
});

const User = mongoose.model("User", userSchema); // a model is a class with which we construct documents, uppercaes and capitalized 

export default User; // export the User model to be used in other files, a User is a model for a user in the database