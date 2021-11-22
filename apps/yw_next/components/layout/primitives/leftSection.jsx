import styled from 'styled-components';
import generateMQ from '@components/utils/generateMQ';
export const LeftSection = styled.div({
  flex: (props) => props.size,
  padding: '0px 30px 15px 30px',
  h3: {
    marginTop: '0'
  },

  'pre': {
    padding: '15px',
    '@media (max-width: 1025px)': {
      overflow: 'scroll'
    }
  },
  ...generateMQ({ padding: '1em' })

});
