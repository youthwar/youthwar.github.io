import styled from 'styled-components';

export const PostList = styled.div({
  borderBottom: '1px solid #ccc',
  padding: '30px',
  cursor: 'pointer',
  '&:hover': {
    background: 'whitesmoke'
  },
  '@media (max-width: 1025px)': {
    padding: '1em'
  }

});
