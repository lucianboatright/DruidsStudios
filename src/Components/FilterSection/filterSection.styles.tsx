import styled from 'styled-components'



export const StyledTitle = styled.nav({
    fontSize: '4rem',
    textAlign: 'center',
});

export const StyledList = styled.nav({
  marginTop: '1rem',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
      justifyContent: 'space-between',
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
