import styled from 'styled-components'


export const StyledCard = styled.div({
  display: 'flex',
//   justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  marginLeft: '10%',
  marginRight: '10%',
  marginTop: '3rem',
  marginBottom: '3rem',

});

export const StyledTitle = styled.div({
    fontSize: '2rem',
    width: '10rem',
    alignSelf: 'flex-start',
});

export const StyledDetails = styled.div({
    width: '20rem',
    marginLeft: '5rem',
});

export const StyledContent = styled.div({
    marginLeft: '5rem',
    alignSelf: 'flex-start',

});