import dynamic from 'next/dynamic';
const CodeEditor = dynamic(import('./codeEditor'), {ssr: false})

const editorWrap = ({ code, height }: { code: string; height: string; }) => {
  return (<CodeEditor code={code} height={height}></CodeEditor>)
}

export default editorWrap;