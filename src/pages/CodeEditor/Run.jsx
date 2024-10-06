import './Run.css';
import {useState} from "react";
import {CodeContext} from "./CodeEditor";

const Run = () => {
  const onRun = useState(CodeContext);
  
  return (
    <button
      className="Run"
      onClick={onRun}
    >
      Run
    </button >
  );
};

export default Run;