// import { useState } from "react";
// import { projectCreate } from "../../api/project.js";
// import { useNavigate } from "react-router-dom";

// const New = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const navigate = useNavigate();

//   const onChangeTitle = (e) => {
//     setTitle(e.target.value);
//   };

//   const onChangeDescription = (e) => {
//     setDescription(e.target.value);
//   };

//   const onSubmit = async () => {
//     const data = {
//       title: title,
//       description: description,
//       // createdAt: new Date(),
//     }

//     try {
//       const res = await projectCreate(data);
//       if (res.status === 200) {
//         navigate(`/project/${res.data.projectId}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <div>Title</div>
//       <input
//         value={title}
//         onChange={onChangeTitle}
//         placeholder="Title"
//       />
//       <div>Description</div>
//       <input
//         value={description}
//         onChange={onChangeDescription}
//         placeholder="Description"
//       />
//       <button onClick={onSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default New;

import { useState } from "react";
import { projectCreate } from "../../api/project.js";
import { useNavigate } from "react-router-dom";
import "./New.css";

const New = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ModalWindow, setModalWindow] = useState(false);

  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async () => {
    const data = {
      title: title,
      description: description,
      createdAt: new Date(),
    };

    try {
      const res = await projectCreate(data);
      if (res.status === 200) {
        navigate(`/project/${res.data.projectId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setModalWindow(true);
  };

  const closeModal = () => {
    setModalWindow(false);
  };

  return (
    <div className="container">
      <h1>Project</h1>
      <button onClick={openModal}>Create a new project</button>

      {ModalWindow && (
        <div className="modal">
          <div className="modal-content">
            <div>Title</div>
            <input
              value={title}
              onChange={onChangeTitle}
              placeholder="Title"
            />
            <div>Description</div>
            <input
              value={description}
              onChange={onChangeDescription}
              placeholder="Description"
            />
            <button onClick={onSubmit}>Submit</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default New;