import styled from 'styled-components';

export default styled.pre({
  background: '#333',
  whiteSpace: 'pre',
  wordWrap: 'break-word',
  overflow: 'auto',
 // margin: '20px 25px',
  borderRadius: '4px',
  border: '1px solid #292929',
  position: 'relative',
  width: '100%',
  boxSizing: 'border-box',
  'label': {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: '13px',
    color: '#ddd',
    position: 'absolute',
    left: '1px',
    top: '15px',
    textAlign: 'center',
    width: '60px',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'pointer-events': 'none',
  },
  code: {
    fontFamily:
      '"Inconsolata","Monaco","Consolas","Andale Mono","Bitstream Vera Sans Mono","Courier New",Courier,monospace',
    display: "block",
    margin: "0 0 0 60px",
    padding: "15px 16px 14px",
    borderLeft: "1px solid #555",
    overflowX: "auto",
    fontSize: "13px",
    lineHeight: "19px",
    color: "#ddd"
  }
});
