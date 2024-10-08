import { useContext } from "react";
import { CodeContext } from "./CodeEditor";
import './Quit.css'

const Quit = () => {
  const { onSubmit } = useContext(CodeContext);

  return (
    <button
      className="quit-button"
      onClick={onSubmit}
    >
      Quit
    </button>
  );
};

export default Quit;