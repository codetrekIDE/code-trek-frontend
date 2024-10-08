import { useContext } from "react";
import { CodeContext } from "./CodeEditor.jsx";
import './Output.css'

const Output = () => {
  const { result } = useContext(CodeContext);

  return (
    <div className="output-container">
      <h1>{result}</h1>
    </div>
  );
}

export default Output;