import React from 'react'

export class Board extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <h1>Board | {this.props.title}</h1>
    )
  }
}

export default Board