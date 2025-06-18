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

export const StyledHeader = styled.header({

  background: 'lightGrey',
  
  
  nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
    height: '40px',
    a: {
      textDecoration: 'none',
        '&:hover': {
            background: 'white',
        },
    },
  },
});