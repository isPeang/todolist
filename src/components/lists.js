import { Button} from "antd";
import {DeleteFilled, EditFilled} from '@ant-design/icons'

const Lists = ({ list, onDelete, onEdit }) => {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <>
      {list.map((list, index) => (
        <p key={index} className=" mb-2 flex justify-between">
          <div className=" mr-3">{list}</div>
          <div>
            <Button onClick={() => onEdit(index)} icon={<EditFilled />} className=" mr-2">แก้ไข</Button>
            <Button onClick={() => onDelete(index)} icon={<DeleteFilled />} className=" bg-red-700 text-white">ลบ</Button>
          </div>
        </p>
      ))}
    </>
  );
};

export default Lists;
