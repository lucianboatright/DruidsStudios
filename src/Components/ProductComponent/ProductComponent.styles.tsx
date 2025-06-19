import styled from 'styled-components'


export const StyledIcons = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  img: {
    height: '40px',
  },
});


export const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 50%;
  grid-template-areas: "section1 section2 section3";
  margin: 3rem 10%;
  padding-top: 3rem;
  border-top: 1px solid lightgrey;
  gap: 1rem;
  
  @media (max-width: 1000px) {
    margin: 10px;
    grid-template-columns: auto auto;
    grid-template-areas:
      "section1 section3"
      "section2 section3";
  }
  `;
  export const StyledTitle = styled.section({
    fontSize: '2rem',
    gridArea: 'section1',
    // flex: '1',
    // alignSelf: 'flex-start',
  });
  
  export const StyledDetails = styled.section({

  gridArea: 'section2',
  // flex: '2',
  // width: '20rem',
  marginLeft: '5rem',
  
  "@media (max-width: 1000px)": {
      marginLeft: '0rem',
    },
  });
  
  export const StyledContent = styled.section({
    gridArea: 'section3',
    // flex: '3',
    marginLeft: '5rem',
    // alignSelf: 'flex-start',

    
    "@media (max-width: 1000px)": {
        marginLeft: '1rem',
      },
});