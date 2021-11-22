import styled from 'styled-components';
import generateMQ from '@components/utils/generateMQ';
export const PostTitle = styled.div({
  fontWeight: 800,
  fontSize: '1.5em',
  color: '#000',
  textDecoration: 'none',
  padding: '12px 0px 0 30px',
  margin: '15px 0px 15px',
  display: 'block',
  ...generateMQ({ padding: '.7em' })
});
