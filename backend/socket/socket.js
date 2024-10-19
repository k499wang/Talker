import { Server } from 'socket.io'; // import the Server class from the socket.io library
import http from 'http'; // import the http module
import express from 'express';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000', 'https://talker-qz49.onrender.com', 'http://localhost:3001'];

app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // allow cookies to be sent with the request
}));

// CORS middleware
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin); // Allow specific origins
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

const server = http.createServer(app); // create a server using the http module and pass the express

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        methods: ['GET', 'POST'],
        credentials: true
    }
})

server.use(cors({
    origin: "*", // allow both localhost and deployed frontend
    credentials: true, // allow cookies to be sent with the request
  }));

const userSocketMap = {};

export const getReceiverSocket = (receiverId) => {
    console.log('userSocketMap:', userSocketMap);
    console.log('receiverId:', receiverId);
    return userSocketMap[receiverId];
}

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) {
        console.log('user connected with id:', userId);
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap)) // IO is the server, emit is a method that sends an event to all connected clients

    socket.on('disconnect', () => {
        console.log('user disconnected with id:', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    });
});

export { app, io, server };
