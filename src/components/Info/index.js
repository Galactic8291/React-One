// Info Component
import styled, { css } from 'styled-components'

export default styled.p`
  ${props => props.article && css`
    font-size: 90%;
    font-style: italic;
    color: #999;
  `}
`

