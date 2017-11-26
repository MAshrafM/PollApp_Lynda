import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to='/speaker'>Join as Speaker</Link>
        <Link to='/board'>Go to The Board.</Link>
      </form>
    ) 
  }
}

export default Join