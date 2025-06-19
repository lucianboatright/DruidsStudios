import styled from 'styled-components';

export const Grid = styled.div({
  width: '100%',
  margin: '2rem 0',
  display:'flex',
  justifyContent: 'space-between',
  "@media (max-width: 1000px)": {
      maxWidth: '100%',
      display:'block',


    },
});

export const Image = styled.img( {
    maxWidth: '40%',
    marginRight: '0.5rem',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
    "@media (max-width: 1000px)": {
        maxWidth: '100%',


    },
});