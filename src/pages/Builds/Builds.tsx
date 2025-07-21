// import React, { useState } from "react";
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import { StyledBox, StyledTitle } from './Builds.styles';
import { useState } from 'react';
import ImageGrid from '../../Components/ImageContainer/ImageContainer';
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import { FilterSection } from '../../Components/FilterSection/filterSection';
import Footer from '../../Components/Footer/Footer';

// IMAGES
import ArthurImage1 from '../../assets/images/JamesArthur/JamesArthur01.jpg'
import ArthurImage2 from '../../assets/images/JamesArthur/JamesArthur3.jpg'

import Vashi1 from '../../assets/images/Vashi/1.png'
import Vashi2 from '../../assets/images/Vashi/2(1).jpg'
import Vashi3 from '../../assets/images/Vashi/3(1).jpg'

import FkaCee1 from '../../assets/images/fkaCee/Screenshot 2022-04-28 at 12.59.36.png'
import FkaCee2 from '../../assets/images/fkaCee/maxresdefault.jpg'

import TionWayne1 from '../../assets/images/TionWayne/TION WAYNE LARGE IMAGE.jpeg'
import TionWayne2 from '../../assets/images/TionWayne/tion-wayne.jpeg'

import Zilch1 from '../../assets/images/Zilch/zilch2.jpg'
import Zilch2 from '../../assets/images/Zilch/zilch4.jpg'

import Metromony1 from '../../assets/images/Metronomy/metronomy1.jpg'
import Metromony2 from '../../assets/images/Metronomy/metronomy3.jpg'
import Metromony3 from '../../assets/images/Metronomy/metronomy4.jpg'

import Metromony5 from '../../assets/images/Metronomy/Screenshot 2022-05-10 at 13.26.32.png'
import Metromony6 from '../../assets/images/Metronomy/IMG_6880.jpg'

import YoungFka1 from '../../assets/images/YoungFka/image1.jpeg'
import YoungFka2 from '../../assets/images/YoungFka/image2.jpg'
import YoungFka3 from '../../assets/images/YoungFka/image3.jpg'

import Versace1 from '../../assets/images/Versace/versace1.jpeg'
import Versace2 from '../../assets/images/Versace/versace2.jpeg'

  // { id: 1, 
  //   category: "Shop", 
  //   company: 'Apple', 
  //   details: 'iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
  //   content: <ImageGrid images={[image1, image2]} /> 
  // },
const items = [
  { id: 1, 
    category: "Music", 
    company: 'James Arthur', 
    details: 'Super last minute turnaround on this one. Making one room of a community centre in hoxton, into a clinical isolated box for james arthur on this music video, crazy tight load in and really clever rigging and lighting set up on this job!', 
    content: <ImageGrid images={[ArthurImage1, ArthurImage2]} /> 
  },
  { id: 2, 
    category: "Shop", 
    company: 'Vashi', 
    details: 'This was a fun job for the amazing jewelry brand vashi. We created the large rings and also created other props and objects for multiple set ups throughout the shoot.', 
    content: <ImageGrid images={[Vashi1, Vashi2, Vashi3]} /> 
  },
  { id: 3, 
    category: "Music", 
    company: 'FKA Twigs & Centeral Cee', 
    details: 'This job mainly consisted of building the large steps in the video and incorporating the rotating platform, then helping the art team with getting everything set up.', 
    content: <ImageGrid images={[FkaCee1, FkaCee2]} /> 
  },
  { id: 4, 
    category: "Music", 
    company: 'Tion Wayne', 
    details: 'For this job we were presented with a rented set that we had to try and piece together, it was very well used and was falling apart in places. We had to brace and strengthen, restain and completely replace some missing pieces to get it to a useable place. And then we moved onto making a huge stack of cash (for the video sadly)', 
    content: <ImageGrid images={[TionWayne1, TionWayne2]} /> 
  },
  { id: 5, 
    category: "Music", 
    company: 'Zilch', 
    details: 'This wasnt an easy one at all! But with  A few long nights, lots of filler bendy ply and some serious swearing we got the job done. We were very happy to see the back of this stupid ufo thing ?!?!', 
    content: <ImageGrid images={[Zilch1, Zilch2]} /> 
  },
  { id: 6, 
    category: "Music", 
    company: 'Metronomy', 
    details: 'First of Two great fun builds here for metronomy, one the simple plane interior with some wicked camera tricks and great cotton wool clouds plus some incredible skydiving antics from the band members all doing there own stunts', 
    content: <ImageGrid images={[Metromony1, Metromony2, Metromony3]} /> 
  },
  { id: 7, 
    category: "Music", 
    company: 'Metronomy', 
    details: 'The second of of Two great fun builds here for metronomy, video was just four rooms with very different aesthetics all set up and cleverly stacked a nd organised in post to look as it dies in the finished product.', 
    content: <ImageGrid images={[Metromony5, Metromony6]} /> 
  },
  { id: 8, 
    category: "Music", 
    company: 'Yung Lean & FKA Twigs', 
    details: 'Another really fun job this one, making these great fully operational chandeliers to mount on this great old classic car, a great video and a great song to top it off', 
    content: <ImageGrid images={[YoungFka1, YoungFka2, YoungFka3]} /> 
  },
  { id: 9, 
    category: "Music", 
    company: 'Versace', 
    details: 'A full tiled bathroom, built in a backroom inside a boxing club. Very late finish and memorable derig on this one…. For a short film by versace.', 
    content: <ImageGrid images={[Versace1, Versace2]} /> 
  },
  
  // Add more as needed
];



export default function Builds() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  
  const filteredSections = activeFilter === "ALL" ? items : items.filter(section => section.category === activeFilter);
  return (
    <>
       <HeaderSection />
                <NarBar
                  links={[
                    { to: '/', label: 'Home' },
                    { to: '/hire', label: 'Hire' },
                    { to: '/about', label: 'About' },
                    { to: '/contact', label: 'Contact' },
                  ]}
                />
                <StyledBox>
                  <StyledTitle>Filter By Projects:</StyledTitle>
          
                  <FilterSection   filters={[
                      { label: 'Shop', value: 'Shop' },
                      { label: 'Theater', value: 'Theater' },
                      { label: 'Music Video', value: 'Music' },
                      { label: 'Adverts', value: 'Adverts' },
                      { label: 'View All', value: 'ALL' },
                    ]}
                    setActiveFilter={setActiveFilter}
                  />
                </StyledBox>

      <ProductComponent items={filteredSections}   />
      <Footer />
    </>
  );
}