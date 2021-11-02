import styled from 'styled-components';

export const LeftSection = styled.div({
  flex: (props) => props.size,
  padding: '0px 15px 15px 30px',
  h3: {
    marginTop: '0'
  },

  'pre': {
    padding: '15px'
  }
});
