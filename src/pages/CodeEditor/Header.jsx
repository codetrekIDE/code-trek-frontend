import Run from "./Run";
import Quit from "./Quit";
import './Header.css'

const Header = () => {

  return (
    <div className="header-container">
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