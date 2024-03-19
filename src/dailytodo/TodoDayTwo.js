import '../App.css'
import React, { useState } from "react";

function TodoDayTwo() {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

    function onCreate() {
        if(edit) {
            const newList = list.map((e, i) => {
                if (i === edit) return i;
                return e;
            });
            setList(newList);
            setEdit('')

        } else
        if (todo.length) {
            setList([...list, todo]);
            console.log(list)
            setTodo('')
        }
    }

    function onEdit(index) {
        const value = list.find((_, i) => i === index);
        if(value) setTodo(value);
        setEdit(index);
    }
    
    function onDelete(index) {
        const removedlist = list.filter((_, i) => i !== index);
        setList(removedlist);

    }

    return (
        <div className="App">
            <input
                type="text"
                value={todo}
                onChange={e => setTodo(e.target.value)} />
            {' '}
            <button onClick={onCreate}>Create</button>

            {list.map((list, index) =>
                <p key={index}>
                    {list}  {' '}
                    <button onClick={() => onEdit(index)}>Edit</button> {' '}
                    <button onClick={() => onDelete(index)}>Delete</button>
                </p>
            )}
        </div>
    );

};

export default TodoDayTwo;