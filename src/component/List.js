import { Button } from "antd";
import {DeleteFilled, EditFilled} from '@ant-design/icons'

const List = ({ list, onEdit, onDelete }) => {
  return (
    <>
      {list.map((list, index) => (
        <p key={index} className=" mb-3">
          {list} {' '}
          <Button onClick={() => onEdit(index)} icon={<EditFilled />}>แก้ไข</Button> {' '}
          <Button onClick={() => onDelete(index)} icon={<DeleteFilled />}>ลบ</Button>
        </p>
      ))}
    </>
  );
};

export default List;
