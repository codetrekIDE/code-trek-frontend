import { useEffect, useState } from "react";
import { projectList } from "../../api/project.js";
import Item from "./Item";
import './List.css';

// const mockData = [
//   {
//     id: 0,
//     title: "React 공부하기",
//     updated_at: new Date().toLocaleString(),
//   },
//   {
//     id: 1,
//     title: "빨래하기",
//     updated_at: new Date().toLocaleString(),
//   },
//   {
//     id: 2,
//     title: "노래 연습하기",
//     updated_at: new Date().toLocaleString(),
//   },
// ];


const List = () => {
  // const [list, setList] = useState(mockData);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await projectList();
      if (res.status == 200) {
        setList(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="item-container">
        {list.map((project) => (
          <Item key={project.id} project={project} />
        ))}
      </div>
    </div>

  );
};

export default List;
