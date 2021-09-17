import styled from 'styled-components';

export const LeftSection = styled.div({
  flex: (props) => props.size,
  padding: '0px 15px 15px 30px',
  
  'pre': {
    padding: '15px',
    marginTop: '15px 0px'
  },
  h3: {
    marginTop: '0'
  }
});
