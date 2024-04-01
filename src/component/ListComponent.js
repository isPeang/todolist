import { Button } from "antd";
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const ListComponent = ({ list, onRemove, onEdit }) => {
    return (
        <>
            {list.map((list, index) =>
                <p key={index}>
                    {list} {' '}
                    <Button onClick={() => onEdit(index)}><EditFilled /></Button> {' '}
                    <Button onClick={() => onRemove(index)} style={{ backgroundColor: 'red', color: 'white' }}><DeleteFilled /></Button>
                </p>
            )}
        </>
    );
};

export default ListComponent;