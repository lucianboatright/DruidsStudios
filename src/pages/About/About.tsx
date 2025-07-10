import { Grid, StyledGrid, StyledTitle } from './About.styles';
import TeamCard from '../../Components/TeamCard/teamCard';
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import ElenaImage from '../../assets/profilePics/Elena_omura.png'
import MithilaImage from '../../assets/profilePics/Mithila_joshi.png'
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';

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
        <HeaderSection />
                <NarBar
                  links={[
                    { to: '/builds', label: 'Builds' },
                    { to: '/hire', label: 'Hire' },
                    { to: '/contact', label: 'Contact' },
                    { to: '/about', label: 'About' },
                  ]}
                />
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