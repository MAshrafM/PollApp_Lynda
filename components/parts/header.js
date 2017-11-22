import React from 'react'
import PropTypes from 'prop-types'

export class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    return (
      <header className="row">
        <div className="col-xs-10">
          <h1>{this.props.title}</h1>
          <p>{this.props.speaker}</p>
        </div>
        <div className="col-xs-2">
          <span id="connection-status" className={this.props.status}></span>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
