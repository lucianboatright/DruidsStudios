import { Link } from 'react-router-dom';
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { Grid, StyledHeader, StyledGrid, StyledTitle, StyledIcons, StyledImage, StyledLink } from './About.styles';
import TeamCard from '../../Components/TeamCard/teamCard';
import DruidLogo from '../../assets/logos/Principal_Onyx.svg'
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import ElenaImage from '../../assets/profilePics/Elena_omura.png'
import MithilaImage from '../../assets/profilePics/Mithila_joshi.png'

const team = [
    {
      image: ElenaImage,
      name: 'Oscar Coackley',
      title: 'CEO, Head of Metal work',
    },
    {
      image: MithilaImage,
      name: 'Charlie Golden',
      title: 'CEO, Head of Wood Working',
    },

];

const skills = [
  'Carpentry',
  'Scenic Painting',
  'Prop Making',
  'Poly Sculpting',
  'Spray Finishing',
  'Project Management',
  'Design',
  'CAD Drawing and visualisation',
  'Plastering',
  'Metal Work',
  'CNC Machining',
  'International Work',
  'Location Work and Standby',
  'Storage',
  'Your Project!',
];


export default function Contact() {
  return (
    <>
        <StyledIcons>
                <StyledLink to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></StyledLink>
              <StyledImage  src={DruidLogo} alt='Lgog' />
            <StyledLink to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></StyledLink>
        </StyledIcons>
            <StyledHeader>
                <nav>
                    {/* <Link to="/" style={{ margin: '0 1rem' }}>Home</Link> */}
                    <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
                    <Link to="/builds" style={{ margin: '0 1rem' }}>Builds</Link>
                    <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
                    <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
                </nav>
            </StyledHeader>
    <StyledGrid>
        <Grid>
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </Grid>
    </StyledGrid>
      <StyledTitle>London based Set Designer</StyledTitle>
       <WhatWeDo skills={skills} />
    </>
  )
    
}