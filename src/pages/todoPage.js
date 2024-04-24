import { useState } from "react";
import InputBox from "../components/inputBox";
import Lists from "../components/lists";

const TodoPage = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();

  const onCreate = () => {
    if (edit != null) {
      const newList = list.map((items, index) => {
        if (index == edit) return todo;
        return items;
      });
      setList(newList);
      setEdit(null);
      setTodo("");
    } else {
      setList([...list, todo]);
      setTodo("");
      console.log(list);
    }
  };

  const onDelete = (index) => {
    const remove = list.filter((_, i) => i !== index);
    setList(remove);
  };

  const onEdit = (index) => {
    const editValue = list.find((_, i) => i === index);
    setTodo(editValue);
    setEdit(index);
  };
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-blue-300 p-0 m-0">
        <div className=" font-bold text-lg mb-4">รายการที่ต้องทำ</div>
      <div className=" p-4 bg-red-200 ">
        <InputBox
          onChange={(e) => setTodo(e.target.value)}
          todo={todo}
          onCreate={onCreate}
        />
        <Lists list={list} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  );
};

export default TodoPage;
