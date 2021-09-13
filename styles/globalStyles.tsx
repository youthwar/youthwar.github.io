import { createGlobalStyle } from 'styled-components';
import reset from './reset';
 
const GlobalStyle = createGlobalStyle({
  ...reset,
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'Open-Sans, Helvetica, Sans-Serif'
  }
});
 
export default GlobalStyle;