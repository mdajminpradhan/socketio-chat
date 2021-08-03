const app = require('express')();
const server = require('http').createServer(app)

io = require('socket.io')(server, {
    cors: {
      origin: "*"
    }
  });


io.on("connection", (socket) => {
    console.log('what is socket', socket)
    console.log('Socket is active to be connected')


    socket.on('chat', (payload) => {
        console.log("what is payload", payload)
        io.emit("chat", payload)
    })
})




// assigning port
const port = process.env.PORT || 5000;



// creating server
server.listen(port, () => {
    console.log('Server started successfully at port 5000...')
})