import Restaurant from '../Restaurant'
import { Container, List } from './styles'
import RestaurantComponents from '../../models/RestaurantComponents'

export type Props = {
  restaurants: RestaurantComponents[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            assessment={restaurant.assessment}
            assessmentimg={restaurant.assessmentimg}
            description={restaurant.description}
            image={restaurant.image}
            name={restaurant.name}
            infos={restaurant.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
