const Item = ({ project }) => {
  const { id, title, updated_at } = project;

  return (
    <div>
      <div>{title}</div>
      <div>Updated: {new Date(updated_at).toLocaleString()}</div>
    </div>
  );
};

export default Item;