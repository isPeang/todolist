import { Button, Card } from "antd";
import  { EditOutlined , DeleteOutlined } from '@ant-design/icons';

const Lists = ({ list, onEdit, onDelete }) => {
  return (
    <>
      {list.map((list, index) => (
        <p key={index} className=" m-4">{list} {'  '}
        <Button onClick={() => onEdit(index)} icon={<EditOutlined />}>แก้ไข</Button> {' '}
        <Button onClick={() => onDelete(index)} icon={<DeleteOutlined />} className=" bg-red-500 text-white">ลบ</Button>
       </p>
      ))}
    </>
  );
};

export default Lists;
