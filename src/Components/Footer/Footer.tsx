import React from 'react';
import { FooterContainer, StyledContainerFooter, StyledFooterBracketed, StyledFooterItalics, StyledLogoContainerFooter } from './Footer.styles';
import DruidLogo from '../../assets/logos/Principal_Onyx.svg'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'


export default function Footer() {
    return (
        <FooterContainer>
              <StyledLogoContainerFooter src={NavIcon} alt="SuziLogo" />
            <StyledContainerFooter>
              {/* <div>Druids</div> */}
              <StyledLogoContainerFooter src={DruidLogo} alt="SuziLogo" />
            </StyledContainerFooter>
            <div>
              <StyledFooterItalics>London N1 5SA :Address</StyledFooterItalics>
              <StyledFooterBracketed>Druidldn@gmail.com :Email</StyledFooterBracketed>
              <StyledFooterBracketed>0787265169 :Phone</StyledFooterBracketed>
            </div>
      </FooterContainer>
    )
  };
  
