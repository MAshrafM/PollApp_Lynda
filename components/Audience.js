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
          <Display if={this.props.member.name}>
            <h2>Welcome {this.props.member.name}</h2>
            <p>Questions will appear here.</p>
          </Display>
          <Display if={!this.props.member.name}>
            <h1>Join The Session</h1>
            <hr />
            <Join emit={this.props.emit} />
          </Display>
        </Display>
      </div>
    )
  }
}

export default Audience