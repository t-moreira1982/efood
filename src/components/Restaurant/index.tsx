import { Link } from 'react-router-dom'
import Button from '../Button'
import Tag from '../Tag'
import { Title, Description, CardItens, Card, Infos } from './styles'

type Props = {
  image: string
  name: string
  assessment: string
  assessmentimg?: string
  description: string
  infos: string[]
}

const Restaurant = ({
  assessment,
  description,
  image,
  infos,
  name,
  assessmentimg
}: Props) => (
  <Card>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <img src={image} alt="food" />
    <CardItens>
      <Title>
        <h3>{name}</h3>
        <div>
          <h3>{assessment}</h3>
          <img src={assessmentimg} alt="star" />
        </div>
      </Title>

      <Description>{description}</Description>
      <Link to={'/perfil'}>
        <Button size="small">Saiba mais</Button>
      </Link>
    </CardItens>
  </Card>
)

export default Restaurant
