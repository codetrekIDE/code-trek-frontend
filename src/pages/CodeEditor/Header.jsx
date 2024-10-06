import Run from "./Run";
import Quit from "./Quit";

const Header = () => {

  return (
    <div>
      <div style={{
        textAlign: 'center',
        height: '100%',
      }}>
        <Run/>
      </div>
      <div>
        <Quit/>
      </div>
    </div>
  );
};

export default Header;