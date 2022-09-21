import { Controlled as CodeMirror } from "react-codemirror2";

import React, { useState } from "react";

import ts from "typescript";
import Editor from "@monaco-editor/react";

import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import Logger from "./logger";
import EditorWrap from "./primitives/editorWrap";
import RunButton from "./primitives/runButton";
import TestButton from "./primitives/testButton";
import ClearButton from "./primitives/clearButton";
import PreCode from "./primitives/preCode";

type EditorType = { getValue: () => string };

const CodeEditor = ({
  code,
  height = "500px",
  editable = true,
  test = false,
}: {
  code: string;
  test: boolean;
  height: string;
  editable?: boolean;
}) => {
  const [output, setOutput] = useState<Boolean>(false);
  const editorRef = React.useRef<EditorType | null>(null);

  const SetRef = (editor: EditorType) => {
    editorRef.current = editor;
  };

  const runCode = (): void => {
    const value = editorRef.current?.getValue();
    const transpiledCode = ts.transpile(value ?? "");

    const newFNSTR: string = `
      const logger = ${Logger};
      const newConsole = new logger();
      ${transpiledCode};
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
      <Editor
        height={height}
        defaultLanguage="typescript"
        defaultValue={code}
        onMount={SetRef}
        theme="vs-dark"
      />

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
