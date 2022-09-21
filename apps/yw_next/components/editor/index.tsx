import dynamic from "next/dynamic";
const CodeEditor = dynamic(import("./codeEditor"), { ssr: false });

const editorWrap = ({
  code,
  height,
  test,
}: {
  code: string;
  height: string;
  test: boolean;
}) => {
  return <CodeEditor code={code} height={height} test={test}></CodeEditor>;
};

export default editorWrap;
