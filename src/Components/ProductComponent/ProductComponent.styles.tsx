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


export const StyledCard = styled.div<{ hasdetails?: any }>(props => ({
  display: 'grid',
  gridTemplateColumns: '8rem auto auto',
  // gridTemplateAreas: props.contentLength ? `"section1 section2 section3" "section4 section4 section4"` : `"section1 section2" "section4 section4"`,
  gridTemplateAreas: props.hasdetails ? `"section1 section2 section3" "section4 section4 section4"` : `"section1 section2" "section4 section4"`,
  marginLeft: '5%',
  marginRight: '5%',
  paddingTop: '2rem',
  // paddingBottom: '1rem',
  // borderBottom: '1px solid rgb(217, 189, 119)',
  borderTop: '1px solid rgb(217, 189, 119)',

  gap: '1rem',

  '@media (max-width: 1000px)': {
    margin: '30px 10px 10px 10px',
    gridTemplateColumns: 'auto',
    gridTemplateAreas: `
      "section1"
      "section2"
      "section3"
      "section4"
    `,
  },
}));

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
  
  export const StyledDimensions = styled.section({

  gridArea: 'section3',
  // flex: '2',
  // width: '20rem',
  marginLeft: '5rem',
  
  "@media (max-width: 1000px)": {
      marginLeft: '0rem',
    },
  });
  
  export const StyledCost = styled.section({

  gridArea: 'section3',
  // flex: '2',
  // width: '20rem',
  marginTop: '3rem',
  marginLeft: '5rem',
  
  "@media (max-width: 1000px)": {
      marginLeft: '0rem',
    },
  });
  
  export const StyledContent = styled.section({
    gridArea: 'section4',
    // flex: '3',
    // marginTop: '1rem',
    marginLeft: '15rem',
    // alignSelf: 'flex-start',

    
    "@media (max-width: 1000px)": {
        marginLeft: '0rem',
      },
});