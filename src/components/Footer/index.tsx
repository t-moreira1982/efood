import background from '../../assets/images/BackgroundHero.svg'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import { FooterBar, InfoFooter, Social, Logo } from './styles'

const Footer = () => (
  <FooterBar style={{ backgroundImage: `url(${background})` }}>
    <InfoFooter>
      <a href="#">
        <Logo src={logo} alt="logo" />
      </a>
      <Social>
        <div>
          <a href="#">
            <img className="SocialIcon" src={instagram} alt="instagram" />
          </a>
        </div>
        <div>
          <a href="#">
            <img className="SocialIcon" src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="#">
            <img className="SocialIcon" src={twitter} alt="twitter" />
          </a>
        </div>
      </Social>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </InfoFooter>
  </FooterBar>
)

export default Footer
