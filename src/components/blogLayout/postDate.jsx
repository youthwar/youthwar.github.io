import styled from 'styled-components';

const postDate = styled.div({
  marginBottom: '4em',
  textTransform: 'uppercase',
  ['@media screen and (max-width: 1175px)']: {
    marginBottom: '1em'
  } 
});


export default postDate;
