import styled from 'styled-components';
import { rhythm, scale } from '../../../utils/typography';



const articleWrap = styled.div({
  width: '100%',
  float: 'left',
  marginRight: '45px',
  borderBottom: '1px solid #ccc',
  a: {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'underline',
    display: 'block',
    width: '100%',
    height: '100%',
    minHeight: '60px',
    padding: '20px',
    '&:hover': {
      color: 'blue'
    }
  },

  p: {
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '.025em',
    marginBottom: '0'
  },

  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    a: {
      float: 'left',
    }
  } 
})


export default articleWrap;
  