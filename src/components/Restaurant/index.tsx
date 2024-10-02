import star from '../../assets/images/estrela.png'
import Button from '../Button'

// type Props = {
//   image: string
//   name: string
//   assessment: number
//   assessmentimg: string
//   description: string
// }

const Restaurant = () => (
  <div>
    <img src="/placehold.it/472x217" alt="food" />
    <div>
      <h3>Hioki Sushi</h3>
      <p>4.6</p>
      <img src={star} alt="star" />
    </div>
    <p>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
      frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
      rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
      sem sair do lar com nosso delivery!
    </p>
    <Button />
  </div>
)

export default Restaurant
