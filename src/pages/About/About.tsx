import { Link } from 'react-router-dom';
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledIcons } from './About.styles';

export default function Contact() {
  return (
    <>
           <StyledIcons>
                <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
            <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
        </StyledIcons>
    <h1>Welcome to the Contact Page</h1>;
    </>
  )
    
}