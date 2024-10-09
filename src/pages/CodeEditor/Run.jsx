import './Run.css';
import { useContext } from "react";
import { CodeContext } from "./CodeEditor";

const Run = () => {
  const { code, onRun } = useContext(CodeContext);

  return (
    <button
      className="run-button"
      onClick={() => {
        onRun(code);
      }}
    >
      Run
    </button >
  );
};

export default Run;

