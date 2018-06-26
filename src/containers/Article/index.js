// Article Container
import React from 'react'

import Article from '../../components/Article'
import Info from '../../components/Info'
import { Anchor } from '../../components/Link'

export default ({ author, info, title, quotes }) => (
  <Article>
    <header>
      <h2><Anchor href='#'>{ title }</Anchor></h2>
    </header>

    <footer>
      <Info article>{ info }</Info>
    </footer>

    <content>
      <h5>{ author }</h5>
      { quotes.map(quote => <p key={ Math.random(100) }>{ quote }</p> ) }
    </content>
  </Article>
)

