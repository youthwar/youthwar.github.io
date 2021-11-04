import styled from 'styled-components';

export const LeftNav = styled.div({
  background: 'whitesmoke',
  minHeight: '100vh',
  height: '100%',
  padding: '2em 1em',
  '@media (max-width: 1025px)': {
    height: 35,
    minHeight: 35,
    paddingLeft: 30
  }
});
