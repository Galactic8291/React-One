// Wrapper Component
import styled, { css } from 'styled-components'

import img from '../../assets/background.jpg'

export default styled.div`
  ${props => props.app && css`
    width: 100%;
    position: absolute;
    background-image: url(${ img });
    color: #000305;
    font-family: sans-serif, "Lucida Sans Serif", "Times New Roman", Helvetica;
    line-height: 1.5;
    text-align: left;
  `}

  ${props => props.body && css`
    width: 70%;
    margin: 0 auto;
    clear: both;
  `}
`

