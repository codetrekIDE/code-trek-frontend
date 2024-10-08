import './Run.css';
import { useContext } from "react";
import { CodeContext } from "./CodeEditor";

const Run = () => {
  const { onRun } = useContext(CodeContext);

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