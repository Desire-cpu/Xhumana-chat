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
    console.log('New websocket connection');
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));