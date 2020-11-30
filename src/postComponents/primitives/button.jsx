import styled from 'styled-components';

const customButton = styled.div({
  padding: '20px',
  backgroundColor: '#ccc',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginBottom: '2em',
  '&:hover': {
    backgroundColor: 'blue',
    color: 'white'
  }
});

export default customButton;
  