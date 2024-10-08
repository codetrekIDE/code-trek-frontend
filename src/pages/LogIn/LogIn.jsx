import { createContext, useState } from "react";
import { signIn } from "../../api/auth.js";
import img from "../../assets/Osori.jpg";
import { Username, Password, Button } from "./index.js";
import './Login.css';
import { useNavigate } from "react-router-dom";

export const LogInContext = createContext();

const LogIn = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInHandler = async (e) => {
    try {
      e.preventDefault();
      const res = await signIn({
        loginId: loginId,
        password: password,
      });
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      {/* 왼쪽에 이미지 섹션 */}
      <div className="image-section">
        <img src={img} alt="Login visual" className="login-image" />
      </div>

      {/* 오른쪽에 로그인 섹션 */}
      <LogInContext.Provider value={{ loginId, password, setLoginId, setPassword, signInHandler }}>
        <div className="login-section">
          <h1 className="login-title">LOGIN</h1>
          <section>
            <Username />
          </section>
          <section>
            <Password />
          </section>
          <section>
            <Button />
          </section>
        </div>
      </LogInContext.Provider>

    </div>
  );
};

export default LogIn;