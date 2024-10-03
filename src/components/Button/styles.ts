import { colors } from './../../styles'
import styled from 'styled-components'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.size === 'big' ? colors.offwhite : colors.pink};
  color: ${(props) => (props.size === 'big' ? colors.pink : colors.offwhite)};
  padding: ${(props) => (props.size === 'big' ? '4px 88px' : '4px 6px')};
  margin-top: ${(props) => (props.size === 'big' ? '8px' : '16px')};
  border: 1px solid transparent;
  font-size: 13px;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.size === 'big' ? colors.pink : colors.offwhite};
    color: ${(props) => (props.size === 'big' ? colors.offwhite : colors.pink)};
    border: 1px solid ${colors.pink};
  }
`
