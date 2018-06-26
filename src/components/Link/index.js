// Link Component
import styled, { css } from 'styled-components'
import { Link as anchor, NavLink as nav } from 'react-router-dom'

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
`

