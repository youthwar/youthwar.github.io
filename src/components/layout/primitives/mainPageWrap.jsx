import React from 'react'
import styled from 'styled-components';
import { rhythm, scale } from '../../../utils/typography';

export default styled.div({
  width: 'calc(100vw - 200px)',
  float: 'left',
  position: 'relative',
  left: '200px',
  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    maxWidth: '100%',
    left: '0'
  } 
});