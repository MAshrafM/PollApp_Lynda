import React from 'react'

class JoinSpeaker extends React.Component {
  constructor (props){
    super(props)
    this.start = this.start.bind(this)
  }
  
  start () {
    let speakerName = this.input.value
    let title = this.title.value
    this.props.emit('start', {
      name: speakerName,
      title: title
    })
  }
  
  render () {
    return (
      <form action="javascript:void(0)" onSubmit={this.start}>
        <label>Full Name</label>
        <input 
          className="form-control"
          placeholder="Enter your fullname"
          ref={node => this.input = node}
          required
        />
        <label>Title</label>
        <input 
          className="form-control"
          placeholder="Enter Presentation Title"
          ref={node => this.title = node}
          required
        />
        <button className="btn btn-primary">Join</button>
      </form>
    ) 
  }
}

export default JoinSpeaker