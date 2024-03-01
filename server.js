const path = require('path');
const http = require('http');
const express = require('express');
const sockeio = require('socket.io');
const { Socket } = require('dgram');


const app = express();
const server = http.createServer(app);
const io = sockeio(server);

// static folder
app.use(express.static(path.join(__dirname, 'public')));
// run when someone connects

io.on('connection', socket => {
    
    // welcome to xhumana-chat
    socket.emit('message', 'welcome to xhumana');

    //when a user connects broadcast
    socket.broadcast.emit('message', 'A user has joined the chat');

    //when disconnetced 
    socket.on('disconnected', () => {
        io.emit('message', 'A user has left the chat');
    });

    //listen for char message
    socket.on('chatMessage', (msg) => {
        io.emit('message', msg);
    })

});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));