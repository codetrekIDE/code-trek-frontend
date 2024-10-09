import './Item.css';

const Item = ({ project }) => {
  const { title, updated_at } = project;

  return (
    <div className="item">
      <div>{title}</div>
      <div>{updated_at.toLocaleString()}</div>
    </div>
  );
};

export default Item;