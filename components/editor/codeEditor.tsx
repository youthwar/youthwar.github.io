import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

const codeEditor = ({ code, height }: { code: string; height: string; }) => {
  return (
    <div style={{ height }}>
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
    </div>
  );
};

export default codeEditor;