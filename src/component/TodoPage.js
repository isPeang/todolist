import { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

const TodoPage = () => {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

    const onCreate = () => {
        if (edit != null) {
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