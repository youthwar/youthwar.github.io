import styled from 'styled-components';

const buildWrap = styled.div({
  width: '100%',
  float: 'left',
  padding: '15px 40px 100px 60px',
  h1: {
    marginTop: 0,
    fontFamily: "'Source Sans Pro',sans-serif",
    textTransform: 'uppercase'
  },
  a: {
    color: 'blue'
  },

  p: {
    fontSize: '16px',
    marginBottom: '0'
  },

  '.ce-toolbar__content, .ce-block__content': {
    maxWidth: '100%'
  },

  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    padding: '20px',

  } 
})


export default buildWrap;
  