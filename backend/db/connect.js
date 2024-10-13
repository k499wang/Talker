import mongoose from 'mongoose';

const connectToMongo = async() => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI); // connect to the MongoDB database
        console.log('Connected to MongoDB');
    } 
    catch (error) {
        console.log(error);
    }
}

export const connectToMongoDB = connectToMongo; // export the connectToMongo function 