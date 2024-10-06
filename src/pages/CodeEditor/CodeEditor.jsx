import {useState, useRef, createContext} from "react";
import Editor from "@monaco-editor/react";
import { Header, Sidebar, Output } from "./index.js";
import executeCode from "../../api/executeCode.js";

export const CodeContext = createContext();

const CodeEditor = () => {
  const editorRef = useRef();
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onChange = (code) => {
    setCode(code);
  };

  const onRun = (code) => {
    const data = executeCode(code);
    setResult(data);
  };

  return (
    <div>       
      <CodeContext.Provider value={[code, result, onRun]}>
      <Header />
        <Sidebar />
        <Editor
          height="70vh"
          theme="vs-dark"
          defaultLanguage="python"
          onMount={onMount}
          value={code}
          onChange={onChange}
        />
        <Output />
      </CodeContext.Provider>
    </div>
  );

};

export default CodeEditor;