import { ContactContainer, StyledContactText, StyledContactTitle, StyledContainer } from './Contact.styles'
import HeaderSection from '../../Components/HeaderSection/headerSection'
import NarBar from '../../Components/NavBar/navBar'
import Footer from '../../Components/Footer/Footer'
import { ContactForm } from '../../Components/Form/ContactForm'


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
          <ContactContainer>
            <StyledContainer>
              <StyledContactTitle>
                Feel free to reach out to us for a consultation or quote.
              </StyledContactTitle>
              <StyledContactText>
                Required Details: 
                <ul>

                  <li>Everything start with an idea</li>
                  <li>Time line and deadlines</li>
                  <li>Design if possible but we can mock up on request</li>
                  <li>Budget and material choice</li>
                </ul>
              </StyledContactText>
              <StyledContactText>
                Email: Druids@gmail.com
              </StyledContactText>
              <StyledContactText>
                Phone Number: 07503876253
              </StyledContactText>
            </StyledContainer>
              <ContactForm />
          </ContactContainer>
        <Footer />
    </>
  ) 
}