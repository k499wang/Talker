import User from '../models/user.model.js'; // import the User model from the models folder
import Conversation from '../models/conversation.model.js'; // import the Conversation model from the models folder


export const getRandomUsers = async (req, res) => {
    try{
        const currentUser = req.user;
        const users = [];

        // Get up to a maximum of 3 random users
        const randomUsers = await User.aggregate([
            { $match: { _id: { $ne: currentUser._id } } }, // match all users except the current user
            { $sample: { size: 3 } } // get 3 random users
        ]);

        users.push(...randomUsers); // the spread operator

        res.status(200).json({users});
    }
    catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Getting Users"})
    }
}

export default getRandomUsers;
