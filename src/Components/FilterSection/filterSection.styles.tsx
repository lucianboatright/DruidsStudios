import styled from 'styled-components'

export const StyledTitle = styled.nav({
    fontSize: '4rem',
    textAlign: 'center',
});

export const StyledList = styled.nav({
  marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
      justifyContent: 'space-between',
        listStyle: 'none',
});


export const StyledButton = styled.button({
  // border: '1px solid transparent',
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
  borderRight: '1px solid rgb(217, 189, 119)',
    "&:last-child": {
    borderRight: 'none',
  },

  "&::before": {
    content: "''",
    display: "inline-block",
    width: "20px",
    height: "20px",
    // border: "2px solid #333",
    borderRadius: "4px",
    background: "#fff",
    transition: "background 0.2s, border-color 0.2s",
    marginRight: "1rem",
  },

  "&:focus::before, &:focus-visible::before": {
    background: "rgb(217, 189, 119)",
    borderColor: "rgb(217, 189, 119)",
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
