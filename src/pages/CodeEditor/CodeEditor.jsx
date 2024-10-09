import { useState, useRef, createContext, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Header, Output } from "./index.js";
import executeCode from "../../api/executeCode.js";
import { useNavigate, useParams } from "react-router-dom";
import { projectDetail, projectSave } from "../../api/project.js";
import ChatWindow from "./ChatWindow.jsx";

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
      const res = await projectDetail(projectId);
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
        setResult(res.data.result);
        // setResult(JSON.parse(res.data).result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (projectId, code) => {
    try {
      const res = await projectSave({
        projectId: projectId,
        code: code
      });
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  //--------채팅 추가하기---------
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  //--------채팅 추가하기---------

  return (
    <div>
      <CodeContext.Provider value={{projectId, code, result, onRun, onSubmit }}>
        <Header onChatClick={toggleChat} />
        <div>
          <Editor
            height="60vh"
            theme="vs-dark"
            defaultLanguage="python"
            onMount={onMount}
            value={code}
            onChange={onChange}
          />
          <Output />
        </div>
        {isChatOpen && <ChatWindow onChatClick={toggleChat} />}
      </CodeContext.Provider>
    </div>
  );

};

export default CodeEditor;