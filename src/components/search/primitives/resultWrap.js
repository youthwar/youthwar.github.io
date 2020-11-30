import React from 'react'
import styled from 'styled-components';
import { rhythm, scale } from '../../../utils/typography';

export default styled.div({
  width: '100%',
  
  'a': {
    width: '100%',
    fontSize: '14px',
    marginBottom: rhythm(1/2),
    background: 'blue',
    color: 'white',
    display: 'block',
    padding: rhythm(1/5),
    '&:hover': {
      background: '#ccc',
      color: 'blue'
    }
  },
  ['@media screen and (max-width: 1175px)']: {
  
  } 
});