import Header from "./Header.jsx";
import List from "./List.jsx";
import New from "./New.jsx";
import { useState } from "react";

const Home = () => {
  const [create, setCreate] = useState(true);

  return (
    <div>
      <Header />
      <List />
      <div>
        {
          create == true && <New />
        }
      </div>
    </div>
  );
};

export default Home;