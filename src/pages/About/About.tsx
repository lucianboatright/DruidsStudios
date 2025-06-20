import { Link } from 'react-router-dom';
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { Grid, StyledHeader, StyledIcons, StyledImage, StyledLink } from './About.styles';
import TeamCard from '../../Components/TeamCard/teamCard';
import DruidLogo from '../../assets/logos/Principal_Onyx.svg'

import ElenaImage from '../../assets/profilePics/Elena_omura.png'
import MithilaImage from '../../assets/profilePics/Mithila_joshi.png'

const team = [
    {
      image: ElenaImage,
      name: 'Elena Omura',
      title: 'CEO, Founder & Creative Producer',
    },
    {
      image: MithilaImage,
      name: 'Mithila Joshi',
      title: 'Executive Director & Creative Producer',
    },

];


export default function Contact() {
  return (
    <>
        <StyledIcons>
                <StyledLink to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></StyledLink>
              <StyledImage  src={DruidLogo} alt='Lgog' />
            <StyledLink to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></StyledLink>
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
    
      <Grid>
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </Grid>
    </>
  )
    
}