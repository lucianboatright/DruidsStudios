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

export const StyledCard = styled.div({
  display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   width: '80%',
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '3rem',
  marginBottom: '3rem',
    // justifyContent: 'center',
    paddingTop: '3rem',
     borderTop: '1px solid lightGrey'
});

export const StyledTitle = styled.div({
    fontSize: '2rem',
    flex: '1',
    alignSelf: 'flex-start',
});

export const StyledDetails = styled.div({
    flex: '2',
    // width: '20rem',
    marginLeft: '5rem',
});

export const StyledContent = styled.div({
    flex: '3',
    marginLeft: '5rem',
    alignSelf: 'flex-start',

});