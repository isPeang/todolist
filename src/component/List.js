import { Button } from "antd";

const List = ({ list, onRemove, onEdit }) => {
  return (
    <div>
      {list.map((list, index) => (
        <p key={index}>
            {list} {' '}
            <Button onClick={() => onEdit(index)}>Edit</Button>{' '}
            <Button onClick={() => onRemove(index)}>Delete</Button>
        </p>
      ))}
    </div>
  );
};

export default List;
