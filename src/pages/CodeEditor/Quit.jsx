import {useContext} from "react";
import {CodeContext} from "./CodeEditor";

const Quit = () => {
  const code = useContext(CodeContext);
  
  return (
    <button>
      Quit
    </button>
  );
};

export default Quit;