import { Link } from 'react-router-dom'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledContactText, StyledContactTitle, StyledHeader, StyledIcons } from './Contact.styles'


export default function Contact() {
  return (
    <>
               <StyledIcons>
                <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
            <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
        </StyledIcons>
      <h1>Welcome to the Contact Page</h1>;
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