const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
// console.log(__dirname + '/../public');
// console.log(publicPath);

const {generateMessage, generateLocationMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined to chat'));



    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
        // socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    }); 

    

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin',coords.latitude, coords.longitude));
    });

    socket.on('disconnect', () => {
        console.log('Disconnected');
    });
});









server.listen(3000, () => {
    console.log(`Server is up on the port ${port}`);
});