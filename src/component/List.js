import { Button } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

const List = ({ list, onRemove, onEdit }) => {
  return (
    <div>
      {list.map((list, index) => (
        <p key={index} className=" m-1">
          {list}{" "}
          <Button icon={<EditFilled />} onClick={() => onEdit(index)}>
            Edit
          </Button>{" "}
          <Button
          icon={<DeleteFilled />}
            className=" bg-red-700 text-white"
            onClick={() => onRemove(index)}
          >
            Delete
          </Button>
        </p>
      ))}
    </div>
  );
};

export default List;
