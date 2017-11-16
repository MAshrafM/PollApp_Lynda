import React from 'react'
import io from 'socket.io-client'
import Header from './parts/Header'

export class App extends React.Component {
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  }
  
  connect () {
    console.log('Connected: '+ this.socket.id)
  }
  
  render(){
    return (
      <div>
        <Header title="New Header" />
      </div>
    )
  }
}

export default App
