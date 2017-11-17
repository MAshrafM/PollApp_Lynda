import React from 'react'
import io from 'socket.io-client'
import Header from './parts/Header'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'disconnected',
      title: ''
    }
  }
  
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', () => {
      this.setState({ status: 'connected' })
    })
    this.socket.on('disconnect', 
    () => {
      this.setState({ status: 'disconnected' })
    })
    this.socket.on('welcome', serverState => {
      this.setState({ title: serverState.title })
    })
  }
  
  render(){
    return (
      <nav>
        <Header title={this.state.title} status={this.state.status} />
      </nav>
    )
  }
}

export default App
