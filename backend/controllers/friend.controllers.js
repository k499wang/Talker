import User from '../models/user.model.js'; // import the User model from the models folder


export const sendFriendRequest = async (req, res) => {
    try{
        const receiverId = req.params.id; // get the receiverId from the params
        const senderId = req.user._id; // get the senderId from the user object in the request

        const receiver = await User.findById(receiverId); // find the receiver by the receiverId
        if(!receiver){ // if no receiver is found, return not found
            return res.status(404).json({message: "Receiver not found"});
        }

        const sender = await User.findById(senderId); // find the sender by the senderId
        if(!sender){ // if no sender is found, return not found
            return res.status(404).json({message: "Sender not found"});
        }

        if(receiver.friendRequests.includes(senderId)){ // if the receiver already has a friend request from the sender
            return res.status(400).json({message: "Friend request already sent"});
        }

        if(receiver.friends.includes(senderId)){ // if the receiver is already a friend of the sender
            return res.status(400).json({message: "Already friends"});
        }

        receiver.friendRequests.push(senderId); // add the senderId to the friendRequests array of the receiver
        await receiver.save(); // save the receiver

        res.status(200).json({message: "Friend request sent"}); // return a success message
    }
    catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Sending Friend Request"})
    }
}


export const acceptFriendRequest = async (req, res) => {
    try{
        const senderId = req.params.id; // get the senderId from the params
        const receiverId = req.user._id; // get the receiverId from the user object in the request

        const sender = await User.findById(senderId); // find the sender by the senderId
        if(!sender){ // if no sender is found, return not found
            return res.status(404).json({message: "Sender not found"});
        }

        const receiver = await User.findById(receiverId); // find the receiver by the receiverId
        if(!receiver){ // if no receiver is found, return not found
            return res.status(404).json({message: "Receiver not found"});
        }

        if(!sender.friendRequests.includes(receiverId)){ // if the sender does not have a friend request from the receiver
            return res.status(400).json({message: "No friend request found"});
        }

        if(sender.friends.includes(receiverId)){ // if the sender is already a friend of the receiver
            return res.status(400).json({message: "Already friends"});
        }

        sender.friends.push(receiverId); // add the receiverId to the friends array of the sender
        receiver.friends.push(senderId); // add the senderId to the friends array of the receiver

        sender.friendRequests = sender.friendRequests.filter(id => id !== receiverId); // remove the receiverId from the friendRequests array of the sender
        await sender.save(); // save the sender
        await receiver.save(); // save the receiver

        res.status(200).json({message: "Friend request accepted"}); // return a success message
    }

    catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Accepting Friend Request"})
    }

}

export const getFriends = async (req, res) => {
    try{
        const users = [];
        const currentUser = req.user; // get the current user from the request

        for(let friendId of currentUser.friends){ // loop through the friends array of the current user
            let friend = await User; // find the friend by the friendId
            if(friend){
                users.push(friend); // add the friend to the users array
            }
        }

        res.status(200).json({users}); // return the users array

    
    }

    catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Getting Friends"})
    }
}



export const getFriendRequests = async (req, res) => {
    try{
        const users = [];
        const currentUser = req.user; // get the current user from the request

        for(let friendRequestId of currentUser.friendRequests){ // loop through the friendRequests array of the current user
            let friendRequest = await User.findById(friendRequestId); // find the friend request by the friendRequestId
            if(friendRequest){
                users.push(friendRequest); // add the friend request to the users array
            }
        }

        res.status(200).json({users}); // return the users array
    }

    catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Getting Friend Requests"})
    }

}

export const rejectFriendRequest = async (req, res) => {
    try{
        const senderId = req.params.id; // get the senderId from the params
        const receiverId = req.user._id; // get the receiverId from the user object in the request

        const sender = await User.findById(senderId); // find the sender by the senderId
        if(!sender){ // if no sender is found, return not found
            return res.status(404).json({message: "Sender not found"});
        }

        const receiver = await User.findById(receiverId); // find the receiver by the receiverId
        if(!receiver){ // if no receiver is found, return not found
            return res.status(404).json({message: "Receiver not found"});
        }

        if(!sender.friendRequests.includes(receiverId)){ // if the sender does not have a friend request from the receiver
            return res.status(400).json({message: "No friend request found"});
        }

        sender.friendRequests = sender.friendRequests.filter(id => id !== receiverId); // remove the receiverId from the friendRequests array of the sender
        await sender.save(); // save the sender

        res.status(200).json({message: "Friend request rejected"}); // return a success message
    }
    catch (error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error Rejecting Friend Request"})
    }

}