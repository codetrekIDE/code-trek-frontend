import { LogInContext } from "./LogIn.jsx";
import { useContext } from "react";
import './LogIn.css';

const Button = () => {
  const { signInHandler } = useContext(LogInContext);

  return (
    <div>
      <div className="App">
        {/* Log In 버튼 */}
        <button
          className="loginButton"
          onClick={signInHandler}
          placeholder="login"
        >
          Log In
        </button>
      </div>

      <div className="signup">
        <button>sign up</button>
      </div>
    </div>
  );
};

export default Button;