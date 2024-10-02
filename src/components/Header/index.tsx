import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/BackgroundHero.svg'
import { HeaderBar, Links, Cart, Title, TitleContainer } from './styles'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${background})` }}>
    <Links>
      <div>
        <a href="#">Restaurantes</a>
      </div>
      <div>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <Cart href="#">0 - produto(s) no carrinho</Cart>
      </div>
    </Links>

    <TitleContainer>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </TitleContainer>
  </HeaderBar>
)

export default Header
