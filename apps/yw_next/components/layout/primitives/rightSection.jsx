import styled from 'styled-components';
import generateMQ from '@components/utils/generateMQ';
export const RightSection = styled.div({
  flex: (props) => props.size,
  padding: '15px',
  '.CodeMirror': {
    minHeight: (props) => `${props.height}px`,
    '.CodeMirror-line': {
      paddingLeft: '15px'
    }
  },

  ...generateMQ({
    padding: '1em',
    pre: {
      overflow: 'scroll',
      padding: '1em'
    }
  })
})