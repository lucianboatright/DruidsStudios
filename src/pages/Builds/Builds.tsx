// import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { FilterContainer, StyledButton, StyledHeader, StyledIcons, StyledSpacer, StyledTitle } from './Builds.styles';
import { useState } from 'react';

import image1 from '../../assets/images/20240928_171850.jpg'
import image2 from '../../assets/images/20240929_094632.jpg'
import ImageGrid from '../../Components/ImageContainer/ImageContainer';


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
       <StyledIcons>
                <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
            <Link to="/" style={{ margin: '0 1rem' }}><img src={NavIcon} alt='Lgog' /></Link>
        </StyledIcons>
                <StyledHeader>
                    <nav>
                        {/* <Link to="/" style={{ margin: '0 1rem' }}>Home</Link> */}
                        <Link to="/" style={{ margin: '0 1rem' }}>Home</Link>
                        <Link to="/hire" style={{ margin: '0 1rem' }}>Hire</Link>
                        <Link to="/contact" style={{ margin: '0 1rem' }}>Contact</Link>
                        <Link to="/about" style={{ margin: '0 1rem' }}>About</Link>
                    </nav>
                </StyledHeader>
                <StyledTitle>Built Projects</StyledTitle>
        
        <FilterContainer>
          <StyledButton onClick={() => setActiveFilter("All")}>Filters:</StyledButton>
          {/* <div>Filters:</div> */}
          <StyledSpacer>-</StyledSpacer>
          <StyledButton onClick={() => setActiveFilter("Shop")}>Shop</StyledButton>
          <StyledSpacer>-</StyledSpacer>
          <StyledButton onClick={() => setActiveFilter("Theater")}>Theater</StyledButton>
          <StyledSpacer>-</StyledSpacer>
          <StyledButton onClick={() => setActiveFilter("Props")}>Props</StyledButton>
          <StyledSpacer>-</StyledSpacer>
          <StyledButton onClick={() => setActiveFilter("Adverts")}>Adverts</StyledButton>
          <StyledSpacer>-</StyledSpacer>
          <StyledButton onClick={() => setActiveFilter("ALL")}>View All</StyledButton>
        </FilterContainer>
      <ProductComponent items={filteredSections}   />
    </>
  );
}