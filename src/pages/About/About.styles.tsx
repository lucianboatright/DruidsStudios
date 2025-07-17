import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const StyledIcons = styled.nav({
  all: 'unset', 
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

});

export const StyledImage = styled.img({
  maxHeight: '5rem',
  display: 'block',
  // height: 'auto',
  maxWidth: '100%',
  "@media (min-width: 1000px)": {
    
    maxHeight: '5rem',
    },
});



export const StyledLink = styled(Link)({
// height: '10rem',
  img: {
    // height: '100px',
      minHeight: '100px',
      display: 'block',
      // height: 'auto',
      maxWidth: '100%',
  },
});
export const StyledContactText = styled.nav({
  fontSize: '3rem',
});

export const Title = styled.h2({
  fontSize: '2rem',
  marginBottom: '8rem',
});

export const Grid = styled.div({
        display: 'flex',
        maxWidth: '80rem',
          marginLeft: 'auto',
        marginRight: 'auto',
  "@media (min-width: 1000px)": {
        marginTop: '10rem',
        marginBottom: '10rem',
          display: 'flex',
          justifyContent: 'space-evenly',
        
    },
});

export const StyledGrid = styled.nav({
        marginLeft: 'auto',
        marginRight: 'auto',
});

export const StyledTextBody = styled.div({
      margin: '2% 5%',
      "@media (min-width: 765px)": {
          fontSize: '3rem',
          margin: '5% 15%',
      },
});

