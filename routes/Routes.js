import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

//Routes
import Audience from '../components/Audience'
import Speaker from '../components/Speaker'
import Board from '../components/Board'
import {NotFound} from '../components/404'

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
          <Route component={NotFound} />
        </Switch>
      </main>
    )
  }
}

export default Routes