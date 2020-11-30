import styled from 'styled-components';

const col = styled.div({
  width: '30em',
  float: 'left',
  paddingRight: '40px',
  marginBottom: '40px',
  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    maxWidth: '100%',
    float: 'left'
  } 
});

export default col;
  