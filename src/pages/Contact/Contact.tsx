import { Link } from 'react-router-dom'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledContactText, StyledTitle, StyledLink, StyledContactTitle, StyledHeader, StyledIcons, StyledImage } from './Contact.styles'
import DruidLogo from '../../assets/logos/Principal_Onyx.svg'


export default function Contact() {
  return (
    <>
        <StyledIcons>
                <StyledLink to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></StyledLink>
              <StyledImage  src={DruidLogo} alt='Lgog' />
            <StyledLink to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></StyledLink>
        </StyledIcons>
        <StyledTitle>Hire Products</StyledTitle>
        <StyledHeader>
            <nav>
                {/* <Link to="/" style={{ margin: '0 1rem' }}>Home</Link> */}
                <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
                <Link to="/builds" style={{ margin: '0 1rem' }}>Builds</Link>
                <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
                <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
            </nav>
        </StyledHeader>
        <StyledContactTitle>
          Feel free to reach out to us for a consultation or quote
        </StyledContactTitle>
        <StyledContactText>
          Email: druids@gmail.com
        </StyledContactText>
        <StyledContactText>
          Phone Number: 07503876253
        </StyledContactText>
    </>
  ) 
}