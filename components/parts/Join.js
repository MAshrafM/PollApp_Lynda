import React from 'react'
import ReactDOM from 'react-dom'

class Join extends React.Component {
  constructor (props){
    super(props)
    this.join = this.join.bind(this)
  }
  
  join () {
    let memberName = this.input.value
    this.props.emit('join', { name: memberName })
  }
  
  render () {
    return (
      <form action="javascript:void(0)" onSubmit={this.join}>
        <label>Full Name</label>
        <input 
          className="form-control"
          placeholder="Enter your fullname"
          ref={node => this.input = node}
          required
        />
        <button className="btn btn-primary">Join</button>
      </form>
    ) 
  }
}

export default Join