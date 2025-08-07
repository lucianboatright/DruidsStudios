import styled from 'styled-components';

export const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  margin: '2rem auto',
  gap: '1rem',
  padding: '1.5rem',
  borderLeft: '1px solid rgb(217, 189, 119)',
  // borderRadius: '8px',
  marginRight: '2rem',
  height: 'fit-content',
      "@media (max-width: 1000px)": {
          maxWidth: '90%',
    },
});

export const Label = styled.label({
  fontWeight: 'bold',
});

export const Input = styled.input({
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
});

export const Textarea = styled.textarea({
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  minHeight: '100px',
});

export const Button = styled.button({
  padding: '0.75rem',
  fontSize: '1rem',
  backgroundColor: 'rgb(217, 189, 119)',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background 0.3s',
  ':hover': {
    backgroundColor: 'rgb(217, 189, 119)',
  },
});

export const ErrorMsg = styled.span({
  color: 'red',
  fontSize: '1rem',
  // marginTop: '0.25rem',
  fontWeight: '500',
});