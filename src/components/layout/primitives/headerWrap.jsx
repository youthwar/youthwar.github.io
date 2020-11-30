import React from 'react'
import styled from 'styled-components';

export default styled.div({
  height: '100vh',
  padding: '0px 10px 15px 0',
  fontWeight: 'bold',
  width: '100%',
  maxWidth: '200px',
  borderRight: '1px solid #ddd',
  float: 'left',
  ['@media screen and (max-width: 1175px)']: {
    top: 0,
    background: 'whitesmoke',
    width: '100%',
    maxWidth: '100%',
    height: '50px',
    float: 'left',
    paddingLeft: '0px',
    borderRight: 'none',
    borderBottom: '1px solid #ddd',
  } 
});