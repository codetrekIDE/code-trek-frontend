import { useContext } from "react";
import { CodeContext } from "./CodeEditor";
import './Quit.css'

const Quit = () => {
  const { projectId, code, onSubmit } = useContext(CodeContext);

  return (
    <button
      className="quit-button"
      onClick={() => {
        onSubmit(projectId, code);
      }}
    >
      Quit
    </button>
  );
};

export default Quit;