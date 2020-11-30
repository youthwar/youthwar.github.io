import styled from 'styled-components';

const blogWrap = styled.div({
  width: '100%',
  float: 'left',
  padding: '15px 40px 100px 60px',
  h1: {
    marginTop: 0,
    fontFamily: "'Source Sans Pro',sans-serif",
    textTransform: 'uppercase'
  },

  h3: {
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

  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    padding: '20px',

  } 
})


export default blogWrap;
  