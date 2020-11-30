import React from 'react'
import styled from 'styled-components';
import { rhythm, scale } from '../../../utils/typography';

export default styled.div({
  width: '100%',
  paddingTop: rhythm(1/2),
  ['@media screen and (max-width: 1175px)']: {
    display:'none',
  } 
});