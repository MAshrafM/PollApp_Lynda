import React from 'react'

export class Speaker extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <h1>Speaker | {this.props.status}</h1>
    )
  }
}

export default Speaker