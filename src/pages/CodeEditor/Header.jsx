import Run from "./Run";
import Quit from "./Quit";
import Timer from "./Timer";
import './Header.css'

const Header = () => {

  return (
    <div className="header-container">
      <div className="timer-container">
        <Timer />
      </div>
      <div className="run-container">
        <Run />
      </div>
      <div className="quit-container">
        <Quit />
      </div>
    </div>
  );
};

export default Header;