const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
const cors = require('cors')

app.use(cors())

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('msg', (msg) => {
        console.log("received message ", msg)
        socket.emit('bot message', "Response")
    })
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});