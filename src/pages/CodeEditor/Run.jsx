import './Run.css';
import { useContext } from "react";
import { CodeContext } from "./CodeEditor";

const Run = () => {
  const { onRun } = useContext(CodeContext);

  return (
    <button
      className="run-button"
      onClick={onRun}
    >
      Run
    </button >
  );
};

export default Run;