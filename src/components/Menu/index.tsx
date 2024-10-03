import Button from '../Button'
import { Card, Description, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Menu = ({ description, image, title }: Props) => (
  <Card>
    <img src={image} alt="food" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button size="big">Adicionar ao carrinho</Button>
  </Card>
)

export default Menu
