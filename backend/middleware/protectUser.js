import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectUser = async (req, res, next) => {
    try{

        const token = req.cookies.jwt; // get the token from the cookie
        console.log(req.cookies);
        if(!token){ // if no token is present in the cookie, return unauthorized
            return res.status(401).json({message: "Unauthorized, no token present"});
        }

        let decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token with the secret key
        if(!decoded){
            return res.status(401).json({message: "Unauthorized, wrong secret"});
        }


        const user = await User.findById(decoded.id).select("-password"); // find the user by the userId
        if(!user){ // if no user is found, return unauthorized
            console.log(decoded);
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

export default protectUser;