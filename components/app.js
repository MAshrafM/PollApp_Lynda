import React from 'react'
import io from 'socket.io-client'

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
      <h1>
        Hello World From React
      </h1>
    )
  }
}

export default App
