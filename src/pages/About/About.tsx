import { Grid, StyledGrid, StyledTextBody, TextContainer } from './About.styles';
import TeamCard from '../../Components/TeamCard/teamCard';
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import ElenaImage from '../../assets/profilePics/OscarImage.jpg'
import MithilaImage from '../../assets/profilePics/chalieIamge2.jpg'
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
  "Carpentry for Stage and Screen",
  "Prop Making and Fabrication",
  "Set Construction for Film, TV and Theatre",
  "MIG and TIG Welding",
  "CNC Routing and Cutting",
  "Painting and Faux Finishes",
  "Sculpting and 3D Texturing",
  "Set Dressing and Finishing",
  "Metalwork for Stage and Film",
  "Plastics and Vacuum Forming",
  "Model Making and Miniature Sets",
  "3D Modelling for Set Design",
  "Technical Drawing and Drafting",
  "Rigging and Structural Support",
  "Backdrops and Large-Scale Printing",
  "Polystyrene Carving",
  "Woodworking and Joinery",
  "Spray Painting and Surface Treatments",
  "On-site Set Installation",
  "Design Support and Concept Visuals"
];


export default function Contact() {
  return (
    <>
        <HeaderSection />
        <NarBar
          links={[
            { to: '/', label: 'Home' },
            { to: '/builds', label: 'Builds' },
            // { to: '/hire', label: 'Hire' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ]}
        />
      {/* <StyledTitle>London based Set Designer</StyledTitle> */}
      <TextContainer>
        <StyledTextBody>At our London-based workshop, Oscar and Charlie lead a highly skilled team specialising in professional set construction, scenic carpentry, prop making, and custom fabrication for film, television, theatre, and commercial installations.</StyledTextBody>
        <StyledTextBody>We offer end-to-end design and build services — from CNC routing, welding, and woodworking to scenic painting, set dressing, and on-site installation. Whether working on large-scale productions or bespoke commissions, we bring precision, creativity, and decades of hands-on experience to every project.</StyledTextBody>
        <StyledTextBody>Our workshop combines traditional craftsmanship with modern techniques, delivering reliable and visually striking results for clients across the UK’s creative industries.</StyledTextBody>
      </TextContainer>
      <StyledGrid>
          <Grid>
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Grid>
      </StyledGrid>
      <WhatWeDo skills={skills} />
       <Footer />
    </>
  )
    
}