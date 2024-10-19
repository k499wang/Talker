import jwt from 'jsonwebtoken' // securely transmit information between objects as a JSON objecte

const generateTokenAndSetCookie = (res, id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, { // This is how we create a token
        expiresIn: '30d' // takes the payload, userID information will be in the token
    });

    res.cookie('jwt', token, {
        httpOnly: true, // this field means that the cookie cannot be accessed by JavaScript
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        secure: process.env.NODE_ENV === 'production', // true in production
        sameSite: "strict" // Protects against CSRF attacks
    });

    return token;
}

export default generateTokenAndSetCookie; // export the generateTokenAndSetCookie function to be used in other files