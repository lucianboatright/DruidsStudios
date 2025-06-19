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

export const StyledTitle = styled.nav({
    fontSize: '4rem',
    textAlign: 'center',
});

export const StyledHeader = styled.header({
    background: 'lightGrey',
    
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '40px',
        a: {
            fontSize: '2rem',
            textDecoration: 'none',
            '&:hover': {
                background: 'white',
            },
            "@media (max-width: 600px)": {
                fontSize: '1.2rem',
            },
    },
  },
});


export const StyledFilterArea = styled.div({
  display: 'flex',
  justifyContent: 'none',
  
  marginBottom: '1rem',
  marginTop: '1rem',
  "@media (min-width: 1000px)": {
    justifyContent: 'center',
    },
});

export const FilterContainer = styled.div({
//   display: 'flex',
  justifyContent: 'center',

  marginBottom: '1rem',
  marginTop: '1rem',
  "@media (min-width: 1000px)": {
    marginBottom: '0rem',
    },
});

export const StyledText = styled.div({
  alignContent: 'end',
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "1.1rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '1rem',
    "@media (min-width: 1000px)": {

      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
});

export const StyledButton = styled.button({
    all: 'unset', 
    cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "1.1rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  paddingLeft: '0.2rem',
  paddingRight: '0.2rem',
  '&:hover': {
      background: 'lightGrey',
    },
    '&:focus': {
        backgroundColor: 'lightGrey',
    },
    "@media (min-width: 1000px)": {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
  });

export const StyledSpacer = styled.div({
  // cursor: `url(${MiddleFinger}), pointer`,
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "2rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  "@media (min-width: 1000px)": {

      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
  });
