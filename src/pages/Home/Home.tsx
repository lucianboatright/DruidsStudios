import { Link } from 'react-router-dom';
import DruidLogo from '../../assets/logos/Principal_Onyx.svg'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledHeader, StyledIcons } from './Home.styles';
import LogoGrid from '../../Components/LogoGrid/LogoGrid';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', alt: 'Apple' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo_%282012%29.svg', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png', alt: 'Facebook' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Spotify_logo_with_text.svg', alt: 'Spotify' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Salesforce.com_logo.svg', alt: 'Salesforce' },
  { src: 'https://dummyimage.com/200x60/cccccc/000000.png&text=Your+Logo+Here', alt: 'Placeholder 1' },
  { src: 'https://dummyimage.com/200x60/eeeeee/000000.png&text=Logo+Placeholder', alt: 'Placeholder 2' },
];

export default function Home() {
  return (
    <>
        <StyledIcons>
            <img src={NavIcon} alt='Lgog' />
            <img src={NavIcon} alt='Lgog' />
        </StyledIcons>
        <img src={DruidLogo} alt='Lgog' />
        <StyledHeader>
            <nav>
                {/* <Link to="/" style={{ margin: '0 1rem' }}>Home</Link> */}
                <Link to="/builds" style={{ margin: '0 1rem' }}>Builds</Link>
                <Link to="/hire" style={{ margin: '0 1rem' }}>Hire</Link>
                <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
                <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
            </nav>
        </StyledHeader>
        <LogoGrid logos={logos} />
    </>
  )
}