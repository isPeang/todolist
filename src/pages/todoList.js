import { useState } from "react";
import InputBox from "../components/inputBox";
import Lists from "../components/lists";

const TodoList = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();

  const onSubmit = () => {
    if (edit != null) {
      const newList = list.map((list, index) => {
        if (edit == index) return todo;
        return list;
      });
      setList(newList);
      setTodo("");
      setEdit(null);
    } else setList([...list, todo]);
    setTodo("");
  };

  const onDelete = (index) => {
    const remove = list.filter((_, i) => i !== index);
    setList(remove);
  };

  const onEdit = (index) => {
    const editValue = list.find((_, i) => i == index);
    setTodo(editValue);
    setEdit(index);
  };

  return (
    <>
      <div className="  h-[100vh] w-[100vw] flex justify-center overflow-auto p-5 bg-pink-200">
        <div className="  bg-blue-300 rounded p-4 h-[70%]">
          <div className=" flex justify-center text-[25px] mb-4 font-semibold">Todo-list</div>
          <InputBox
            todo={todo}
            onChange={(e) => setTodo(e.target.value)}
            onSubmit={onSubmit}
          />
          <Lists list={list} onDelete={onDelete} onEdit={onEdit} />
        </div>
      </div>
    </>
  );
};

export default TodoList;
