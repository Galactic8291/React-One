// Link Component
import styled, { css } from 'styled-components'
import { Link as anchor, NavLink as nav } from 'react-router-dom'

export const Anchor = styled.a`
  text-decoration: none;

  &:link, &:visited {
    color: #cf5c3f;
  }

  &:hover, &:active {
    background-color: #cf5c3f;
    color: #fff;
    border-radius: 5px;
  }
`

export const Link = styled(anchor)`
  text-decoration: none;
`

export const NavLink = styled(nav)`
 text-decoration: none;

  &:link, &:visited {
    height: 20px;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
  }

  &.active, &:hover {
    background-color: #cf5c3f;
    text-shadow: none;
  }

  @media (min-width: 320px) and (max-width: 800px) {
    margin: 0 auto;
    text-align: center;

    &:link, &:visited {
      display: block;
      padding: 10px 25px;
    }
  }
`

