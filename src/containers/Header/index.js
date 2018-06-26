// Header Container
import React from 'react'

import img from '../../assets/bear.jpg'
import Header from '../../components/Header'
import Image from '../../components/Image'
import Navigation from '../../components/Navigation'
import { NavLink as Link } from '../../components/Link'
import Wrapper from '../../components/Wrapper'

export default () => (
  <Header>
    <Image navigation src={ img } />
    <Navigation>
      <Wrapper navigation>
        <Link exact activeClassName='active' to='/'>Home</Link>
        <Link exact activeClassName='active' to='/about'>About</Link>
        <Link exact activeClassName='active' to='/portfolio'>Portfolio</Link>
        <Link exact activeClassName='active' to='/contact'>Contact</Link>
      </Wrapper>
    </Navigation>
  </Header>
)

