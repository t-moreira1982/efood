import logo from '../../assets/images/logo.svg'
import background from '../../assets/images/BackgroundHero.svg'
import { HeaderBar, Links, Cart, Title, TitleContainer } from './styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${background})` }}>
    <div className="container">
      <Links>
        <div>
          <Link to="/">Restaurantes</Link>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <Cart href="#">0 - produto(s) no carrinho</Cart>
        </div>
      </Links>

      <TitleContainer>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </TitleContainer>
    </div>
  </HeaderBar>
)

export default Header
