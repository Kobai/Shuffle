const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// local port
const port = 4001

const app = express();

const server = http.createServer(app);

// creates socket using the server instance 
const io = socketIO(server);

io.on('connection', socket => { 
    console.log("User Connected")

    socket.on("voted", () => {
        console.log("voted called upon");
        io.sockets.emit("update_ranking", "red");
    })

    socket.on('disconnect', () => {
        console.log("User Disconnected")
    })
})

server.listen(port, () => console.log(`Listening on port ${port}`))