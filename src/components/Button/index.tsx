import { ButtonContainer } from './styles'

export type Props = {
  size: 'big' | 'small'
  children: string
  title?: string
  to?: string
  onClick?: () => void
}

const Button = ({ size = 'big', children }: Props) => (
  <ButtonContainer size={size}>{children}</ButtonContainer>
)

export default Button
