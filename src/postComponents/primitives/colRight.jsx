import styled from 'styled-components';

const col = styled.div({
  float: 'left',
  width: 'calc(100% - 30em)',
  marginBottom: '40px',
  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    maxWidth: '100%',
    marginTop: '5em',
    paddingRight: '20px'
  } 
});

export default col;
  