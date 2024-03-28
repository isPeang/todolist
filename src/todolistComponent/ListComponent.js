import { Button } from "antd";

const ListComponent = ({ list, onRemove, onEdit }) => {
    return (
        <>
            {list.map((list, index) =>
                <p key={index}>
                    {list} {' '}
                    <Button onClick={() => onEdit(index)}>Edit</Button>{' '}
                    <Button onClick={() => onRemove(index)}>Delete</Button>
                </p>
            )}
        </>
    );
};

export default ListComponent;