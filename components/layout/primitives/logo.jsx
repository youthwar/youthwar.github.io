import styled from 'styled-components';

export const Logo = styled.a({
  fontWeight: 800,
  lineHeight: '30px',
  color: '#000',
  textDecoration: 'none',
  borderBottom: '1px solid #000',
  paddingBottom: '36px',
  marginBottom: '15px',
  width: '100%',
  display: 'block',
  '@media (max-width: 1025px)': {
    fontSize: '1.8em'
  }
});
