import styled from 'styled-components';

export const SearchBar = styled.input({
  background: 'none',
  width: '100%',
  border: 'none',
  padding: '7px',
  marginTop: '20px',
  '&:focus': {
    border: 'none',
    outline: 'none'
  }
});
