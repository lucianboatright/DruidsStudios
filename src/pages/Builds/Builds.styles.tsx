import styled from 'styled-components'

export const StyledTitle = styled.nav({
    fontSize: '2rem',
    textAlign: 'center',
    "@media (min-width: 765px)": {
      fontSize: '3rem',
    },
});

export const StyledBox = styled.nav({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '2rem',
    // width: '40rem',
    border: '1px solid',
    padding: '1rem 2rem',
         borderRadius: '4px',

    "@media (min-width: 765px)": {
        width: 'fit-content',
    },
});
