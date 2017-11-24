const express = require('express')
const _ = require('underscore')
const app = express()
// data
// problem with export in webpack need to be fixed.
const questions = [
  {
    "q": "What is you favorite Language?",
    "a": "Javascript",
    "b": "Ruby",
    "c": "C/C++",
    "d": "Python"
  },
  {
    "q": "What is your favorite framework?",
    "a": "Angular",
    "b": "React",
    "c": "Rails",
    "d": "Other"
  },
  {
    "q": "What is your profession ?",
    "a": "Engineer",
    "b": "Teacher",
    "c": "Student",
    "d": "Other"
  },
  {
    "q": "Where are you from ?",
    "a": "USA",
    "b": "India",
    "c": "Egypt",
    "d": "Other"
  }
]
// variables used accross app
let connections = []
let audience = []
let title = 'Untitled'
let speaker = {}
let currentQuestion = false
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
    let member = _.findWhere(audience, {id: socket.id})
    if(member){
      audience.splice(audience.indexOf(member), 1)
      io.sockets.emit('audience', audience)
      console.log('%s Left.', member.name)
    } else if (socket.id === speaker.id) {
      console.log('%s has left. Presentation is over.', speaker.name)
      speaker = {}
      title = 'Untitled'
      io.sockets.emit('end', {
        title: title,
        speaker: ''
      })
    }
    connections.splice(connections.indexOf(socket), 1)
    socket.disconnect()
    console.log('Disconnected: %s sockets remaining.', connections.length)
  })
  // emit title
  socket.emit('welcome', {
    title: title,
    audience: audience,
    speaker: speaker.name,
    questions: questions,
    currentQuestion: currentQuestion
  })
  // join event
  socket.on('join', payload => {
    let newMember = {
      id: socket.id,
      name: payload.name,
      type: 'member'
    }
    audience.push(newMember)
    socket.emit('joined', newMember)
    io.sockets.emit('audience', audience)
    console.log('Audience Joined: %s', payload.name)
  })
  // start event
  socket.on('start', payload => {
    speaker.name = payload.name
    speaker.id = socket.id
    speaker.type = 'speaker'
    title = payload.title
    socket.emit('joined', speaker)
    io.sockets.emit('start', {
      title: title,
      speaker: speaker.name
    })
    console.log('Presentation Started.')
  })
  // ask event
  socket.on('ask', question => {
    currentQuestion = question
    io.sockets.emit('asked', currentQuestion)
    console.log('Question Asked: %s', question.q)
  })
  // number of sockets connection
  connections.push(socket)
  console.log("Connected: %s sockets connected", connections.length)
})

console.log('Server is running at localhost:3000')