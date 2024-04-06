import { useState } from "react";
import FormInput from "../component/FormInput";
import List from "../component/List";

const TodoPage = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();

  const onCreate = () => {
    if (edit != null) {
      const newList = list.map((items, index) => {
        if (edit == index) return todo; //index ตรงกับอันไหน แก้แค่่อันนั้น
        return items; //ถ้าไม่ใช่ index แก้ไข ให้รีเทิร์นข้อมูลเดิมมาใส่ใน newlist ด้วย
      });
      setList(newList);
      setEdit(null);
    } else { //ต้องใส่ ถ้าไม่ใส่มันจะเข้าเงื่อนไขสร้าง แล้วสร้างใหม่
      setList([...list, todo]);
      console.log(list);
      setTodo("");
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
  };

  return (
    <div className=" text-center">
      <h1 className="text-3xl font-bold m-4">Todo list📝</h1>
      <FormInput
        todo={todo}
        onChange={(e) => setTodo(e.target.value)}
        onCreate={onCreate}
      />
      <List list={list} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
};

export default TodoPage;
