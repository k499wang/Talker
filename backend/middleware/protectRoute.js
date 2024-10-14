import jwt from 'jsonwebtoken';

const protectRoute = async (req, res, next) => {
    try{
        const token = req.cookies.jwt; // get the token from the cookie
        if(!token){ // if no token is present in the cookie, return unauthorized
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify the token with the secret key
        if(!decoded){
            return res.status(401).json({message: "Unauthorized"});
        }

        const user = await User.FindById(decoded.userId).selection("-password"); // find the user by the userId
        if(!user){ // if no user is found, return unauthorized
            return res.status(401).json({message: "Unauthorized"});
        }

        req.user = user; // set the user in the request
        
        next(); // call the next middleware, which will be the sendMessage function
    } catch (error) {
        console.log("Error in protectRoute");;
        res.status(500).json({message: "Something went wrong"});
    }

}