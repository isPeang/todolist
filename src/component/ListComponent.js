import { Button } from "antd";
import { EditFilled, DeleteFilled } from '@ant-design/icons'

const ListComponent = ({ list, onRemove, onEdit }) => {
    return (
        <>{list.map((items, index) =>
            <p key={index} className=" m-1">
                {items}{' '}
                <Button
                    icon={<EditFilled />}
                    onClick={() => onEdit(index)}
                >
                    Edit
                </Button> {' '}
                <Button
                    icon={<DeleteFilled />}
                    className=" bg-red-700 text-white"
                    onClick={() => onRemove(index)}
                >
                    Delete
                </Button>
            </p>
        )}</>
    );
};

export default ListComponent;