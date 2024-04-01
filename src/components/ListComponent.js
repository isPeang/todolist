import { Button } from "antd";
import {EditFilled, DeleteFilled} from '@ant-design/icons'

const List = ({list, onRemove, onEdit}) => {
    return (
        <>
       {list.map((list, index) => 
       <p key={index}>
       {list} {' '}
       <Button onClick={() => onEdit(index)} icon={<EditFilled />} >Edit</Button> {' '}
       <Button onClick={() => onRemove(index)} icon={<DeleteFilled />} style={{backgroundColor: 'red', color:'white'}}>Delete</Button>
       </p>)}
       </>
    );
};

export default List;