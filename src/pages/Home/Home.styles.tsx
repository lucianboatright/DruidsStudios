import styled from 'styled-components'


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

export const StyledTextBody = styled.div({
      margin: '2% 5%',
      "@media (min-width: 765px)": {
          fontSize: '3rem',
          margin: '5% 15%',
      },
});
