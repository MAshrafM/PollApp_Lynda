import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

//Routes
import Audience from '../components/Audience'
import Speaker from '../components/Speaker'
import Board from '../components/Board'

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Audience} />
        <Route path='/speaker' component={Speaker} />
        <Route path='/board' component={Board} />
      </Switch>
    </main>
  )
  
}

export default Routes