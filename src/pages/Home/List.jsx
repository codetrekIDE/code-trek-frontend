import { useEffect, useState } from "react";
import { projectList } from "../../api/project.js";
import Item from "./Item";

const dummy = [
  {
    id: 1,
    title: 'a',
    updated_at: new Date(),
  }
]

const List = () => {
  const [list, setList] = useState(dummy);

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
      {list.map((project) => (
        <Item key={project.id} project={project} />
      ))}
    </div>
  );
};

export default List;