import styled from 'styled-components'

export const GridContainer = styled.div({
    marginTop: '4rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gap: '1.5rem',
  padding: '1rem',
  alignItems: 'center',
});

export const LogoItem = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',

  img: {
    maxWidth: '100%',
    maxHeight: '60px',
    objectFit: 'contain',
  },
});