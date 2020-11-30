import styled from 'styled-components';

const codeResults = styled.pre({
  padding: '20px',
  color: '#aaa',
  backgroundColor: '#222',
  whiteSpace: '',
  borderRadius: '15px',
  borderBottom: '1px solid #555',
  boxShadow: '0 1px 5px rgba(0,0,0,0.4) inset 0 0 20px rgba(0,0,0,0.2) inset',
  font: "'16px/24px' 'Courier New', 'Courier', 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace",

  '& label': {
    textTransform: 'uppercase',
    color: 'white',
    padding: '10px',
    background: '#333',
    width: '100%',
    display: 'block',

  }
  
});

export default codeResults;
  