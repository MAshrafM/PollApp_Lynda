import React from 'react'
import Display from './parts/Display'
import Join from './parts/Join'

export class Audience extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <h1>Join The Session</h1>
          <hr />
          <Join emit={this.props.emit} />
        </Display>
      </div>
    )
  }
}

export default Audience