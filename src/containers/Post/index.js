// Post Container
import React from 'react'

import Post from '../../components/Post'

export default ({ author, title, quote }) => (
  <Post>
    <article>
      <h2>{ title }</h2>
      <p>{ author } <br />{ quote }<br /></p>
    </article>
  </Post>
)

