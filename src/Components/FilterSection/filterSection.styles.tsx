import styled from 'styled-components'


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
  justifyContent: 'center',

  marginBottom: '1rem',
  marginTop: '1rem',
  "@media (min-width: 1000px)": {
    marginBottom: '0rem',
    },
});

export const StyledText = styled.div({
    alignContent: 'space-around',
    display: 'inline-block',    
    fontFamily: '"Typewriter", sans-serif',
    fontStyle: "normal",
    fontWeight: 800,
    color: 'rgb(217, 189, 119)',
    fontSize: "1.1rem",
    lineHeight: "1.1",
    letterSpacing: "0",
    marginRight: '1rem',
    "@media (min-width: 1000px)": {
      alignContent: 'end',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: 'rgb(217, 189, 119)',
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
});

export const StyledTitle = styled.nav({
    fontSize: '4rem',
    textAlign: 'center',
});


export const StyledButton = styled.button({
      border: '1px solid transparent',
        borderRadius: '0.25rem',   
    all: 'unset', 
    cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color:'rgb(217, 189, 119)',
  fontSize: "1.1rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  paddingLeft: '0.2rem',
  paddingRight: '0.2rem',
  '&:hover': {
    //   background: 'lightGrey',
    border: '1px solid rgb(217, 189, 119)',
    borderRadius: '0.25rem',
},
'&:focus': {
    borderRadius: '0.25rem',
    border: '1px solid rgb(217, 189, 119)',
        backgroundColor: 'rgb(217, 189, 119)',
        color: 'rgb(31, 50, 37)'
    },
    "@media (min-width: 1000px)": {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: 'rgb(217, 189, 119)',
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
  color: 'rgb(217, 189, 119)',
  fontSize: "2rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  "@media (min-width: 1000px)": {
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: 'rgb(217, 189, 119)',
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
});
