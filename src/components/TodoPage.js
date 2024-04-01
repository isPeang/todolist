import Input from "./InputComponent";
import List from "./ListComponent";
import React, { useState } from "react";

const TodoPage = () => {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

    const onCreate = () => {
        if (edit != null) {
            const newList = list.map((items, index) => {
                if (index === edit) return todo;
                return items;
            });
            setList(newList);
            setEdit(null);
        } else {
            setList([...list, todo]);
            console.log(list);  
            setTodo('');
        }
    }

    //ฟังก์ชันนี้จะ ลบข้อมูลออกจาก list โดยการกรองและเลือกข้อมูลที่ไม่มีดัชนีเท่ากับดัชนีที่รับเข้ามา และอัปเดต list ด้วยข้อมูลใหม่ที่ผ่านการกรองนี้แล้ว
    const onRemove = (index) => {
        //ใช้ filter() เพื่อสร้างอาร์เรย์ใหม่ remove ซึ่งเป็น list ที่ผ่านการกรอง 
        const remove = list.filter((_, i) => i !== index); //เลือกเฉพาะข้อมูลที่มีดัชนี (i) ไม่เท่ากับ index ที่รับเข้ามา เพื่อให้ได้ remove ที่ไม่มีข้อมูลที่ต้องการลบออกไป
        setList(remove);
    }

    const onEdit = (index) => {
        const editValue = list.find((_, i) => i === index);
        setTodo(editValue);
        setEdit(index);
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>To-do List📝</h1>
            <Input todo={todo} change={e => setTodo(e.target.value)} onCreate={onCreate} />
            <List list={list} onRemove={onRemove} onEdit={onEdit} />
        </div>
    );
};

export default TodoPage;