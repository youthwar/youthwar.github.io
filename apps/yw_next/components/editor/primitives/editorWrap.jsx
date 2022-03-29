import styled from 'styled-components';

export default styled.div({
    border: '1px solid #ccc',
    '.CodeMirror': {
        height: (props) => props.height,
    }
})