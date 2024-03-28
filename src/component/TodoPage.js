import React, { useState } from 'react';
import InputPage from './InputPage';
import ListPage from './ListPage';
import { Card, Layout } from "antd";

const TodoPage = () => {
    const [todo, setTodo] = useState();
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState();

    const onCreate = () => {
        if (edit != null) {
            const newList = list.map((items, index) => {
                if (index === edit) return todo; //ถ้า index === edit ให้ return todo ที่เป็นข้อมูลใหม่ที่ผู้ใช้ป้อนเข้ามา
            })
            setList(newList); //ได้ array ใหม่แก้ไขรายการสำเร็จแล้ว จะใช้ setList เพื่ออัปเดต state list ให้เป็น array ใหม่ที่มีการแก้ไขแล้ว
            setEdit(null);
        } else
            if (todo.length) setList([...list, todo]);
        setTodo('');
        console.log(list)
    }

    const onRemove = (index) => {
        const removed = list.filter((_, i) => i !== index);
        setList(removed);
        console.log('รายการที่เหลือจากการลบ', removed);
    }

    const onEdit = (index) => {
        const findEdit = list.find((_, i) => i == index); //เอาค่าที่ตรงกับ index ที่คลิกมา เก็บไว้ในตัวแปร findEdit
        if (findEdit) setTodo(findEdit); //แล้วเอามา setTodo เพื่อไปแสดงในช่อง input
        setEdit(index); //set ค่า index ที่จะแก้ไขไปที่ตัวแปร edit
    }

    return (
        <Layout style={{ backgroundColor: 'pink' }}>
            <div>
                <InputPage input={todo} change={e => setTodo(e.target.value)} submitbtn={onCreate} />
                <ListPage listmap={list} removebtn={onRemove} editbtn={onEdit} />
            </div>
        </Layout>
    );
};

export default TodoPage;