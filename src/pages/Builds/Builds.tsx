// import React, { useState } from "react";
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import { StyledTitle } from './Builds.styles';
import { useState } from 'react';
import image1 from '../../assets/images/20240928_171850.jpg'
import image2 from '../../assets/images/20240929_094632.jpg'
import ImageGrid from '../../Components/ImageContainer/ImageContainer';
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import { FilterSection } from '../../Components/FilterSection/filterSection';
import Footer from '../../Components/Footer/Footer';


const items = [
  { id: 1, category: "Shop", company: 'Apple', details: 'iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', content: <ImageGrid images={[image1, image2]} /> },
  { id: 2,  category: "Theater",company: 'Samsung', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', content:   <ImageGrid images={[image1,  image2]} /> },
  { id: 4, category: "Props", company: 'Google', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', content:   <ImageGrid images={[image1,  image2]} /> },
  { id: 5, category: "Adverts", company: 'Google Adverts', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', content:   <ImageGrid images={[image1,  image2]} /> },
  { id: 6, category: "Events", company: 'Google', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', content:   <ImageGrid images={[image1,  image2]} /> },
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
                <StyledTitle>Portfolio of Built Projects</StyledTitle>
        
                <FilterSection   filters={[
                    { label: 'Shop', value: 'Shop' },
                    { label: 'Theater', value: 'Theater' },
                    { label: 'Props', value: 'Props' },
                    { label: 'Adverts', value: 'Adverts' },
                    { label: 'View All', value: 'ALL' },
                  ]}
                  setActiveFilter={setActiveFilter}
                />
 
      <ProductComponent items={filteredSections}   />
      <Footer />
    </>
  );
}