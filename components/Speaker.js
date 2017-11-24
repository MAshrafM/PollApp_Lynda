import React from 'react'
import Display from './parts/Display'
import JoinSpeaker from './parts/JoinSpeaker'
import Attendance from './parts/Attendance'
import Questions from './parts/Questions'

export class Speaker extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div>
        <Display if={this.props.status === 'connected'}>
          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
            <Questions questions={this.props.questions} emit={this.props.emit}/>
            <Attendance audience={this.props.audience} />
          </Display>
          <Display if={!this.props.member.name}>
            <h2>Start The Presentaion</h2>
            <JoinSpeaker emit={this.props.emit} />
          </Display>
        </Display>
      </div>
    )
  }
}

export default Speaker