// Routes Configuration
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'

export default () => (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/about' component={ Home } />
    <Route path='/portfolio' component={ Home } />
    <Route path='/contact' component={ Home } />
  </Switch>
)

