import styled from 'styled-components';

export const SearchBar = styled.input({
  background: 'none',
  width: '100%',
  border: 'none',
  padding: '7px 2px',
  marginTop: '10px',
  marginBottom: '10px',
  '&:focus': {
    border: 'none',
    outline: 'none'
  }
});
