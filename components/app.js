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
      speaker: ''
    }
    this.emit = this.emit.bind(this)
  }
  
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', () => {
      this.setState({ status: 'connected' })
      let member = sessionStorage.member ? JSON.parse(sessionStorage.member) : null
      if(member) {
        this.emit('join', member)
      }
    })
    this.socket.on('disconnect', 
    () => {
      this.setState({ status: 'disconnected' })
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
