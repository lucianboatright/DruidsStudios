import styled from 'styled-components'

export const StyledTitle = styled.nav({
    fontSize: '3rem',
    textAlign: 'center',
    // width: '40rem',
    marginLeft: 'auto',
    marginRight: 'auto',
});

export const StyledBox = styled.nav({
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '40rem',
    border: '1px solid',
    padding: '1rem 2rem',
    "@media (min-width: 765px)": {
        width: 'fit-content',
    },
});
