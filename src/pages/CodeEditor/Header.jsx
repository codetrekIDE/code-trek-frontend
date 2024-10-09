import Run from "./Run";
import Quit from "./Quit";
import Timer from "./Timer";
import './Header.css'

const Header = ({onChatClick}) => {

  return (
    <div className="header-container">
      <div className="timer-container">
        <Timer />
      </div>
      <div className="run-container">
        <Run />
      </div>
      <div>
        <button onClick={onChatClick}>chat</button>
      </div>
      <div className="quit-container">
        <Quit />
      </div>
    </div>
  );
};

export default Header;