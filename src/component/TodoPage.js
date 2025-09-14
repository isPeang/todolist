import { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

const TodoPage = () => {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

    const onCreate = () => { // ฟังก์ชัน onCreate ถูกเรียกใช้เมื่อผู้ใช้กดปุ่ม Create ที่เอาฟังก์ชันนี้ไปใส่ไว้ในปุ่ม
        if (edit != null) { // ตรวจสอบว่าอยู่ในโหมด “แก้ไข” หรือไม่ // ถ้า edit มีค่าอยู่ = โหมดแก้ไข
            const newList = list.map((list, index) => {
                if (index == edit) return todo;
                return list;
            });
            setList(newList);
            setEdit(null);
            setTodo('');
        } else {
            setList([...list, todo]);
            console.log(list)
            setTodo('')
        }
    };

    const onRemove = (index) => {
        const remove = list.filter((_, i) => i !== index);
        setList(remove);
    };

    const onEdit = (index) => {
        const editValue = list.find((_, i) => i === index);
        setTodo(editValue);
        setEdit(index);
    }

    return (
        <div style={{textAlign: 'center'}}>
        
        <h1>To-do List📃</h1>
            <InputComponent todo={todo} onChange={e => setTodo(e.target.value)} onCreate={onCreate} />
            <ListComponent list={list} onRemove={onRemove} onEdit={onEdit} />
        </div>
    );
};

export default TodoPage;