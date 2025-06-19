import { Link } from 'react-router-dom';
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledContactText, StyledHeader, StyledIcons } from './About.styles';

export default function Contact() {
  return (
    <>
           <StyledIcons>
                <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
            <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
        </StyledIcons>
    <h1>Welcome to the About Page</h1>
            <StyledHeader>
                <nav>
                    {/* <Link to="/" style={{ margin: '0 1rem' }}>Home</Link> */}
                    <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
                    <Link to="/builds" style={{ margin: '0 1rem' }}>Builds</Link>
                    <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
                    <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
                </nav>
            </StyledHeader>
            <StyledContactText>
              Email: druids@gmail.com
            </StyledContactText>
    </>
  )
    
}