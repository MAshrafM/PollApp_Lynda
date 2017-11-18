import React from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <div id="not-found">
        <h1>Whoops. 404!</h1>
        <p>We cannot find the page you are requested.</p>
        <p>Were you lokking for one of these:</p>
        <ul>
          <li><Link to='/'>Join as Audience</Link></li>
          <li><Link to='/speaker'>Join as Speaker</Link></li>
          <li><Link to='/board'>View The Board</Link></li>
        </ul>
      </div>
    )
  }
}

export default NotFound