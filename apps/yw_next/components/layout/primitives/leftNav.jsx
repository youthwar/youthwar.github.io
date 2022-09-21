import styled from 'styled-components';

export const LeftNav = styled.div({
  background: 'whitesmoke',
  minHeight: '100vh',
  height: '100%',
  padding: '2em 1em',
  width: '300px',
  '@media (max-width: 1025px)': {
    height: 35,
    minHeight: 35,
    padding: '1em',
    
  }
});
