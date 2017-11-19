import React from 'react'
import Display from './parts/Display'

export class Audience extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <h1>Join The Session</h1>
        </Display>
      </div>
    )
  }
}

export default Audience