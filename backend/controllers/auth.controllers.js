import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // Import bcryptjs, which is a library to hash passwords
import generateTokenAndSetCookie from '../utils/generateToken.js';


export const loginUser = async (req, res) => { // asynchronous function, returns a promise
    try{
        const {email, password} = req.body; 

        if (!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const user = await User.findOne({email}); // await the promise to resolve, then assign the value to user
        
        if(!user){            
            return res.status(400).json({message: "Invalid credentials"});
        }

        // ERROR, if you try reading the password of a user not found, it will return an error. Hence we need to split this


        const isPasswordCorrect = await bcryptjs.compare(password, user.password || ""); // need the or as it returns an error without it

        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid credentials"});
        }

        generateTokenAndSetCookie(res, user._id);

        res.status(200).json({
            _id: user._id,
            username: user.username
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}

export const logoutUser =  async (req, res) => {
   try{
         res.clearCookie('jwt'); // clear the cookie and send a status of 200
         res.status(200).json({message: "Logged out successfully"});

   } catch (error) {
       console.log(error);
       res.status(500).json({message: "Something went wrong"});
   }
}

export const signupUser = async (req, res) => { // a promise is an object representing the eventual completion or failure of an asynchronous operation
    try{ // async function means that the function will return a promise
        const {email, username, password, confirmPassword} = req.body; // need MongoDB to finally store this, need middleware to parse the body (in server.js)
   
        if (!email || !username || !password || !confirmPassword) {
            return res.status(400).json({message: "All fields are required"});
        }

        if (password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User with this email already exists"});
        }

        // HASH PASSWORD  
        const salt = await bcryptjs.genSalt(10); // generate a salt for the password, the higher the number the more secure
        const hashedPassword = await bcryptjs.hash(password, salt); // hash the password with the salt

        const profilePicture = 'https://avatar.iran.liara.run/username?username=' + username;

        const newUser = new User({
            email,
            username,
            password: hashedPassword,
            profilePicture
        })

        // Generate JWT TOKEN

        await generateTokenAndSetCookie(res, newUser._id); // pass the user mongoDB ID as the ID



        // SAVE USER
        await newUser.save(); // save the user to the database
        
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
        });
   
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}   
