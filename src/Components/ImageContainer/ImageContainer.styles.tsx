import styled from 'styled-components';

// export const Grid = styled.div({
//   margin: '0rem 0',
//   display:'block',
//       maxWidth: '100%',
//   justifyContent: 'space-between',
//   "@media (min-width: 1000px)": {
//         margin: '2rem 0',
//       display:'flex',
//     },
// });

// export const Image = styled.img<{ greaterthanthree?: boolean}>(props => ( {
    // height: 'auto',
    // borderRadius: '8px',
    // marginBottom: '1rem',
    //     maxWidth: '100%',
    // "@media (min-width: 1000px)": {
    // maxWidth: props.greaterthanthree ? '32%' : '50%',
    //     marginRight: '0.5rem',
    // },
// }));


export const StyledIcons = styled.nav<{ greaterthanthree?: boolean}>(props => ({
  display: 'flex',
  justifyContent: 'center',
//   alignItems: 'center',
  // overflow: 'hidden',
  overflow: 'clip',
  maxWidth: '500px',
//   height: '30rem',
//   minHeight: '30rem',

    "@media (max-width: 1000px)": {
        display: 'block',
        // overflow: 'visible',
        height: 'auto',
    },

  img: {
    borderRadius: '8px',
    marginBottom: '1rem',
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    // maxWidth: '100%',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    "@media (min-width: 1000px)": {
        maxWidth: props.greaterthanthree ? '32%' : '50%',
        maxHeight: '30rem',
        marginRight: '0.5rem',
    },
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
}));

// Modal overlay background
export const ImageModalOverlay = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

// Enlarged image
export const ImageModalContent = styled.img({
  maxWidth: '90vw',
  maxHeight: '90vh',
  borderRadius: '4px',
  boxShadow: '0 0 10px rgb(217, 189, 119)',
});