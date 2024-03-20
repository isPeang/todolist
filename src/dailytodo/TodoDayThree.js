import { useState } from 'react';
import '../App.css';

function TodoDayThree() {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

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
        if (todoValue) setTodo(todoValue);
        setEdit(index);
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