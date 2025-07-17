import styled from 'styled-components'

export const StyledHeader = styled.header({
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '4rem',
    marginBottom: '4rem',
  
            "@media (max-width: 765px)": {
                marginTop: '1rem',
                marginBottom: '1rem',
            },

    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        height: '40px',
        a: {
          color: 'rgb(217, 189, 119)',
            fontSize: '4rem',
            fontWeight: '600',
            textDecoration: 'none',
            // borderRadius: '0.5rem',
            '&:hover': {
                textDecoration: 'underline',
                transform: 'scale(1.05)',
            },
            "@media (max-width: 765px)": {
                fontSize: '1.5rem',
                padding: '0px 10px',
                borderRadius: '0.25rem',
                // textDecoration: 'underline',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            },
    },
  },
});