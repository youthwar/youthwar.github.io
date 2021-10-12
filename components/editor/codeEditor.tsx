import {Controlled as CodeMirror} from 'react-codemirror2';
import { useState } from 'react';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import Logger from './logger';
import EditorWrap from './primitives/editorWrap';
import RunButton from './primitives/runButton';
import ClearButton from './primitives/clearButton';
import PreCode from './primitives/preCode';

const CodeEditor = ({ code, height, editable }: { code: string; editable?: boolean; height: string; }) => {

  const [output, setOutput] = useState(false);  

  const runCode = () => {
    // @ts-ignore
    const newFNSTR = `
      const logger = ${Logger}; 
      const newConsole = new logger();
      ${code};
      return newConsole.queue;
    `;

    const test = new Function(newFNSTR);
    const results = test();
    setOutput(results.join('\n'));
  }

  const clearResults = () => {
    setOutput(false);
  }

  return (
    <>
    <EditorWrap height={ height }>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          lineNumbers: true
        }}
        onBeforeChange={(editor, data, value) => {
          
        }}
        onChange={(editor, data, value) => {
        }}
        />
        
    </EditorWrap>
    <RunButton onClick={runCode}>Run it</RunButton>
    { output && (
      <>
        <PreCode>
          <label>Output:</label>
          <code>{output}</code>
        </PreCode>
        <ClearButton onClick={clearResults}>Clear</ClearButton>
      </>
    )}
    
    </>
  );
};

export default CodeEditor;