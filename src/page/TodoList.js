import List from "../component/List";
import InputBox from "../component/InputBox";
import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();

  const onCreate = () => {
    if (edit != null) {
      const newList = list.map((items, index) => {
        if (edit == index) return todo;
        return items;
      })
      setList(newList);
      setTodo('');
      setEdit(null);
    } else {
      setList([...list, todo]);
      setTodo("");
      console.log(list);
    }
  };

  const onDelete = (index) => {
    const deleted = list.filter((_, i) => i != index);
    setList(deleted);
  };

  const onEdit = (index) => {
    const editValue = list.find((_, i) => i == index);
    setTodo(editValue);
    setEdit(index);
  };

  return (
    <div  className=" text-center">
      <InputBox
        todo={todo}
        onChange={(e) => setTodo(e.target.value)}
        onCreate={onCreate}
        
      />
      <List list={list} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default TodoList;
