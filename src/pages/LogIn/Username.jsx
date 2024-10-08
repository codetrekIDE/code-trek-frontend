import { useContext, useState } from "react";
import { LogInContext } from "./LogIn.jsx";

const Username = () => {
  const { loginId, setLoginId } = useContext(LogInContext);

  const onChange = (e) => {
    setLoginId(e.target.value);
  };

  return (
    <div>
      <div className="App">
        <input
          type="text"
          className="textInput"
          placeholder="USERNAME"
          value={loginId}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Username;