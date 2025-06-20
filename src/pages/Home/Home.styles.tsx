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

export const StyledMainImage = styled.div({
  img: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5rem',
    marginTop: '5rem',
  },
});


export const StyledTitle = styled.div({
    // display: 'block',
    // height: 'auto',
    // maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5rem',
    marginTop: '5rem',
    fontSize: '3rem',
});


export const StyledHeader = styled.header({

    marginTop: '1rem',
    marginBottom: '1rem',
    
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        height: '40px',
        a: {
          color: 'rgb(217, 189, 119)',
            fontSize: '4rem',
            fontWeight: '600',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            '&:hover': {
              padding: '0.3rem 2rem',
                background: 'white',
            },
            "@media (max-width: 600px)": {
                fontSize: '1.2rem',
            },
    },
  },
});