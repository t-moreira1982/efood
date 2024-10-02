import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  widht: 100%;
  height: 384px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 64px;
  }

  a {
    text-decoration: none;
    color: ${colors.pink};
    font-weight: 900;
    font-size: 18px;

    &:hover {
      color: ${colors.gray};
    }
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 64px;
`

export const Cart = styled.a``

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  width: 544px;
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  margin-top: 140px;
`
