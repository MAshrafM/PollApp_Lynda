import React from 'react'

export class Audience extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <h1>Audience | {this.props.title}</h1>
    )
  }
}

export default Audience