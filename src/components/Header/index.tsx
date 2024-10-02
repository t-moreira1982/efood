import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/BackgroundHero.svg'
import { HeaderBar, Links, Cart, Title, TitleContainer } from './styles'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${background})` }}>
    <nav>
      <Links>
        <li>
          <a href="#">Restaurantes</a>
        </li>
        <li>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </li>
      </Links>
      <Cart href="#">0 - produto(s) no carrinho</Cart>
    </nav>

    <TitleContainer></TitleContainer>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
