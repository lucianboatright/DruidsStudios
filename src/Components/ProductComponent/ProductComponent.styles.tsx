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
  paddingTop: '4rem',
  paddingBottom: '3rem',
  // paddingBottom: '1rem',
  // borderBottom: '1px solid rgb(217, 189, 119)',
  borderTop: '1px solid rgb(217, 189, 119)',

  gap: '1rem',
    // margin: '10px 10px 10px 10px',

  '@media (max-width: 1000px)': {
    margin: '10px 10px 10px 10px',
    paddingBottom: '1rem',
    paddingTop : '1rem',
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
    maxHeight: '3rem',
    // flex: '1',
    // alignSelf: 'flex-start',
  });
  
  export const StyledDetails = styled.section({
    fontSize: '1.5rem',
  gridArea: 'section2',
  // flex: '2',
  // width: '20rem',
  marginLeft: '5rem',
  
  "@media (max-width: 1000px)": {
    fontSize: '1rem',
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
    marginTop: '2rem',
    marginLeft: '14rem',
    // alignSelf: 'flex-start',

    
    "@media (max-width: 1000px)": {
        marginLeft: '0rem',
      },
});