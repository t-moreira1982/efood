import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  border: 1px solid ${colors.pink};
  margin-bottom: 32px;
  position: relative;
  color: ${colors.white};
  padding: 8px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;

  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`
