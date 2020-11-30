import React, { useState } from 'react';
import { Controlled as CodeMirror} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neo.css';
import { createGlobalStyle } from 'styled-components';
import CButton from './primitives/button';
import CodeResults from './primitives/codeResults';
import SuccessMessage from './primitives/successMessage';
import ErrorMessage from './primitives/errorMessage';

const editor = ({ code, height, runCode }) => {
  const cleanCode = code;

  const [ editorCode, setCode] = useState(cleanCode);
  const [ codeResults, setResults] = useState(false);
  const [ errorMessage, setError ] = useState(false);

  const saveUpdates = (editor, data, value) => {
    setCode(value);
  };

  const runEditor = () => {
    try {
      const testFN = new Function(editorCode);
      const results = testFN();
      if (results) {
        setResults(results);
        return setError(false);
      } else {
        setError('You have either not returned from the function, called the function or both');
      }
      
    } catch(e) {
      setResults(false);
      setError(e.toString());
    }
  }

  const buildRunCode = () => {
    const results = (
      <CodeResults>
        <label>OUTPUT:</label>
        <SuccessMessage>
          { `${codeResults}` }
        </SuccessMessage>
        <ErrorMessage>
          { errorMessage }
        </ErrorMessage>
        
      </CodeResults>
    );

    return (
      <>
        <CButton onClick={runEditor}>
          Run This code
        </CButton>

        { codeResults || errorMessage ? (
          results
        ): null }
      </>
    );
  }
  
  const HeightOverride = createGlobalStyle({
    '.CodeMirror': {
      height: `${height} !important`
    }
  });

  return (
    <>
      { height ? (
        <HeightOverride />
      ) : null }
      <CodeMirror
        value={editorCode}
        options={{
          mode: 'javascript',
          theme: 'neo',
          lineNumbers: true
        }}
        onBeforeChange={saveUpdates}
      />
      { runCode ? (
        buildRunCode()
      ): null}
    </>
  );
};

export default editor;