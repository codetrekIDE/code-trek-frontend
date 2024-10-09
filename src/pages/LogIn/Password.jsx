import { useContext } from "react";
import { LogInContext } from "./LogIn.jsx";
import './Login.css';

const Password = () => {
  const { password, setPassword } = useContext(LogInContext);

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="App">
        <input
          className="textInput"
          placeholder="PASSWORD"
          value={password}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Password;