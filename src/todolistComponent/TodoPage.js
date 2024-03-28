import { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";


const TOdoPage = () => {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

    const onCreate = () => {
        if (edit != null) {
            const newList = list.map((list, index) => {
                if(index == edit) return todo;
                return list;
            })
            setList(newList);
            setEdit(null);
        } else {
            setList([...list, todo])
            console.log('รายการ', list)
            setTodo('')
        }
    }

    const onRemove = (index) => {
        const remove = list.filter((_, i) => i !== index);
        setList(remove);
    }

    const onEdit = (index) => {
        const indexEdit = list.find((_, i) => i === index)
        setTodo(indexEdit); //แสดงค่าที่ต้องการแก้ไขในกล่อง input
        setEdit(index); //เก็บ index ที่จะแก้ไขไปใช้งานต่อ
    }

    return (
        <div style={{width:'100vw', height:'100vh', backgroundColor:'pink', textAlign:'center'}}>
            <InputComponent value={todo} onChange={e => setTodo(e.target.value)} onCreate={onCreate} />
            <ListComponent list={list} onRemove={onRemove} onEdit={onEdit} />
        </div>
    );
};

export default TOdoPage;