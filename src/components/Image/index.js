// Image Component
import styled, { css } from 'styled-components'

export default styled.img`
  ${props => props.navigation && css`
    width: 50%;
    height: auto;
    margin: 2% 0;
  `}
`

