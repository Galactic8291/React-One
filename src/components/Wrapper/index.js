// Wrapper Component
import styled, { css } from 'styled-components'

import img from '../../assets/background.jpg'

export default styled.div`
  ${props => props.app && css`
    width: 100%;
    position: absolute;
    background-image: url(${ img });
    color: #000305;
    font-family: sans-serif, "Lucida Sans Unicode", "Times New Roman", Helvetica;
    font-size: 87.5%;
    line-height: 1.5;
    text-align: left;

    @media (min-width: 320px) and (max-width: 800px) {
      font-size: 95%;
    }
  `}

  ${props => props.body && css`
    width: 70%;
    margin: 0 auto;
    clear: both;

    @media (min-width: 320px) and (max-width: 800px) {
      width: 90%;
    }
  `}

  ${props => props.feed && css`
    width: 70%;
    border-radius: 5px;
    line-height: 25px;
    float: left;
  `}

  ${props => props.navigation && css`
    margin: 0 auto;
    padding-left: 40px;

    @media (min-width: 320px) and (max-width: 800px) {
      padding-left: 0;
    }
  `}
`

