const express = require('express')
const app = express()

// variables used accross app
let connections = []
let title = 'Untitled'
// use express
app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))
// init server and scoket
const server = app.listen(3000)
const io = require('socket.io').listen(server)
//socket connection
io.sockets.on('connection', socket => {
  // handle disconnnect
  socket.once('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1)
    socket.disconnect()
    console.log("Disconnected: %s sockets remaining.", connections.length)
  })
  // emit title
  socket.emit('welcome', {
    title: title
  })
  // join event
  socket.on('join', payload => {
    console.log('Audience Joined: %s', payload.name)
  })
  // number of sockets connection
  connections.push(socket)
  console.log("Connected: %s sockets connected", connections.length)
})

console.log('Server is running at localhost:3000')