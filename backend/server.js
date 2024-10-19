import express from 'express'; // Import express, which is a web framework for Node.js, we changed the package.json to use modules (type, module)
import dotenv from 'dotenv'; // Import dotenv, which is a module to read environment variables from a .env file
import cors from 'cors'; // Import cors, which is a middleware to enable Cross-origin resource sharing
import path from 'path';

import cookieParser from 'cookie-parser';
import messageRoutes from './routes/message.routes.js'
import authRoutes from './routes/auth.routes.js'; // Import the authRoutes from the routes folder
import {connectToMongoDB} from './db/connect.js';
import userRoutes from './routes/user.routes.js';

import {app, server} from './socket/socket.js';
const PORT = process.env.PORT || 3001; // We will set the port to 3000, if the environment variable PORT is not set

const __dirname = path.resolve()



dotenv.config(); // We will call the config method on dotenv to read the .env file and make the environment variables available

app.use(cors({
  origin: 'http://localhost:3000', // allow requests from your frontend origin
  credentials: true, // allow cookies to be sent with the request
}));

const express = require('express');
const app = express();

// CORS middleware
app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000', 'https://talker-qz49.onrender.com'];
    const origin = req.headers.origin;
    
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin); // Dynamically set the allowed origin
    }

    res.header('Access-Control-Allow-Credentials', 'true'); // Allow cookies
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204); // No content for preflight requests
    }

    next();
});


app.use(express.json()); // We will use the express.json() middleware to parse the request body as JSON from req.body
app.use(cookieParser()); // We will use the cookieParser() middleware to parse the cookies from the request in ProtectRoute

app.use("/api/auth", authRoutes) // when something calls with this route, call the authRoutes
app.use("/api/messages", messageRoutes) 
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html')) // Send the index.html file when a GET request is made to any route
});

server.listen(PORT, () => { // We will make the server listen on port 3000, and we will log a message to the console to confirm that the server is running
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
  });
 


  // Get accepts, route and a callback function
//app.get('/', (req, res) => { // Get request handler for /, is the root URL of the server
  //  res.send('Hello World'); // (req, res) is the callback function, which will send the response 'Hello World' to the client
//});