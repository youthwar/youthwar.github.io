import styled from 'styled-components';

export const Section = styled.div({
  background: 'white',
  width: '100%',
  display: 'flex',
  borderBottom: '1px solid #ccc',
  paddingBottom: '30px',
  marginBottom: '30px',
  'pre': {
    //padding: '15px',
    marginTop: '15px 0px'
  },
  'table': {
    borderCollapse: 'collapse',
    'thead': {
      borderBottom: '1px solid #ccc',

    },
    'th, td': {
      textAlign: 'left',
      padding: '10px'
    },

    'tr:nth-child(even)': {
      backgroundColor: '#f2f2f2'
    }
  }

});
