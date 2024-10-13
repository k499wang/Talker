import express from 'express'; // Import express, which is a web framework for Node.js, we changed the package.json to use modules (type, module)
import dotenv from 'dotenv'; // Import dotenv, which is a module to read environment variables from a .env file

import authRoutes from './routes/auth.routes.js'; // Import the authRoutes from the routes folder
import {connectToMongoDB} from './db/connect.js';

const app = express(); // Initialize express, we will try to create the express server
const PORT = process.env.PORT || 3000; // We will set the port to 3000, if the environment variable PORT is not set

dotenv.config(); // We will call the config method on dotenv to read the .env file and make the environment variables available

app.use(express.json()); // We will use the express.json() middleware to parse the request body as JSON from req.body

app.use("/api/auth", authRoutes) // when something calls with this route, call the authRoutes



app.listen(PORT, () => { // We will make the server listen on port 3000, and we will log a message to the console to confirm that the server is running
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
  });
 


  // Get accepts, route and a callback function
//app.get('/', (req, res) => { // Get request handler for /, is the root URL of the server
  //  res.send('Hello World'); // (req, res) is the callback function, which will send the response 'Hello World' to the client
//});