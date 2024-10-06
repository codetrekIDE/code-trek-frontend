import {useContext} from "react";
import {CodeContext} from "./CodeEditor.jsx";

const Output = () => {
  const result = useContext(CodeContext);
  
  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
}

export default Output;