import styled from 'styled-components';

export const RightSection = styled.div({
  flex: (props) => props.size,
  padding: '15px',
  '.CodeMirror': {
    minHeight: (props) => `${props.height}px`,
    '.CodeMirror-line': {
      paddingLeft: '15px'
    }
  },

  '@media (max-width: 1025px)': {
    paddingLeft: 30,
    paddingright: 30
  }

  
})