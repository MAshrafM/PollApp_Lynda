import React from 'react'
import Router from 'react-router'
import io from 'socket.io-client'
import Header from './parts/Header'
import { HashRouter } from 'react-router-dom'
import Routes from '../routes/Routes'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'disconnected',
      title: '',
      member: {},
      audience: [],
      speaker: '',
      questions: [],
      currentQuestion: false,
      results: {}
    }
    this.emit = this.emit.bind(this)
  }
  
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', () => {
      this.setState({ status: 'connected' })
      let member = sessionStorage.member ? JSON.parse(sessionStorage.member) : null
      if(member && member.type === 'audience') {
        this.emit('join', member)
      } else if (member && member.type === 'speaker') {
        this.emit('start', {
          name: member.name,
          title: sessionStorage.title
        })
      }
    })
    this.socket.on('disconnect', 
    () => {
      this.setState({ 
        status: 'disconnected',
        title: 'Untitled',
        speaker: ''
      })
    })
    this.socket.on('welcome', serverState => {
      this.setState(serverState)
    })
    this.socket.on('joined', member => {
      this.setState({ member: member })
      sessionStorage.member = JSON.stringify(member);
    })
    this.socket.on('audience', audience => {
      this.setState({ audience: audience })
    })
    this.socket.on('start', serverState => {
      this.setState(serverState)
      if(this.state.member.type === 'speaker'){
        sessionStorage.title = serverState.title
      }
    })
    this.socket.on('end', serverState => {
      console.log(serverState)
      this.setState(serverState)
    })
    this.socket.on('asked', question => {
      sessionStorage.answer = ''
      this.setState({ 
        currentQuestion: question,
        results: {a:0, b:0, c:0, d:0}
      })
    })
    this.socket.on('results', data => {
      this.setState({ results: data })
    })
  }
  
  emit (eventName, payload) {
    this.socket.emit(eventName, payload)
  }
  
  render(){
    return (
      <HashRouter>
        <div>
          <Header {...this.state} />
          <Routes emit={this.emit} {...this.state} />
        </div>
      </HashRouter>
    )
  }
}

export default App
