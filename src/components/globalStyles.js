
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
  },

  '*:before, *:after': {
    boxSizing: 'border-box',
  },

  'html, body': {
    height: '100%',
    position: 'relative',
  },

  a: {
    color: 'black',
  },
  /* Adjust the position of the line numbers */
  '.gatsby-highlight pre[class*="language-"].line-numbers': {
    paddingLeft: '2.8em',
  },

  '.gatsby-highlight': {
    backgroundColor: '#fdf6e3',
    borderEadius: '0.3em',
    margin: '0.5em 0',
    padding: '1em',
    overflow: 'auto',
  },

  '.gatsby-highlight pre[class*="language-"].line-numbers': {
    padding: 0,
    paddingLeft: '2.8em',
    overflow: 'initial',
  },

  'pre': {
    background: '#eee',
    letterSpacing: 'mono'
  },

  'h2': {
    marginTop: '0',
    fontFamily: "'Source Sans Pro',sans-serif",
    textTransform: 'uppercase',
  }
});

export default GlobalStyle;