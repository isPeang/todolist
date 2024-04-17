import { Button } from "antd";

const List = ({ list, onEdit, onDelete }) => {
  return (
    <>
      {list.map((list, index) => (
        <p key={index} className=" mb-3">
          {list} {' '}
          <Button onClick={() => onEdit(index)}>แก้ไข</Button> {' '}
          <Button onClick={() => onDelete(index)}>ลบ</Button>
        </p>
      ))}
    </>
  );
};

export default List;
