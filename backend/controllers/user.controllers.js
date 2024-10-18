import User from '../models/user.model.js'; // import the User model from the models folder
import Conversation from '../models/conversation.model.js'; // import the Conversation model from the models folder

export const getUsers = async (req, res) => {
    try {
        const currentUser = req.user;
        const users = [];

        const conversations = await Conversation.find({
            participants: { $in: [currentUser._id] } // find all conversations where the current user is a participant
        });    

        // Loop through all the conversations see if the current user is a participant in the conversation
        for (let conversation of conversations){
            for(let participant of conversation.participants){
                if(participant.toString() !== currentUser._id.toString()){
                    let user = await User.findById(participant).select("-password");
                    if(user){
                        users.push(user);
                    }

            }
        }
    }


    res.status(200).json({users});

    } catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Getting Users"})
    }
}

export default getUsers; // export the getUsers function to be used in other files