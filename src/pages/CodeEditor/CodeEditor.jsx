import { useState, useRef, createContext, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Header, Output } from "./index.js";
import executeCode from "../../api/executeCode.js";
import { useNavigate, useParams } from "react-router-dom";
import { projectSave } from "../../api/project.js";

export const CodeContext = createContext();

const CodeEditor = () => {
  const editorRef = useRef();
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    projectLoad(projectId);
  }, [])

  const projectLoad = async (projectId) => {
    try {
      const res = await projectLoad(projectId);
      if (res.status === 200) {
        setCode(res.data.code);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onChange = (code) => {
    setCode(code);
  };

  const onRun = async (code) => {
    if (code === "") {
      alert('empty');
      return;
    }
    try {
      const res = await executeCode(code);
      if (res.status === 200) {
        setResult(JSON.parse(res.data).result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (code) => {
    try {
      const res = await projectSave({ 'code': code });
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <CodeContext.Provider value={{ code, result, onRun, onSubmit }}>
        <Header />
        <div>
          <Editor
            height="50vh"
            theme="vs-dark"
            defaultLanguage="python"
            onMount={onMount}
            value={code}
            onChange={onChange}
          />
          <Output />
        </div>
      </CodeContext.Provider>
    </div>
  );

};

export default CodeEditor;