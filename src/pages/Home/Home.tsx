import MainImage from '../../assets/images/testworkshop.jpg'
import { StyledMainImage, StyledNavDesktop, StyledNavMobile, StyledTextBody } from './Home.styles';
import LogoGrid from '../../Components/LogoGrid/LogoGrid';
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import Footer from '../../Components/Footer/Footer';

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


export default function Home() {
  return (
    <>
       <HeaderSection />
       <StyledNavMobile>
          <NarBar
            links={[
              { to: '/builds', label: 'Builds' },
              { to: '/hire', label: 'Hire' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ]}
          />
       </StyledNavMobile>
        <StyledMainImage>
          <img src={MainImage} alt='Lgog' />
        </StyledMainImage>
        <StyledNavDesktop>
          <NarBar
            links={[
              { to: '/builds', label: 'Builds' },
              { to: '/hire', label: 'Hire' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ]}
          />
        </StyledNavDesktop>

          <StyledTextBody>At our London-based workshop, Oscar and Charlie lead a highly skilled team specialising in professional set construction, scenic carpentry, prop making, and custom fabrication for film, television, theatre, and commercial installations.</StyledTextBody>
          <StyledTextBody>We offer end-to-end design and build services — from CNC routing, welding, and woodworking to scenic painting, set dressing, and on-site installation. Whether working on large-scale productions or bespoke commissions, we bring precision, creativity, and decades of hands-on experience to every project.</StyledTextBody>
          <StyledTextBody>Our workshop combines traditional craftsmanship with modern techniques, delivering reliable and visually striking results for clients across the UK’s creative industries.</StyledTextBody>
        <WhatWeDo skills={skills} />
        <LogoGrid logos={logos} />
        <Footer />
    </>
  )
}