import {Controlled as CodeMirror} from 'react-codemirror2';
import { useState } from 'react';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import EditorWrap from './primitives/editorWrap';
import RunButton from './primitives/runButton';
import PreCode from './primitives/preCode';

const CodeEditor = ({ code, height, editable }: { code: string; editable?: boolean; height: string; }) => {

  const [output, setOutput] = useState(false);  

  const testLog: any[] = [];
  const exampleLog = (val: any) => {
   let saveVal = JSON.stringify(val);
    testLog.push(saveVal);
  }

  const runCode = () => {
    const newFNSTR = `const testLog = []; logger = ${exampleLog}; ${code}; return testLog;`;
    const test = new Function(newFNSTR);
    const results = test();
    setOutput(results.join('\n'));
  }

  return (
    <>
    <EditorWrap style={{ height }}>
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
    <PreCode>
      <label>Output:</label>
      <code>{output}</code>
    </PreCode>
    </>
  );
};

export default CodeEditor;