import styled from "styled-components";

export const StyledBox = styled.div({
  marginLeft: 'auto',
  marginRight: 'auto',
//   marginBottom: '2rem',
//   border: '1px solid',
  padding: '1rem 2rem',
//   borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  "@media (min-width: 765px)": {
    width: 'fit-content',
  },
//   span: {
//     fontSize: '2',
//   }
});

export const StyledTitle = styled.div({
    fontSize: '1.5rem',
});

export const Square = styled.div<{ active?: boolean}>(props => ({
  width: '22px',
  height: '22px',
//   borderRadius: '4px',
//   border: '2px solid #333',
  background: props.active ? 'rgb(217, 189, 119)' : '#fff',
  transition: 'background 0.2s, border-color 0.2s',
  cursor: 'pointer',
  display: 'inline-block',
}));