import { useState } from "react";
import InputComponent from "../component/InputComponent";
import ListComponent from "../component/ListComponent";

const TodoPage = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();

  const onCreate = () => {
    if (edit != null) {
      const newList = list.map((items, index) => {
        if (edit === index) return todo;
        return items;
      });
      setList(newList);
      setEdit(null);
    } else setList([...list, todo]);
    console.log(list);
    setTodo("");
  };

  const onRemove = (index) => {
    const remove = list.filter((_, i) => i !== index);
    setList(remove);
  };

  const onEdit = (index) => {
    const editValue = list.find((_, i) => i === index);
    setTodo(editValue);
    setEdit(index);
  };

  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className=" text-center p-6">
        <h1 className=" text-4xl font-bold m-4">Todo-List📝 </h1>
        <InputComponent
          todo={todo}
          onChange={(e) => setTodo(e.target.value)}
          onCreate={onCreate}
        />
        <ListComponent list={list} onRemove={onRemove} onEdit={onEdit} />
      </div>
    </div>
  );
};

export default TodoPage;
