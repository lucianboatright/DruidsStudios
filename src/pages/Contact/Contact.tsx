import { StyledContactText, StyledContactTitle } from './Contact.styles'
import HeaderSection from '../../Components/HeaderSection/headerSection'
import NarBar from '../../Components/NavBar/navBar'


export default function Contact() {
  return (
    <>
       <HeaderSection />
                <NarBar
                  links={[
                    { to: '/', label: 'Home' },
                    { to: '/builds', label: 'Builds' },
                    { to: '/hire', label: 'Hire' },
                    { to: '/about', label: 'About' },
                  ]}
                />
        <StyledContactTitle>
          Feel free to reach out to us for a consultation or quote
        </StyledContactTitle>
        <StyledContactText>
          Email: druids@gmail.com
        </StyledContactText>
        <StyledContactText>
          Phone Number: 07503876253
        </StyledContactText>
    </>
  ) 
}