import { useState } from 'react';
import '../App.css';

function TodoDayThree() {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState(); //edit เป็น state ที่ใช้เก็บ idex ของรายการที่ต้องการแก้ไข

    function onCreate() {
        if (edit !== null) { //แก้ไขโค้ดส่วนนี้เพื่อให้สามารถ edit ได้
            const newlist = list.map((item, index) => {
                if (index === edit) return todo;
                return item;
            });
            setList(newlist);
            setEdit(null);
            
        } else
            if (todo.length) {
                setList([...list, todo]);
                setTodo('');
            }
    }

    function onEdit(index) {
        const todoValue = list.find((_, i) => i === index);
        if (todoValue) //เมื่อเราได้รายการที่ต้องการแก้ไขมาแล้ว เราจะตรวจสอบว่ารายการนั้นมีค่าหรือไม่ หากมีค่าแสดงว่าเราเจอรายการที่ต้องการแล้ว
        setTodo(todoValue); //จะใช้ setTodo เพื่อกำหนดค่า todo เป็นค่าของรายการนั้น ซึ่งก็คือข้อมูลที่ต้องการแก้ไข
        setEdit(index); //กำหนดค่า edit เป็น index ของรายการที่ต้องการแก้ไข เพื่อระบุว่าตอนนี้เรากำลังแก้ไขรายการที่มี index นี้ในรายการที่ต้องทำ
    }

    function onDelete(index) {
        const deleted = list.filter((_, i) => i !== index);
        setList(deleted);
    }


    return (
        <div className='App'>
        <div >
            <input
            
                type='text'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            /> {' '}
            <button onClick={onCreate}>Create</button>

            {list.map((list, index) =>
                <p key={index}>
                    {list}{' '}
                    <button onClick={() => onEdit(index)}>Edit</button> {' '}
                    <button onClick={() => onDelete(index)}>Delete</button>
                </p>
            )}
        </div>
        </div>
    );
};

export default TodoDayThree;