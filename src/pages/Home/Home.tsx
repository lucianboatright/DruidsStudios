import MainImage from '../../assets/images/testworkshop.jpg'
import { StyledMainImage, StyledTextBody } from './Home.styles';
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


export default function Home() {
  return (
    <>
       <HeaderSection />
        <StyledMainImage>
          <img src={MainImage} alt='Lgog' />
        </StyledMainImage>
        <NarBar
          links={[
            { to: '/builds', label: 'Builds' },
            { to: '/hire', label: 'Hire' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ]}
        />
        <StyledTextBody>What We Do: London Based set builder, We both build and hire out products. For Hiring view out list of products from flats, plinths, doors etc.  For built projects feel free to view and reach out. </StyledTextBody>

        <LogoGrid logos={logos} />
        <WhatWeDo skills={skills} />
        <Footer />
    </>
  )
}