import { useState } from "react";
import InputPage from "./InputPage";
import ListPage from "./ListPage";
import { Form } from "antd"

const TodoListPage = () => {
    //ช้ Hook ของ Antd library ชื่อว่า useForm() เพื่อสร้าง instance ของ form โดยให้ form เป็น state ของ component นี้ เพื่อใช้ในการจัดการข้อมูลของ form
    const [form] = Form.useForm();
    const [getTodo, setTodo] = useState([]);


    const onFinish = (values) => {
       
        if (!getTodo) return setTodo([values.text]);
        console.log(getTodo)
        return setTodo([...getTodo, values.text]);
        
    };

    return (
        <InputPage InputForm={form} submitfx={onFinish} />
    );
};

export default TodoListPage;





