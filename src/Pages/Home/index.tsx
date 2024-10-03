import RestaurantsList from '../../components/RestaurantsList'
import RestaurantComponents from '../../models/RestaurantComponents'
import massa from '../../assets/images/massa.png'
import sushi from '../../assets/images/sushi.png'
import star from '../../assets/images/estrela.png'

const restaurantName: RestaurantComponents[] = [
  {
    id: 7,
    assessment: '4.9',
    assessmentimg: star,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    name: 'Hioki Sushi',
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 8,
    assessment: '4.6',
    assessmentimg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    name: 'La Dolce Vita Trattoria',
    infos: ['Italiana']
  },
  {
    id: 9,
    assessment: '4.6',
    assessmentimg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    name: 'La Dolce Vita Trattoria',
    infos: ['Italiana']
  },
  {
    id: 10,
    assessment: '4.6',
    assessmentimg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    name: 'La Dolce Vita Trattoria',
    infos: ['Italiana']
  },
  {
    id: 11,
    assessment: '4.6',
    assessmentimg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    name: 'La Dolce Vita Trattoria',
    infos: ['Italiana']
  },
  {
    id: 12,
    assessment: '4.6',
    assessmentimg: star,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massa,
    name: 'La Dolce Vita Trattoria',
    infos: ['Italiana']
  }
]

const Home = () => (
  <>
    <RestaurantsList restaurants={restaurantName} />
  </>
)

export default Home
