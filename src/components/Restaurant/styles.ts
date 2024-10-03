import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: transparent;
  border: 1px solid ${colors.pink};
  margin-bottom: 48px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const CardItens = styled.div`
  padding: 8px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;
    column-gap: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`
