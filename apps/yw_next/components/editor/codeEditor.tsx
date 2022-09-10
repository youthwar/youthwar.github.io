import { Controlled as CodeMirror } from "react-codemirror2";
import { useState } from "react";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import Logger from "./logger";
import EditorWrap from "./primitives/editorWrap";
import RunButton from "./primitives/runButton";
import TestButton from "./primitives/testButton";
import ClearButton from "./primitives/clearButton";
import PreCode from "./primitives/preCode";

const CodeEditor = ({
  code,
  height,
  editable = true,
  test = false,
}: {
  code: string;
  test: boolean;
  height: string;
  editable?: boolean;
}) => {
  const [output, setOutput] = useState<Boolean>(false);
  const [stateCode, setCode] = useState(code);

  const runCode = (): void => {
    const newFNSTR: string = `
      const logger = ${Logger};
      const newConsole = new logger();
      ${stateCode};
      return newConsole.queue;
    `;

    const test = new Function(newFNSTR);
    const results = test();
    setOutput(results.join("\n"));
  };

  const clearResults = (): void => {
    setOutput(false);
  };

  return (
    <>
      <EditorWrap height={height}>
        <CodeMirror
          value={stateCode}
          options={{
            mode: "javascript",
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            editable ? setCode(value) : undefined;
          }}
          onChange={(editor, data, value) => {}}
        />
      </EditorWrap>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RunButton onClick={runCode}>Run it</RunButton>
        {test && <TestButton>test</TestButton>}
      </div>
      {output && (
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
