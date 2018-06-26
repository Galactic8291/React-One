// Info Component
import styled, { css } from 'styled-components'

export default styled.p`
  ${props => props.article && css`
    font-size: 90%;
    font-style: italic;
    color: #999;

    @media (min-width: 320px) and (max-width: 800px) {
      display: none;
    }
  `}
`

