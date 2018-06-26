// Index File
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Wrapper from './components/Wrapper'
import Header from './containers/Header'
import Routes from './config/Routes'

const App = () => (
  <Router>
    <Wrapper app>
      <Header />
      <Routes />
    </Wrapper>
  </Router>
)

render(<App />, document.getElementById('app'))

