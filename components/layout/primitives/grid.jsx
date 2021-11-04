import styled from 'styled-components';

export const Grid = styled.div({
  
});

export const Row = styled.div({
  display: 'flex',
  '@media (max-width: 1025px)': {
    flexDirection: 'column',
  }
});


export const Col = styled.div({
  flex: (props) => props.size,

});



