import { useState } from "react";
import Form from "../component/Form";
import { useForm } from "antd/es/form/Form";
import List from "../component/List";

const TodoPage = () => {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState();

  const [form] = useForm();

  const onCreate = () => {
    if (edit != null) {
        form.setFieldsValue(todo);
        const newList = list.map((items, index) => {
            if (edit == index) return todo;
            return items;
        })
        setList(newList);
        setEdit(null);
    } else
    setList([...list, todo]);
    console.log(list);
    form.resetFields();
  };

  const onRemove = (index) => {
    const remove = list.filter((_, i) => i !== index);
    setList(remove);
  }

  const onEdit = (index) => {
    const editValue = list.find((_, i) => i == index);
    setTodo(editValue);
    setEdit(index);
    console.log(editValue);
  }

  return (
    <>
      <Form
        form={form} //ส่งฟอร์มไปก็เป็นการส่ง form.resetFields();
        todo={todo}
        onChange={(e) => setTodo(e.target.value)}
        onCreate={onCreate}
      />
      <List list={list} onRemove={onRemove} onEdit={onEdit} />
    </>
  );
};

export default TodoPage;
