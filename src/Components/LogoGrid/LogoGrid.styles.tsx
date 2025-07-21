import styled from 'styled-components'

export const StyledTitle = styled.div({
  textAlign: 'center',
  fontSize: '1.5rem',
  marginTop: '2rem',
  "@media (max-width: 600px)": {
        fontSize: '2rem',
    },
});

export const GridContainer = styled.div({
      marginTop: '1rem',
      marginBottom: '1rem',
    display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    padding: '1rem',
    maxWidth: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    "@media (min-width: 600px)": {
    marginTop: '5rem',
    marginBottom: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
});

export const LogoItem = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  img: {
    marginLeft: '2rem',
    marginRight: '2rem',
    // maxWidth: '100%',
    maxHeight: '35px',
    objectFit: 'contain',
      "@media (min-width: 600px)": {
        maxHeight: '75px',
    },
  },
});