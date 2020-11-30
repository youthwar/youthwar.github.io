import React from 'react'
import styled from 'styled-components';

export default styled.div({
  width: '20%',
  maxWidth: '200px',
  position: 'fixed',
  top: '15px',
  left: 0,
  paddingLeft: '20px',
  zIndex: '9',
  paddingRight: '20px',

  ['@media screen and (max-width: 1175px)']: {
    width: '100%',
    maxWidth: '100%',
    height: '50px',
    top: '0',
    float: 'left',
    paddingLeft: '20px',
    borderRight: 'none',
    borderBottom: '1px solid #ddd',
  } 
});