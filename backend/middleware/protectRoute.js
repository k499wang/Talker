import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import mongoose from 'mongoose';

const protectRoute = async (req, res, next) => {
    try{

        // Check if the receiverID is valid. If not, return a 400 status code with a message
        const receiverId = req.params.id;   
        if (!mongoose.Types.ObjectId.isValid(receiverId)) { // check if receiverId is a valid ObjectId
            return res.status(400).json({ message: "Invalid receiver ID" });
        }

        let receiver = await User.findById(receiverId); // find the receiver by the receiverId
        
        if (!receiver) { // if no receiver is found, return not found
            return res.status(404).json({ message: "Receiver not found" });
        }
       
        const token = req.cookies.jwt; // get the token from the cookie
        if(!token){ // if no token is present in the cookie, return unauthorized
            return res.status(401).json({message: "Unauthorized, no token present"});
        }

        let decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token with the secret key
        if(!decoded){
            return res.status(401).json({message: "Unauthorized, wrong secret"});
        }


        const user = await User.findById(decoded.id).select("-password"); // find the user by the userId
        if(!user){ // if no user is found, return unauthorized
            return res.status(401).json({message: "Unauthorized, user not found"});
        }

        req.user = user; // set the user in the request
        
        next(); // call the next middleware, which will be the sendMessage function
    } catch (error) {
        console.log("Error in protectRoute");
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}


export default protectRoute;
