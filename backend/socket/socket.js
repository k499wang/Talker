import {Server } from 'socket.io'; // import the Server class from the socket.io library
import http from 'http'; // import the http module
import express from 'express';

const app = express();


const server = http.createServer(app); // create a server using the http module and pass the express
const io = new Server(server, {
    cors:{
        origin: '*',
        methods: ['GET','POST'],
        credentials: true
    }
})

const userSocketMap = {};


export const getReceiverSocket = (receiverId) => {
    console.log('userSocketMap:', userSocketMap);
    console.log('receiverId:', receiverId);
    return userSocketMap[receiverId];
}


io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    
    if(userId){
        console.log('user connected with id:', userId);
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap)) // IO is the server, emit is a method that sends an event to all connected clients


    socket.on('disconnect', () => {
        console.log('user disconnected with id:', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    }); 

})

export { app, io, server };
