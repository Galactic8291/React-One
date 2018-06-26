// Home Page
import React from 'react'

import Articles from '../config/Articles'
import Posts from '../config/Posts'

import Wrapper from '../components/Wrapper'
import Article from '../containers/Article'
import Post from '../containers/Post'

export default () => (
  <Wrapper body>
    <Wrapper feed>
      { Articles.map(item => <Article key={ item.id } { ...item } />) }
    </Wrapper>
    { Posts.map(item => <Post key={ item.id } { ...item } />) }
  </Wrapper>
)

