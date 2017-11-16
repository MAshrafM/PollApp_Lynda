import React from 'react'
import io from 'socket.io-client'
import Header from './parts/Header'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 'disconnected'
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
  }
  
  render(){
    return (
      <div>
        <Header title="New Header" status={this.state.status} />
      </div>
    )
  }
}

export default App
