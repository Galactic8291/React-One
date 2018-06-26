// Home Page
import React from 'react'

import Articles from '../config/Articles'

import Wrapper from '../components/Wrapper'
import Article from '../containers/Article'

export default () => (
  <Wrapper body>
    <Wrapper feed>
      { Articles.map(item => <Article key={ item.id } { ...item } />) }
    </Wrapper>
  </Wrapper>
)

