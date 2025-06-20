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

// export const StyledImage = styled.img({
//   maxHeight: '5rem',
//   display: 'block',
//   // height: 'auto',
//   maxWidth: '100%',
//   "@media (min-width: 1000px)": {
    
//     maxHeight: '5rem',
//     },
// });

export const StyledHeader = styled.header({

    // background: 'lightGrey',
    
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

  export const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 8rem;
  `;
  
  export const Grid = styled.div`
    // margin-left: 50px;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledTitle = styled.nav({
    fontSize: '4rem',
    textAlign: 'center',
});

export const StyledGrid = styled.nav({
        marginLeft: 'auto',
        marginRight: 'auto',
});
