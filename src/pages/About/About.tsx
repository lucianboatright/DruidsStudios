import { Grid, StyledGrid, StyledTextBody, StyledTitle } from './About.styles';
import TeamCard from '../../Components/TeamCard/teamCard';
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import ElenaImage from '../../assets/profilePics/Elena_omura.png'
import MithilaImage from '../../assets/profilePics/Mithila_joshi.png'
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import Footer from '../../Components/Footer/Footer';

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
  'Background Painting',
  'Prop Making',
  'Poly Sculpting',
  'Spray Finishing',
  'Project Management',
  'Design',
  'CAD Drawing and visualisation',
  'Plastering',
  'Metal Work',
  'CNC Machining',
  'Instillation',
  'Location Work and Standby',
  'Storage Boxes',
  'Open to collaberation',
];


export default function Contact() {
  return (
    <>
        <HeaderSection />
                <NarBar
                  links={[
                    { to: '/builds', label: 'Builds' },
                    { to: '/hire', label: 'Hire' },
                    { to: '/about', label: 'About' },
                    { to: '/contact', label: 'Contact' },
                  ]}
                />
    <StyledGrid>
        <Grid>
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </Grid>
    </StyledGrid>
      {/* <StyledTitle>London based Set Designer</StyledTitle> */}
      <StyledTextBody>What We Do: London Based set builder, We both build and hire out products. For Hiring view out list of products from flats, plinths, doors etc.  For built projects feel free to view and reach out. </StyledTextBody>
       <WhatWeDo skills={skills} />
       <Footer />
    </>
  )
    
}