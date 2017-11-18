import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

//Routes
import Audience from '../components/Audience'
import Speaker from '../components/Speaker'
import Board from '../components/Board'

class Routes extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={() => <Audience {...this.props} />} />
          <Route path='/speaker' component={() => <Speaker {...this.props} />} />
          <Route path='/board' component={() => <Board {...this.props} />} />
        </Switch>
      </main>
    )
  }
}

export default Routes